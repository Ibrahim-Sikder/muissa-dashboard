"use client";
import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import UserList from "@/components/Dashboard/pages/support/UserList";
import ChatArea from "@/components/Dashboard/pages/support/ChatArea";
import type { Metadata } from "next";
import { useForm } from "react-hook-form";
import { getCookie } from "@/helpers/Cookies";
import { io, Socket } from "socket.io-client";
import { ChangeEvent, useEffect, useState } from "react";
interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}
interface User {
  id: number;
  name: string;
  avatar: string;
  status: "online" | "offline";
}
const mockMessages: Message[] = [
  {
    id: 1,
    sender: "Support",
    content: "Hello! How can we help you today?",
    timestamp: "10:00 AM",
  },
  {
    id: 2,
    sender: "User",
    content: "I have an issue with my order.",
    timestamp: "10:01 AM",
  },
  {
    id: 3,
    sender: "Support",
    content: "Sure, can you please provide your order ID?",
    timestamp: "10:02 AM",
  },
];
const mockUsers: User[] = [
  {
    id: 1,
    name: "Alcides Antonio",
    avatar: "/assets/avatar-10.png",
    status: "online",
  },
  {
    id: 2,
    name: "Marcus Finn",
    avatar: "/assets/avatar-9.png",
    status: "offline",
  },
  { id: 3, name: "Jie Yan", avatar: "/assets/avatar-8.png", status: "online" },
  {
    id: 4,
    name: "Nasimiyu Danai",
    avatar: "/assets/avatar-7.png",
    status: "offline",
  },
];
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


 

  const [senderUser, setSenderUser] = useState({
    _id: "",
    name: "",
    token: "",
  });
  const [allMessage, setAllMessage] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    imageUrl: "",
  });
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUser, setOnlineUser] = useState([]);

  const [userDetails, setUserDetails] = useState({
    _id: "",
    name: "",
    token: "",
    online: false,
  });

  const token = getCookie("mui-token");

  const userId = '666033cff9dc2324dde3c27b'

  useEffect(() => {
    const socketConnection = io("http://localhost:5000/", {
      auth: {
        token: token,
      },
    });
    setSocket(socketConnection);
    socketConnection.on("onlineUser", (data) => {
      // console.log({ data });
      setOnlineUser(data);
    });

    socketConnection.emit("message-page", userId);


    //  pasci token theke 
    socketConnection.on(
      "sender-user",
      (data: { _id: string; name: string; token: string }) => {
        // console.log(data);
        setSenderUser(data);
      }
    );


    // receiver id theke 
    socketConnection.on(
      "message-user",
      (data: { _id: string; name: string; token: string; online: boolean }) => {
        // console.log({data});
        setUserDetails(data);
      }
    );

    


   

    socketConnection.on('message',(data)=>{
      // console.log('message data',data)
      setAllMessage(data)
    })

    return () => {
      socketConnection.disconnect();
    };
  }, [token]);

 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();




  console.log("senderUser?._id", senderUser?._id)

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
  // console.log({senderUser})
  console.log({allMessage})
  // console.log(userDetails);

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
        <Typography variant="h5">Support Chat</Typography>
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
          {/* <UserList
            users={mockUsers}
            // selectedUser={selectedUser}
            // onSelectUser={setSelectedUser}
          /> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {/* <ChatArea
            // messages={messages}
            allMessage={allMessage}
            onNewMessageChange={handleMessageOnChange}
            onSendMessage={handleSendMessage}
          /> */}
          <ChatArea
            message={message}
            allMessage={allMessage}
            handleMessageOnChange={handleMessageOnChange}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            user={senderUser}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
