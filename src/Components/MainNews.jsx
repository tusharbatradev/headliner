import { Box, IconButton, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SINGLE_NEWS_API } from "../Utils/constants";

const MainNews = () => {
  const [data, setData] = useState(null); // Initialize as null
  const params = useParams();
  const navigate = useNavigate();

  const fetchNews = async () => {
    try {
      const response = await fetch(SINGLE_NEWS_API + params.id);
      const json = await response.json();
      setData(json); // Set the entire response
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Conditional rendering to handle loading and errors
  if (!data || !data.results || !data.results[0]) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  const news = data.results[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
        }}
      >
        {/* Back Icon */}
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 10,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(8px)",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M5 12L11 6M5 12L11 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>

        {/* News Image */}
        {news.image_url ? (
          <img
            src={news.image_url}
            alt="News"
            style={{
              width: "100%",
              borderRadius: "16px",
              height: "100%",
            }}
          />
        ) : (
          <Box
            sx={{
              backgroundColor: "black",
              width: "100%",
              height: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: 600, color: "white" }}>
              No Image for this news
            </Typography>
          </Box>
        )}
      </Box>
      {/* Stack for the News Channel Details */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <img
          width={"50px"}
          style={{ borderRadius: "16px" }}
          src={news.source_icon}
          alt="Source Icon"
        />
        {/* Source Name and Publish Date */}
        <Box>
          <Typography sx={{ fontWeight: 600 }}>{news.source_name}</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
            {news.pubDate}
          </Typography>
        </Box>
      </Stack>

      {/* Main Description of News */}
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "20px",
        }}
      >
        {news.description}
      </Typography>
    </Box>
  );
};

export default MainNews;
