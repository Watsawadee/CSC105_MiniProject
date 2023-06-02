import React from "react";
import {
    Box,
    Stack,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard() {
    let navigate = useNavigate();
    const [recipeData, setRecipeData] = useState([]);
    const [Fav, setFav] = useState(false);

    
      useEffect(() => {
        fetchRecipes();
      }, []);
    
      const fetchRecipes = () => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("userId");
        console.log(user_id);
        axios
          .get(`http://localhost:8000/recipes/Fav/${user_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setRecipeData(response.data.data);
            // console.log(response.data.data);
          })
          .catch((error) => {
            console.error("Error fetching recipe data:", error);
          });
      };
    return (
        <Box sx={RecipeCardroot}>
            <ImageList gap={12} rowHeight={200}>
                <Stack sx={Group_Recipe} direction="row">
                    {recipeData.map((item) => (
                        <ImageListItem
                            key={item.image_link}
                            sx={Recipe_content}
                            onClick={() => navigate(`/detail/${item.id}`)}
                            data-recipe-id={item.recipe_id}
                        >
                            <img
                                src={item.image_link}
                                alt={item.recipe_name}
                                sx={img}
                            />
                           
                            <ImageListItemBar
                                title={item.recipe_name}
                                subtitle={item.name}
                                sx={Recipe_detail}
                                actionIcon={
                                    <IconButton>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    icon={
                                                        <FavoriteBorderIcon
                                                            fontSize="large"
                                                            sx={FavIcon}
                                                            onClick={() => {
                                                                setFav(
                                                                    !Fav
                                                                );
                                                                console.log(
                                                                    Fav
                                                                );
                                                            }}
                                                        />
                                                    }
                                                    checkedIcon={
                                                        <FavoriteIcon
                                                            fontSize="large"
                                                            sx={FavIconPink}
                                                            onClick={() => {
                                                                setFav(
                                                                    !Fav
                                                                );
                                                                console.log(
                                                                    Fav
                                                                );
                                                            }}
                                                        />
                                                    }
                                                />
                                            }
                                        />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </Stack>
            </ImageList>
        </Box>
    );
}

export default RecipeCard;

const RecipeCardroot = {
    width: "80vw",
    overflowX: "auto",
};

const MoreIconStyle = {
    position: "absolute",
    top: "0px",
    right: "0px",
    color: "#F8F8F8",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    fontSize: "40px",
};

const StyleMenuBar = {};

const MenuText = {
    fontWeight: "medium",
    fontSize: "20px",
    fontFamily: "Quicksand",
    marginLeft: "5px",
};

const MenuBar = {
    zIndex: "tooltip",
};

const MenuIconStyle = {};

const Group_Recipe = {
    // display: "flex",
    // justifyContent: "flex-start",
    // flexDirection: "row",
    // overflowX: "auto",

    // whiteSpace: "nowrap",
    // flexWrap: 'nowrap',

    // gridTemplateColumns: "repeat(200px, 1fr)",
    // gridGap: "calc((100vw - 60px)/100)",

    // display: "grid",
    // gridAutoFlow: "column",
    // overflowX: "auto",
    // webkitOverflowScrolling: "touch",
    gap: "16px",
    // gridAutoColumns: "200",
    // minHeight: "1vh",

    // gridAutoColumns: "minmax(0px, 1fr)",
    // gridGap: "10px",
    // padding: "0 20px",
    // // gridTemplateColumns: "repeat(auto-fill, minmax(15em, 1fr))",
    // // gridAutoColumns: "minmax(15em, 1fr)",

    // alignItems: "center",
    // backgroundColor: "aqua",
};

const Recipe_detail = {
    transition: "250ms all",
    // background: "rgba(0, 0, 0, 0.5)",
    background:
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(129,129,129,0.2455357142857143) 100%)",
    height: "fit-content",
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "Quicksand",
};

const Recipe_content = {
    whiteSpace: "nowrap",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
    overflow: "hidden",
    borderRadius: "8px",
    position: "relative",
    textAlign: "center",
    width: { xs: "200px", sm: "250px" },
    height: "1000px",
    zIndex: "modal",
    // boxShadow: 2,
};

const img = {
    width: "100%",
    height: "100%",
    // maxHeight: "120px",
    objectFit: "cover",
    // position: "relative",
};

const FavIcon = {
    color: "#F8F8F8",
    // backgroundColor: "aqua"
};

const FavIconPink = {
    color: "#F67280",
};
