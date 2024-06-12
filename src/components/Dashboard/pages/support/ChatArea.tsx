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
import { format } from "timeago.js";
// interface Message {
//   id: number;
//   sender: string;
//   receiver: string;
//   content: string;
//   timestamp: string;
// }
interface ChatAreaProps {
  message: any;
  allMessage: any;
  handleSubmit: any;
  handleMessageOnChange: any;
  onSubmit: any;
  user: any;
}
const ChatArea: React.FC<ChatAreaProps> = ({
  message,
  allMessage,
  handleSubmit,
  handleMessageOnChange,
  onSubmit,
  user,
}) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [allMessage]);

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
          {allMessage?.map((message: any) => (
            <ListItem
              key={message?.id}
              sx={{
                display: "flex",
                justifyContent:
                  user?._id === message?.msgByUserId
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              <Box sx={{ maxWidth: "60%" }}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor:
                      user?._id === message?.msgByUserId
                        ? "#f0f0f0"
                        : "#e0e0e0",
                    boxShadow: "none",
                    textAlign:
                      user?._id === message?.msgByUserId ? "right" : "left",
                  }}
                >
                  <ListItemText
                    primary={message.text}
                    secondary={format(message.updatedAt)}
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-start "
            >
              <input
                type="text"
                placeholder="Compose your message...."
                className="w-[100%] bg-transparent  h-10 placeholder:text-[14px] "
                value={message?.text}
                onChange={handleMessageOnChange}
              />
            </form>
            {/* <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={allMessage}
              onChange={onNewMessageChange}
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
            /> */}
          </Grid>
          <Grid item>
            <IconButton color="primary">
              <SendIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default ChatArea;
