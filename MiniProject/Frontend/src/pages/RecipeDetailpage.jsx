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
import Rating from "@mui/material/Rating";

function RecipeDetailpage() {
    const [itemData, setItemData] = useState([]);
    const { recipeId } = useParams();
    const recipe_id = recipeId;

    useEffect(() => {
        axios
            .get(`http://localhost:8000/recipes/${recipe_id}`)
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
                                {itemData.length > 0 &&
                                    itemData.map((item) => (
                                        <ImageListItem key={item.id} sx={Image}>
                                            <img
                                                src={item.image_link}
                                                alt={item.recipe_name}
                                                style={{             
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    maxWidth: "600px",
                                                }}
                                            />
                                        </ImageListItem>
                                    ))}
                            </Carousel>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box sx={Detail}>
                            {itemData.map((item, index) => (
                                <Box key={index}>
                                    <Box>
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
                                            <Rating
                                                name="half-rating-read"
                                                defaultValue={item.rating}
                                                // precision={}
                                                readOnly
                                            />
                                            <Typography
                                                sx={{ marginRight: "20px" }}
                                            >
                                                ({item.likes})
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

                                    <Box sx={DetailRight}>
                                        <Typography sx={topic}>
                                            Directions
                                        </Typography>
                                        <Box sx={text}>
                                            {item.direction}
                                            {/* <ol>
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
                                            </ol> */}
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
                                                    {item.ingredient}
                                                    {/* <li>Garlic powder</li>
                                                    <li>Dried oregano</li>
                                                    <li>Dries basil</li>
                                                    <li>Salt</li>
                                                    <li>Extra virgin olive oil</li>
                                                    <li>Red wine vinegar</li> */}
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
                                                    {item.tool}
                                                    {/* <li>Measuring spoons</li>
                                                    <li>A Jar</li>
                                                    <li>Salad bowl</li>
                                                    <li>Salad tongs</li> */}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
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
    display: "flex",
    width: "100%",
    height: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    overFlow: "hidden",
    justifyContent: "center",
    alignItems: "center"
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
