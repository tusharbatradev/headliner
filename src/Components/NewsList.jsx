import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { Box, Skeleton, Typography } from "@mui/material";
import { NEWS_API } from "../Utils/constants";

const NewsList = () => {
  const [news, setNews] = useState([]);

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
      {news.length === 0 ? (
        <>
          <Skeleton sx={{ width: "366px", height: "157px" }} />
          <Skeleton sx={{ width: "366px", height: "157px" }} />
          <Skeleton sx={{ width: "366px", height: "157px" }} />
          <Skeleton sx={{ width: "366px", height: "157px" }} />
          <Skeleton sx={{ width: "366px", height: "157px" }} />
        </>
      ) : (
        news.map((i) => <NewsCard news={i} />)
      )}
    </Box>
  );
};

export default NewsList;
