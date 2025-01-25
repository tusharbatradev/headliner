import React from "react";
import NewsCard from "./NewsCard";
import { Typography } from "@mui/material";

const NewsList = () => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 800,
        }}
      >
        Recommendation
      </Typography>
      <NewsCard />
    </div>
  );
};

export default NewsList;
