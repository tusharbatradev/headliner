import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "./NewsCard";
import { useNavigate } from "react-router-dom";
import { removeFavourites } from "../Utils/newsSlice";

const FavNewsPage = () => {
  const favNews = useSelector((state) => state.news);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNewsNavigation = (article_id) => {
    navigate(`/browse/mainnews/${article_id}`);
  };

  return (
    <Stack spacing={2}>
      {favNews.length != 0 ? (
        <Typography sx={{ fontWeight: 600, fontSize: "20px", pt: "10px" }}>
          Your Favourite News
        </Typography>
      ) : (
        <Typography sx={{ fontWeight: 600, fontSize: "20px", pt: "10px" }}>
          Their is no Favourite News
        </Typography>
      )}

      {favNews.map((news) => (
        <NewsCard
          key={news[0].id}
          news={news[0]}
          handleNewsNavigation={handleNewsNavigation}
        />
      ))}
      {favNews.length != 0 && (
        <Button
          onClick={() => dispatch(removeFavourites())}
          sx={{ backgroundColor: "red", color: "white" }}
        >
          Delete All Favourite News
        </Button>
      )}
    </Stack>
  );
};

export default FavNewsPage;
