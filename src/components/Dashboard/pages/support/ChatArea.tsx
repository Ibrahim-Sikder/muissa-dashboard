import React, { useRef, useEffect } from "react";
import {
  Box,
  TextField,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  InputAdornment,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

interface ChatAreaProps {
  messages: Message[];
  newMessage: string;
  onNewMessageChange: (message: string) => void;
  onSendMessage: () => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({
  messages,
  newMessage,
  onNewMessageChange,
  onSendMessage,
}) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "80vh" }}>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "scroll",
          p: 2,
          backgroundColor: "#fafafa",
        }}
      >
        <List>
          {messages.map((message) => (
            <ListItem
              key={message.id}
              sx={{
                display: "flex",
                justifyContent:
                  message.sender === "User" ? "flex-end" : "flex-start",
              }}
            >
              <Box sx={{ maxWidth: "60%" }}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor:
                      message.sender === "User" ? "#f0f0f0" : "#e0e0e0",
                    boxShadow: "none",
                    textAlign: message.sender === "User" ? "right" : "left",
                  }}
                >
                  <ListItemText
                    primary={message.content}
                    secondary={message.timestamp}
                  />
                </Paper>
              </Box>
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </Box>
      <Divider />
      <Box
        sx={{
          p: 2,
          backgroundColor: "white",
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => onNewMessageChange(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  onSendMessage();
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="primary">
                      <AttachFileIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <IconButton color="primary" onClick={onSendMessage}>
              <SendIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChatArea;
