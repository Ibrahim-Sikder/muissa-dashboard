import React from "react";
import { List, ListItem, ListItemText, Avatar, Badge } from "@mui/material";
interface User {
  id: number;
  name: string;
  avatar: string;
  status: "online" | "offline";
}
interface UserListProps {
  users: User[];
  selectedUser: User | null;
  onSelectUser: (user: User) => void;
}
const UserList: React.FC<UserListProps> = ({
  users,
  selectedUser,
  onSelectUser,
}) => {
  return (
    <List>
      {users.map((user) => (
        <ListItem
          key={user.id}
          button
          onClick={() => onSelectUser(user)}
          sx={{
            p: 2,
            backgroundColor:
              selectedUser?.id === user.id ? "#e0e0e0" : "inherit",
          }}
        >
          <Badge
            color={user.status === "online" ? "success" : "default"}
            variant="dot"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            overlap="circular"
          >
            <Avatar alt={user.name} src={user.avatar} />
          </Badge>
          <ListItemText primary={user.name} sx={{ ml: 2 }} />
        </ListItem>
      ))}
    </List>
  );
};
export default UserList;
