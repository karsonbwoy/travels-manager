import React from "react";
import { useUser } from "../UserContext";
import { Button } from "@mui/material";

const UserPanel = () => {
  const { user, logout } = useUser();
  return (
    <div>
      <h2>UserPanel</h2>
      <p>Hello! {user.userLogin}</p>
      <Button variant="contained" color="secondary" onClick={logout}>
        {" "}
        Logout
      </Button>
    </div>
  );
};

export default UserPanel;
