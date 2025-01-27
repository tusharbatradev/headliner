import React, { useState } from "react";
import { Box, TextField, Typography, Autocomplete } from "@mui/material";
import NewsCard from "./NewsCard";
import { SEARCH_NEWS_BY_CATEGORY } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const categories = [
  "Technology",
  "Health",
  "Science",
  "Business",
  "Sports",
  "Entertainment",
  "Politics",
];

const SearchPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCategoryValid, setIsCategoryValid] = useState(true);
  const [searchedNews, setSearchedNews] = useState([]);
  const navigate = useNavigate();

  const handleCategoryChange = async (event, value) => {
    setSelectedCategory(value);

    // Check if the selected category exists in the list
    const isValidCategory = categories.includes(value);
    setIsCategoryValid(isValidCategory);

    if (isValidCategory) {
      const url = `${SEARCH_NEWS_BY_CATEGORY}${value}&country=au,jp,in&language=fr,en`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        setSearchedNews(json.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        margin: "auto",
      }}
    >
      <Autocomplete
        freeSolo
        options={categories}
        onChange={handleCategoryChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="News Category"
            variant="outlined"
            error={!isCategoryValid}
          />
        )}
      />
      {!selectedCategory ? (
        <Typography>Select A Category</Typography>
      ) : (
        <Typography>{selectedCategory} News:-</Typography>
      )}
      {searchedNews.length === 0 && selectedCategory ? (
        <Loading />
      ) : (
        searchedNews.map((i) => <NewsCard key={i.article_id} news={i} />)
      )}
    </Box>
  );
};

export default SearchPage;
