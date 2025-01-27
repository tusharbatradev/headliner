import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { Box, Skeleton, Typography } from "@mui/material";
import { NEWS_API } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  const handleNewsNavigation = (article_id) => {
    navigate(`mainnews/${article_id}`);
  };

  const getNews = async () => {
    const data = await fetch(NEWS_API);
    const json = await data.json();
    console.log(json);
    setNews(json.results);
  };

  useEffect(() => {
    getNews();
    console.log(news);
  }, []);

  if (news.length === 0) {
    return <Loading />;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 800,
        }}
      >
        Recommendation
      </Typography>
      {news.map((i) => (
        <NewsCard key={i.article_id} handleNewsNavigation={handleNewsNavigation} news={i} />
      ))}
    </Box>
  );
};

export default NewsList;
