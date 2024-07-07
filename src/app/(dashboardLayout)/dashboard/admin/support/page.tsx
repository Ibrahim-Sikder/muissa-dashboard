"use client";
import * as React from "react";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Grid,
  ListItemText,
  Typography,
} from "@mui/material";
import UserList from "@/components/Dashboard/pages/support/UserList";
import ChatArea from "@/components/Dashboard/pages/support/ChatArea";
import type { Metadata } from "next";
import { useForm } from "react-hook-form";
import { getCookie } from "@/helpers/Cookies";
import { io, Socket } from "socket.io-client";
import { ChangeEvent, useEffect, useState } from "react";
import uploadFile from "@/helpers/uploadFile";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

interface UserDetails {
  _id: string;
  name: string;
  auth: string;
  profile_pic: string;
  online: boolean;
}
interface User {
  id: number;
  name: string;
  avatar: string;
  status: "online" | "offline";
}

export default function SupportContactPage() {
  // const [messages, setMessages] = useState<Message[]>(mockMessages);
  // const [newMessage, setNewMessage] = useState("");
  // const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // const handleSendMessage = () => {
  //   if (newMessage.trim()) {
  //     const timestamp = new Date().toLocaleTimeString([], {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     });
  //     setMessages([
  //       ...messages,
  //       {
  //         id: messages.length + 1,
  //         sender: "User",
  //         content: newMessage.trim(),
  //         timestamp,
  //       },
  //     ]);
  //     setNewMessage("");
  //   }
  // };
  const [loading, setLoading] = useState<boolean>(false);

  const [senderUser, setSenderUser] = useState({
    _id: "",
    name: "",
    auth: "",
    profile_pic: "",
  });
  const [allSenderUser, setAllSenderUser] = useState([]);
  const [allSenderForAdmin, setAllSenderForAdmin] = useState([]);
  const [allMessage, setAllMessage] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    imageUrl: "",
  });
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUser, setOnlineUser] = useState<string[]>([]);

  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const token = getCookie("mui-token");
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  useEffect(() => {
    const socketConnection = io(`${process.env.NEXT_PUBLIC_SOCKET_API_URL}`, {
      auth: {
        token: token,
      },
    });
    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
    };
  }, [token]);

  useEffect(() => {
    if (socket) {
      socket.on("onlineUser", (data: string[]) => {

        setOnlineUser(data);
      });

      if (userId) {
        socket.emit("message-page", userId);
      }

      //  pasci token theke
      socket.on(
        "sender-user",
        (data: {
          _id: string;
          name: string;
          auth: string;
          profile_pic: string;
        }) => {

          setSenderUser(data);
        }
      );

      socket.emit("seen", userId);
      // receiver id theke
      socket.on("message-user", (data: UserDetails) => {
   
        setUserDetails(data);
      });

      if (userId) {
        socket.on("message", (data) => {
     
          setAllMessage(data);
        });
      }

      socket.on("conversation", (data) => {
        const filteredData = data.filter(
          (con: { sender: { _id: string } }) =>
            con.sender._id !== senderUser?._id
        );
        setAllSenderUser(filteredData);
      });

      socket.on("all-admin-conversation", (data) => {
        // console.log("Received all-admin-conversation:", data);
    

        setAllSenderForAdmin(data);
      
      });

      socket.on("error", (data) => {
        return toast.error(data);
      });
    }
  }, [senderUser._id, socket, userId]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    if (message.text || message.imageUrl) {
      if (socket) {
        socket.emit("new-message", {
          sender: senderUser?._id,
          receiver: userId,
          text: message.text,
          imageUrl: message.imageUrl,
          msgByUserId: senderUser?._id,
        });
        setMessage({
          text: "",
          imageUrl: "",
        });
      }
    }
  };

  const handleMessageOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setMessage((prevState) => ({
      ...prevState,
      text: value,
    }));
  };

  const handleFileChange = async (file: File | null) => {
    if (!file) return;

    setLoading(true);

    try {
      const uploadPhoto = await uploadFile(file);

      setMessage((prev) => {
        return {
          ...prev,
          imageUrl: uploadPhoto?.secure_url,
        };
      });
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const handleClearUploadImage = () => {
    setMessage((prev) => {
      return {
        ...prev,
        imageUrl: "",
      };
    });
  };

  const handleUserAccept = (id: string) => {
    if (socket) {
      socket.emit("accept-message", id, senderUser?._id);
      socket.on("error", (data) => {
        return toast.error(data);
      });
    }
  };

  // const pathname= usePathname()
 
  return (
    <Box
      maxWidth="lg"
      margin={"0px auto 100px"}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        backgroundColor: "white",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#f9f9f9",
        }}
      >
        {userDetails ? (
          <div className="flex justify-center">
            <>
              <Badge
                color={
                  onlineUser.includes(userDetails?._id ?? "")
                    ? "success"
                    : "default"
                }
                variant="dot"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                overlap="circular"
              >
                <Avatar alt={userDetails?.name} src={userDetails.profile_pic} />
              </Badge>
              <ListItemText
                primary={userDetails?.name}
                secondary={
                  onlineUser.includes(userDetails?._id ?? "")
                    ? "online"
                    : "offline"
                }
                sx={{ ml: 2 }}
              />
            </>
          </div>
        ) : (
          <Typography variant="h5">Support Chat</Typography>
        )}
      </Box>
      <Grid container sx={{ flexGrow: 1, height: "100%" }}>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            overflowY: "auto",
            backgroundColor: "#f9f9f9",
          }}
        >
          <UserList
            users={allSenderUser}
            onlineUser={onlineUser}
            userId={userId}
            userForAdmin={allSenderForAdmin}
            handleUserAccept={handleUserAccept}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <ChatArea
            message={message}
            allMessage={allMessage}
            handleMessageOnChange={handleMessageOnChange}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            senderUser={senderUser}
            handleFileChange={handleFileChange}
            handleClearUploadImage={handleClearUploadImage}
            loading={loading}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
