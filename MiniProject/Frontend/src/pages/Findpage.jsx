import React from "react";
import NavBar from "../components/NavBar";
import {
    Box,
    Typography,
    Grid,
    Card,
    ListItem,
    Button,
    Divider,
} from "@mui/material";
import Search from "../components/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import RecipeCard from "../components/RecipeCard";


function Findpage() {

    return (
        <Box sx={FindPage}>
            <NavBar />
            <Typography sx={Head}> Find a Recipe </Typography>
            {/* <Search /> */}
            <Box sx={Content}>
                <Box sx={Group_row}>
                    <Typography sx={Title}> Recommended</Typography>
                    <RecipeCard />
                </Box>

                <Divider flexItem sx={DividerStyle} />

                <Box sx={Group_row}>
                    <Typography sx={Title}> Breakfast</Typography>
                    <RecipeCard />
                </Box>
                <Divider flexItem sx={DividerStyle} />

                <Box sx={Group_row}>
                    <Typography sx={Title}> Lunch</Typography>
                    <RecipeCard />
                </Box>
                <Divider flexItem sx={DividerStyle} />
            </Box>
        </Box>
    );
}

export default Findpage;

// Style
const Head = {
    fontFamily: "Quicksand",
    color: "#F8B195",
    fontSize: { xs: "12vw", md: "100px" },
    fontWeight: "Bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: { xs: "40px", sm: "100px" },
    marginBottom: { xs: "10px", sm: "25px" },
};

const Content = {
    backgroundColor: "rgb(248, 177, 149, 0.24)",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    width: "90%",
    height: "fit-content",
    paddingTop: "25px",
    paddingBottom: "25px",
    marginBottom: "50px",
    marginTop: { xs: "20px", sm: "40px" },
};

const Title = {
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: { xs: "20px", md: "30px" },
    marginBottom: "10px",
};

const Group_row = {
    marginLeft: "5%",
    marginRight: "5%",
    // margin:"0 auto",
    marginBottom: "10px",
    width: "80vw",
};

const DividerStyle = {
    backgroundColor: "#C06C84",
    margin: "10px",
    // marginTop: "10px"
};

const FindPage = {
    // width: "100vw",
    // padding: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

//Handle ...
const handleClick = () => {
    onClick = () => {
        alert("clicked");
    };
};
