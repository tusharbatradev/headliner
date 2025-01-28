import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NewsCard from "./NewsCard";
import { useNavigate } from "react-router-dom";

const FavNewsPage = () => {
  const favNews = useSelector((state) => state.news);
  const navigate = useNavigate();

  const handleNewsNavigation = (article_id) => {
    navigate(`/browse/mainnews/${article_id}`);
  };

  return (
    <Stack spacing={2}>
      <Typography sx={{ fontWeight: 600, fontSize: "20px", pt: "10px" }}>
        Your Favourite News
      </Typography>
      {favNews.map((news) => (
        <NewsCard
          key={news[0].id}
          news={news[0]}
          handleNewsNavigation={handleNewsNavigation}
        />
      ))}
    </Stack>
  );
};

export default FavNewsPage;
