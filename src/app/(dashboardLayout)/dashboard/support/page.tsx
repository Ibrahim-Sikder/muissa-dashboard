"use client";
import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ChatArea from "@/components/Dashboard/pages/support/ChatArea";
import UserList from "@/components/Dashboard/pages/support/UserList";

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
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "User",
          content: newMessage.trim(),
          timestamp,
        },
      ]);
      setNewMessage("");
    }
  };
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
          <UserList
            users={mockUsers}
            selectedUser={selectedUser}
            onSelectUser={setSelectedUser}
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
            messages={messages}
            newMessage={newMessage}
            onNewMessageChange={setNewMessage}
            onSendMessage={handleSendMessage}
          />
        </Grid>
      </Grid>
    </Box>
  );
}