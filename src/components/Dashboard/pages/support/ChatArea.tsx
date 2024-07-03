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
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { format } from "timeago.js";
import { IoClose, IoLinkOutline } from "react-icons/io5";
import Image from "next/image";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
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
  senderUser: any;
  handleClearUploadImage: () => void;
  handleFileChange: (file: File | null) => void;
  loading: boolean;
}
const ChatArea: React.FC<ChatAreaProps> = ({
  message,
  allMessage,
  handleSubmit,
  handleMessageOnChange,
  onSubmit,
  senderUser,
  handleClearUploadImage,
  handleFileChange,
  loading,
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
          p: 1,
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
                  senderUser?._id === message?.msgByUserId
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              <Box sx={{ maxWidth: "60%" }}>
                <Paper
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    backgroundColor:
                      senderUser?._id === message?.msgByUserId
                        ? "#1591A3"
                        : "#e0e0e0",
                    boxShadow: "none",
                    textAlign:
                      senderUser?._id === message?.msgByUserId
                        ? "right"
                        : "left",
                    color:
                      senderUser?._id === message?.msgByUserId
                        ? "white"
                        : "black",
                  }}
                >
                  {message?.imageUrl && (
                    <Image
                      src={message?.imageUrl}
                      className="w-full h-full object-scale-down"
                      alt=""
                      width={100}
                      height={100}
                    />
                  )}
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
        {message.imageUrl && (
          <div className="w-full h-full sticky bottom-0 bg-slate-700 bg-opacity-30 flex justify-center items-center rounded overflow-hidden">
            <div
              className="w-fit p-2 absolute top-0 right-0 cursor-pointer hover:text-red-600"
              onClick={handleClearUploadImage}
            >
              <IoClose size={30} />
            </div>
            <div className="bg-white p-3">
              <Image
                src={message.imageUrl}
                alt="uploadImage"
                className="aspect-square w-full h-full max-w-sm m-2 object-scale-down"
                height={100}
                width={100}
              />
            </div>
          </div>
        )}
        <>
          {loading && (
            <div className="w-full h-full sticky bottom-0 bg-slate-700 bg-opacity-30 flex justify-center items-center rounded overflow-hidden">
              Loading...
            </div>
          )}
        </>
      </Box>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <div

                className="flex flex-col items-start "
              >
                <input
                  type="text"
                  placeholder="Compose your message...."
                  className="w-[100%] bg-transparent  h-10 placeholder:text-[14px] "
                  value={message?.text}
                  onChange={handleMessageOnChange}
                />
                <div className="pb-2 flex space-x-2 items-center text-[#707584] ">
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => {
                      const file =
                        (e.target as HTMLInputElement).files?.[0] || null;
                      handleFileChange(file);
                    }}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="file" className=" cursor-pointer">
                    <IoLinkOutline className=" chatIcon" />
                  </label>

                  <GraphicEqIcon className=" chatIcon" />
                </div>
              </div>
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
              <Button type='submit' >
                <SendIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};
export default ChatArea;
