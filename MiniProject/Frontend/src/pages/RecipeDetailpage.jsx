// ค้างหน้านี้
// ตรง title not display
// 


import React from "react";
import NavBar from "../components/NavBar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Button, Typography, Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function RecipeDetailpage() {
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/recipe/:userId")
            .then((response) => {
                setItemData(response.data.data);
                // console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Grid item xs={12}>
                <NavBar />
            </Grid>

            <Grid>
                <Box sx={DetailPage}>
                    <Grid item xs={6}>
                        {/* <h1>Recipe Detail page</h1> */}
                        <Box sx={ImageBox}>
                            <Carousel autoPlay interval={3000} infiniteLoop>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.id} sx={Image}>
                                        <img
                                            src={item.image_link}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </ImageListItem>
                                ))}
                            </Carousel>

                            {/* <IconButton>
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
                                ></FormControlLabel>
                            </IconButton> */}
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box sx={Detail}>
                            {itemData.map((item) => (
                                <Box key={item.id}>
                                    <Typography sx={Title}>
                                        {/* Italian Salad */}
                                        {item.recipe_name}
                                    </Typography>
                                    <Box
                                        sx={{
                                            marginBottom: "15px",
                                            display: "flex",
                                        }}
                                    >
                                        <StarIcon /> <StarIcon /> <StarIcon />
                                        <StarHalfIcon /> <StarBorderIcon />
                                        <Typography
                                            sx={{ marginRight: "20px" }}
                                        >
                                            {" "}
                                            (18){" "}
                                        </Typography>
                                    </Box>
                                    <Typography sx={Description}>
                                      {item.description}
                                        {/* This simple Italian salad is the only
                                        side salad recipe you need. It fits
                                        perfectly with any pasta dish and finds
                                        good company alongside a whole roasted
                                        chicken or delicate fish dinner. */}
                                    </Typography>
                                </Box>
                            ))}

                            <Box sx={DetailRight}>
                                <Typography sx={topic}>Directions</Typography>
                                <Box sx={text}>
                                    <ol>
                                        <li>
                                            Grab a jar. Add the dressing
                                            ingredients, secure the lid, and
                                            shake away!
                                        </li>
                                        <li>
                                            Roughly chop the romaine lettuce and
                                            throw it in a nice big bowl.
                                        </li>
                                        <li>
                                            Add the olives, pepperoncinis,
                                            onions, and tomatoes.
                                        </li>
                                        <li>
                                            Toss the salad with the dressing!
                                        </li>
                                        <li>
                                            Put as much parmesan cheese and as
                                            many croutons as you'd like on your
                                            perfect Italian side salad!
                                        </li>
                                    </ol>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            sm: "row",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            marginRight: "80px",
                                        }}
                                    >
                                        <Typography sx={topic}>
                                            Ingredients
                                        </Typography>
                                        <Typography sx={text}>
                                            <li>Garlic powder</li>
                                            <li>Dried oregano</li>
                                            <li>Dries basil</li>
                                            <li>Salt</li>
                                            <li>Extra virgin olive oil</li>
                                            <li>Red wine vinegar</li>
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "Flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <Typography sx={topic}>
                                            Tools
                                        </Typography>
                                        <Typography sx={text}>
                                            <li>Measuring spoons</li>
                                            <li>A Jar</li>
                                            <li>Salad bowl</li>
                                            <li>Salad tongs</li>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </>
    );
}

export default RecipeDetailpage;

// Style
const DetailPage = {
    margin: "80px",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "aqua",
};

const DetailRight = {
    // float: "right"
};

const ImageBox = {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
};

const Image = {
    width: "100%",
    height: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    overFlow: "hidden",
};

const Detail = {
    display: "flex",
    flexDirection: "column",
    // float: "right"
};

const Title = {
    display: "flex",
    flexDirection: "column",
    color: "#C06C84",
    fontSize: "50px",
    fontWeight: "Bold",
    fontFamily: "Quicksand",
};

const Description = {
    display: "flex",
    flexDirection: "column",
    color: "#333333",
    fontSize: "25px",
    fontWeight: "Bold",
    fontFamily: "Quicksand",
    marginTop: "30px",
    justifyContent: "center",
    alignItems: "center",
};

const topic = {
    display: "flex",
    flexDirection: "column",
    color: "#333333",
    fontSize: "30px",
    fontWeight: "Bold",
    fontFamily: "Quicksand",
    margin: "20px",
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "aqua",
};

const text = {
    display: "flex",
    flexDirection: "column",
    color: "#333333",
    fontSize: "30px",
    fontWeight: "Regular",
    fontFamily: "Quicksand",
    // justifyContent: "center",
    // alignItems: "center",
};