import { Stack, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { auth } from "../Utils/firebaseConfig";
import Logo from "../assets/Logo.png";
import LogOutPopUp from "./LogOutPopUp";
import { signOut } from "firebase/auth";

const Header = () => {
  const [openPopUp, setOpenPopUp] = useState(false);

  const handleLogOut = () => {
    // Trigger the pop-up to appear
    setOpenPopUp(true);
  };

  const handleClosePopUp = () => {
    // Close the pop-up
    setOpenPopUp(false);
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "2px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f2f2f2",
          padding: "8px",
          borderRadius: "12px",
        }}
      >
        {/* SideBar Menu Icon */}
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      <Typography sx={{
        fontWeight : 800,
        fontSize : '18px'
      }}>
        HEADLINER
        </Typography>
      <Box
        onClick={handleLogOut}
        sx={{
          backgroundColor: "#f2f2f2",
          padding: "10px",
          borderRadius: "12px",
        }}
      >
        <svg
          width="26px"
          height="26px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
            fill="#000000"
          />
          <path
            d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
            fill="#000000"
          />
        </svg>
      </Box>

      {/* Pass confirmLogOut to LogOutPopUp */}
      <LogOutPopUp
        open={openPopUp}
        onClose={handleClosePopUp}
      />
    </Stack>
  );
};

export default Header;
