import React, { useEffect, useState } from "react";
import { Dialog, DialogActions, DialogTitle, Button, Box } from "@mui/material";
import { getAuth } from "firebase/auth";

const LogOutPopUp = ({ open, onClose, handleSignOut }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const auth = getAuth(); // Initialize Firebase Auth
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUsername(currentUser.displayName || "User"); // Fallback to 'User' if displayName isn't available
    }
  }, []);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: 600, fontSize: "22px" }}>
        Hey, {username}! <br />
        Do you want to Log Out?
      </DialogTitle>
      {/* Logout Confirmation */}
      <DialogActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          sx={{
            backgroundColor: "black",
            width: "100px",
            color: "white",
            fontWeight: 600,
            fontSize: "18px",
          }}
          onClick={onClose}
        >
          No
        </Button>
        <Button
          sx={{
            backgroundColor: "black",
            width: "100px",
            color: "white",
            fontWeight: 600,
            fontSize: "18px",
          }}
          onClick={handleSignOut}
          color="secondary"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogOutPopUp;
