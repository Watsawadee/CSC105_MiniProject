import React, { Component } from "react";
import NavBar from "../NavBar";
import {
    Box,
    Typography,
    Grid,
    Card,
    ListItem,
    Button,
    Divider,
    Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
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
import AddIcon from '@mui/icons-material/Add';

function CreateCard() {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/create");
    };



    return (
        <Box>
            <ImageList gap={12} rowHeight={200}>
                <Stack>
                    <ImageListItem
                        sx={Recipe_content}
                        onClick={() => handleClick()}
                    >
                        {/* <img
                            src="../src/assets/view all.jpg"
                            sx={img}
                        /> */}
                        <AddIcon fontSize="large"/>

                    </ImageListItem>
                </Stack>
            </ImageList>
        </Box>
    );
}

export default CreateCard;

// const RecipeCardroot = {
//     width: "80vw",
//     overflowX: "auto",
// };

// const Group_Recipe = {
//     gap: "16px",
// };

// const Recipe_detail = {
//     transition: "250ms all",
//     // background: "rgba(0, 0, 0, 0.5)",
//     background:
//         "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(129,129,129,0.2455357142857143) 100%)",
//     height: "fit-content",
//     fontWeight: "bold",
//     fontSize: "20px",
//     fontFamily: "Quicksand",
// };

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
};

// const img = {
//     width: "100%",
//     height: "100%",
//     // maxHeight: "120px",
//     objectFit: "cover",
//     // position: "relative",
// };

// const FavIcon = {
//     color: "#F8F8F8",
//     // backgroundColor: "aqua"
// };

// const FavIconPink = {
//     color: "#F67280",
// };
