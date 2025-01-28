import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavourites } from "../Utils/newsSlice";

const NewsCard = ({ news, handleNewsNavigation }) => {
  // Extract the date (without time) from pubDate
  const formattedDate = new Date(news.pubDate).toLocaleDateString();

  // Truncate title to 25 characters and append "..." if longer
  const truncatedTitle =
    news?.title?.length > 25 ? news.title.slice(0, 35) + "..." : news.title;

  return (
    <Box
      onClick={() => handleNewsNavigation(news.article_id)}
      sx={{
        display: "flex",
        gap: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        borderRadius: "12px",
      }}
    >
      {news.image_url ? (
        <img
          src={news.image_url}
          style={{
            width: "160px",
            minWidth: "160px",
            height: "125px",
            minHeight: "125px",
            borderRadius: "12px",
          }}
        />
      ) : (
        <Box
          sx={{
            backgroundColor: "#eeeeee",
            width: "268px",
            height: "125px",
            borderRadius: "12px",
          }}
        ></Box>
      )}

      <Box
        sx={{
          height: "125px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
          }}
        >
          {truncatedTitle}
        </Typography>

        {/* Publication Date and Source Name */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>{formattedDate}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;
