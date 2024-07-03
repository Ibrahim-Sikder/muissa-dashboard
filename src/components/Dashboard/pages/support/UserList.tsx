import React, { useState } from "react";
import qs from "query-string";
import { List, ListItem, ListItemText, Avatar, Badge, Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

interface Sender {
  _id: string;
  name: string;
  auth: string;
  userId: string;
  profile_pic: string;
  updatedAt: Date;
}
interface Receiver {
  _id: string;
  name: string;
  auth: string;
  userId: string;
  profile_pic: string;
  updatedAt: Date;
}

interface LastMessage {
  _id: string;
  createdAt: string;
  updatedAt: string;
  text: string;
  msgByUserId: string;
  seen: boolean;
  imageUrl: string;
}

interface User {
  _id: string;
  sender: Sender;
  receiver: Receiver;
  unseenMsg: string;
  lastMsg: LastMessage;
}
interface UserListProps {
  users: User[];
  onlineUser: string[];
  userId: string | null;
  userForAdmin: User[];

  handleUserAccept: (id: string) => void;
}
const UserList: React.FC<UserListProps> = ({
  users,
  onlineUser,
  userId,
  userForAdmin,
  handleUserAccept,
}) => {
  const router = useRouter();

  const onClick = (id: string) => {
    const url = qs.stringifyUrl(
      {
        url: "/dashboard/support",
        query: { id },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };





  return (
    <List className=" cursor-pointer h-[670px] overflow-y-scroll  ">
      {users?.map((user) => (
        <ListItem
          key={user?._id}
          onClick={() => onClick(user?.sender?._id)}
          sx={{
            p: 2,
            backgroundColor: userId === user?.sender?._id ? "#fff" : "fff",
          }}
        >
          <Badge
            color={onlineUser.includes(user?.sender?._id) ? "success" : "default"}
            variant="dot"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            overlap="circular"
          >
            <Avatar alt={user?.sender?.name} src={user?.sender?.profile_pic} />
          </Badge>
          <ListItemText
            primary={user?.sender?.name}
            secondary={`${user?.lastMsg?.text?.slice(0, 10)}...`}
            sx={{ ml: 2 }}
          />
        </ListItem>
      ))}
      {userForAdmin?.map((user) => (
        <>
          <div className="flex items-center pr-2 ">

            <ListItem
              key={user?._id}
              sx={{
                p: 1,
                backgroundColor:
                  userId === user?.sender?._id ? "#e0e0e0" : "inherit",
              }}
            >
              <Badge
                color={
                  onlineUser.includes(user?.sender?._id) ? "success" : "default"
                }
                variant="dot"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                overlap="circular"
              >
                <Avatar
                  alt={user?.sender?.name}
                  src={user?.sender?.profile_pic}
                />
              </Badge>
              <ListItemText
                primary={user?.sender?.name}
                secondary={`${user?.lastMsg?.text?.slice(0, 10)}...`}
                sx={{ ml: 2 }}
              />
            </ListItem>

            <Button
              sx={{ width: '40px', fontSize: '11px', height: '30px' }}
              onClick={() => handleUserAccept(user?.sender?._id)}
            >
              Accept
            </Button>
          </div>
        </>
      ))}
    </List>
  );
};
export default UserList;
