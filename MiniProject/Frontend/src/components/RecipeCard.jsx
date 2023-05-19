import React, { Component } from "react";
import NavBar from "../components/NavBar";
import {
    Box,
    Typography,
    Grid,
    Card,
    ListItem,
    Button,
    Divider,
    Stack
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

function RecipeCard() {
    return (
        <Box sx={RecipeCardroot}>
            <ImageList gap={12} row={5}>
                <Stack sx={Group_Recipe} direction = "row" >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={Recipe_content}>
                        <img
                            src={item.img}
                            // srcSet={item.img}
                            alt={item.title}
                            sx={img}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
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
                                                    />
                                                }
                                                checkedIcon={
                                                    <FavoriteIcon
                                                        fontSize="large"
                                                        sx={FavIconPink}
                                                    />
                                                }
                                            />
                                        }
                                    >
                                        {/* {item.favourite == true ? (
                            <FavoriteBorderIcon
                                fontSize="large"
                                sx={{
                                    color: "#F8F8F8",
                                }}
                            />
                        ) : (
                            <FavoriteIcon
                                fontSize="large"
                                sx={{
                                    color: "#F67280",
                                }}
                            />
                        )} */}
                                    </FormControlLabel>
                                </IconButton>
                            }
                        >
                            {/* <FormControlLabel
                control={
                    <Checkbox
                        icon={<FavoriteBorderIcon fontSize="large"
                                        sx={{ color: "#F8F8F8" }} />}
                        checkedIcon={<FavoriteIcon fontSize="large"
                        sx={{ color: "#F67280" }}/>}
                    />
                }
            /> */}
                        </ImageListItemBar>
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
    background: "",
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
    boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
    overflow: "hidden",
    borderRadius: "8px",
    position: "relative",
    textAlign: "center",
    width: { xs:"200px" ,sm:"250px"},
    height: "1000px",
    // boxShadow: 2,
};

const img = {
    width: 1,
    height: 1,
    maxHeight: "120px",
    objectFit: "cover",
    position: "relative",
};

const FavIcon = {
    color: "#F8F8F8",
    // backgroundColor: "aqua"
};

const FavIconPink = {
    color: "#F67280",
};

// Data
const itemData = [
    {
        img: "src/assets/Salad.jpg",
        title: "Salad",
        author: "@bkristastucchio",
        favourite: true,
    },

    {
        img: "src/assets/Pizza.png",
        title: "Pizza",
        author: "@rollelflex_graphy726",
        favourite: false,
    },
    {
        img: "src/assets/Hamburger.jpg",
        title: "Hamburger",
        author: "@helloimnik",
        favourite: true,
    },
    {
        img: "src/assets/Pancake.jpg",
        title: "Pancake",
        author: "@nolanissac",
        favourite: false,
    },
    {
        img: "src/assets/Spaghetti.jpg",
        title: "Spaghetti",
        author: "@helloimnik",
        favourite: true,
    },

    {
        img: "src/assets/user.png",
        title: "user",
        author: "@helloimnik",
        favourite: true,
    },

    // {
    //     img: "src/assets/Spaghetti.jpg",
    //     title: "Spaghettiiiiii",
    //     author: "@helloimnik",
    //     favourite: true,
    // },

    // {
    //     img: "src/assets/Spaghetti.jpg",
    //     title: "Spaghettiiiiii",
    //     author: "@helloimnik",
    //     favourite: true,
    // },

    // {
    //     img: "src/assets/Spaghetti.jpg",
    //     title: "Spaghettiiiiii",
    //     author: "@helloimnik",
    //     favourite: true,
    // },
];