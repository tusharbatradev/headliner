import { Box, Button } from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../Utils/sideBarSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{width : '250px', backgroundColor : 'black'}}>
      <img width={'50px'} src={Logo} />
      <Button onClick={()=> dispatch(closeSideBar())} sx={{backgroundColor : 'white', color : 'black'}}>
        Close SideBar
      </Button>
    </Box>
  );
};

export default SideBar;
