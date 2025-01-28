import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SINGLE_NEWS_API } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFavourites } from "../Utils/newsSlice";

const MainNews = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favNews = useSelector((state) => state.news);
  console.log(params);

  const fetchNews = async () => {
    try {
      const response = await fetch(SINGLE_NEWS_API + params.id);
      const json = await response.json();
      setData(json);
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

  const handleSaveNews = () => {
    dispatch(addFavourites(data.results));
    console.log("Saved News:", favNews);
  };

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
      <Button
        sx={{
          position: "absolute",
          top: "220px",
          right: "25px",
          zIndex: 10,
          backgroundColor: "#e3e3e3",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          minWidth: "0",
          padding: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleSaveNews}
      >
        <svg
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>

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
