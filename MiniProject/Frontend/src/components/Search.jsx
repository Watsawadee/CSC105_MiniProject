import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    setFilteredData(filterData(searchQuery, recipeData));
  }, [searchQuery, recipeData]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/recipes");
      setRecipeData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div style={{ padding: 3 }}>
        {filteredData.map((recipe) => (
          <div style={SearchBarStyle} key={recipe.id}>
            {recipe.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form>
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
    <TextField
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      placeholder="Search recipes"
      size="small"
    />
  </form>
);

const filterData = (query, recipeData) => {
  if (!query) {
    return recipeData;
  } else {
    return recipeData.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
  }
};

const SearchBarStyle = {
  fontFamily: "Quicksand",
  color: "#F8B195",
  fontSize: "100px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
