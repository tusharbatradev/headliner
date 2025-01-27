import { Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";

const AboutPage = () => {
  return (
    <Stack sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
      <img width={'300px'} src={Logo} alt="" />
      <Typography sx={{fontWeight : 550, fontSize : '18px'}}>
        <span style={{fontWeight : 700}}>Headliner</span> is a user-friendly news app that provides the latest articles
        across various categories like Technology, Sports, Business, and more.
        Built with Firebase for secure login and NEWSDATA.io API to fetch
        real-time news, the app offers a seamless and personalized experience.
        Designed using Material UI, it delivers a sleek and responsive interface
        for users to stay updated effortlessly. 
      </Typography>
      <Typography sx={{marginTop : '20px', fontWeight : 800}}>
        GitHub Link: <a href="https://github.com/tusharbatradev/textToImage">Click here</a></Typography>
    </Stack>
  );
};

export default AboutPage;
