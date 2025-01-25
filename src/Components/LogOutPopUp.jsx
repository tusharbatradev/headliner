import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const LogOutPopUp = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure you want to log out?</DialogTitle>
      <DialogContent>
        {/* Additional content can be added here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          No
        </Button>
        <Button color="secondary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogOutPopUp;
