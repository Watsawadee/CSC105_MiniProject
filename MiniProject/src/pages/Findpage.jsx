import React from "react";
import NavBar from "../components/NavBar";
import { Box, Typography, Grid, Card, ListItem, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

function Findpage() {
    return (
        <Box sx={{ width: "100vw", padding: "0" }}>
            <NavBar />
            <Typography sx={Head}> Find a Recipe </Typography>

            <Box sx={Content}>
                <Typography sx={Title}> Recommends</Typography>
                {/* <CardMedia
                    component="img"
                    sx={{ width: "8", height: "250px" }}
                    image="https://img.taste.com.au/WU4WfY8W/taste/2022/11/best-ever-italian-salad-recipe-1-183293-1.jpg"
                    alt="Italian Salad"
                /> */}

                <ImageList sx={Group_Recipe}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                            />
                            <ImageListItemBar
                                actionIcon={
                                    <IconButton
                                        sx={FavouriteIcon}
                                        size="large"
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <FavoriteBorderIcon />
                                        {/* <FavoriteIcon /> */}
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                {/* <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                    }}
                >
                    <a href="#" sx={{}}>
                        <Box sx={Recipe}>
                            <Box sx={Recipe_content}>
                            <Box sx={img}>
                                <img
                                    src="https://img.taste.com.au/WU4WfY8W/taste/2022/11/best-ever-italian-salad-recipe-1-183293-1.jpg"
                                    alt="Italian Salad"
                                ></img>
                                <i class="heart bi bi-suit-heart-fill"></i>
                            </Box>
                            <FavoriteIcon />
                            </Box>
                        </Box>
                        <Typography sx={Recipe_name}>Italian Salad</Typography>
                    </a>
                    <img
                        src="https://img.taste.com.au/WU4WfY8W/taste/2022/11/best-ever-italian-salad-recipe-1-183293-1.jpg"
                        alt="Italian Salad"
                        sx={{width: "120px", height: "120px"}}
                    ></img>
                </Box> */}

                {/* <CardContent>
                        <Typography>
                            Lizard
                        </Typography>
                    </CardContent> */}
            </Box>
        </Box>
    );
}

export default Findpage;

const Head = {
    fontFamily: "Quicksand",
    color: "#F8B195",
    fontSize: "100px",
    fontWeight: "Bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    marginBottom: "50px",
};

const Content = {
    backgroundColor: "rgb(248, 177, 149, 0.24)",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "1200px",
    height: "500px",
    margin: "auto",
};

const Title = {
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "30px",
};

const Group_Recipe = {
    // width: 500,
    // height: 450,
    display: "flex",
    flexDirection: "row",
};

const Recipe = {
    // width: "10px",
    // height: "10px",
    textAlign: "center",
    display: "block",
    textDecoration: "none",
    transition: "250ms all",
    marginRight: "10px",
    minWidth: "200px",
};

const Recipe_content = {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "180px",
    marginBottom: "10px",
    boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
    overflow: "hidden",
    borderRadius: "8px",
    position: "relative",
    textAlign: "center",
};

const img = {
    // width: "100%",
    // height: "200px",
    // maxHeight: "120px",
    // objectFit: "cover",

    width: "100%",
    height: "100%",
    position: "relative",
    objectFit: "cover",
    display: "block",
};

const Recipe_name = {};

const FavouriteIcon = {
    color: "#F8F8F8",
    // color: "#F67280",
};

const itemData = [
    {
        img: "https://img.taste.com.au/WU4WfY8W/taste/2022/11/best-ever-italian-salad-recipe-1-183293-1.jpg",
        title: "Breakfast",
        author: "@bkristastucchio",
        rows: 2,
        cols: 2,
        featured: true,
    },

    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
        author: "@rollelflex_graphy726",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
        author: "@helloimnik",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        author: "@nolanissac",
        cols: 2,
    },
];
