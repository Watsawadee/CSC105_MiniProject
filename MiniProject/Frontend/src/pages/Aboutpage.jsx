import React from "react";
import NavBar from "../components/NavBar";
import { Box, Typography } from "@mui/material";

function Aboutpage() {
    return (
        <Box sx={{width: "100vw"}}>
            <NavBar />
            <Box sx={Content}>
                <Typography sx={Head}>
                    “Delicious recipes at your fingertips”
                </Typography>

                <Typography sx={Topic}>Who we are?</Typography>
                <Typography sx={Text}>
                    Welcome to Recipe, the ultimate platform for food lovers!
                    We're a community-driven website where home cooks and
                    professional chefs come together to share their favorite
                    recipes. Our platform is designed to make it easy for you to
                    search for the perfect recipe, save your favorite dishes,
                    and share them with others. With Recipe, you'll have access
                    to a wide variety of culinary creations from around the
                    world. Join our community today and start sharing your love
                    for food with others!
                </Typography>
                <Typography sx={Topic}>Our History</Typography>

                <Typography sx={Text}>
                    Recipe, a website dedicated to sharing and discovering
                    delicious recipes, has a rich history. It was founded with a
                    simple goal in mind - to create a platform where people can
                    easily find and share their favorite recipes with friends
                    and family. From its humble beginnings, Recipe has grown to
                    become a go-to destination for food lovers around the world.
                    Over the years, the website has evolved to incorporate
                    user-generated content, social networking features, and
                    advanced search functions, making it easier than ever to
                    find and share your favorite recipes. Whether you're a
                    seasoned chef or a novice cook, Recipe is the perfect place
                    to discover new and exciting recipes to try in your own
                    kitchen. With a vast collection of recipes at your
                    fingertips, there's no limit to the delicious dishes you can
                    create with Recipe.
                </Typography>
                <Typography sx={sec_text}>
                    Today, Recipe continues to be a thriving community of food
                    enthusiasts, all brought together by their love of cooking
                    and sharing great food. Our website is a place where people
                    can connect, share ideas, and discover new culinary
                    creations from around the world. We're proud to offer a
                    platform that's not only easy to use, but also fosters a
                    sense of community and collaboration. Whether you're looking
                    for a traditional family recipe, an exotic international
                    dish, or a trendy new food trend, Recipe has something for
                    everyone. Join our community today and discover the joy of
                    cooking and sharing delicious food with others!
                </Typography>
            </Box>
        </Box>
    );
}

export default Aboutpage;

// Style
const Content = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: {xs:"50px", md:"5vw"},
    marginRight:  {xs:"50px", md:"5vw"},
    marginTop: "5vw",
};

const Head = {
    color: "#F67280",
    fontWeight: "Bold",
    fontFamily: "Quicksand",
    fontSize: {xs: "33px", md:"60px"},
};

const Topic = {
    fontWeight: "Bold",
    fontFamily: "Quicksand",
    fontSize: {xs: "30px", md:"60px"},
    marginTop:  {xs:"10px", md:"1vw"},
};

const Text = {
    fontWeight: "Bold",
    fontFamily: "Quicksand",
    fontSize: {xs: "20px", md:"25px"},
    marginTop: "1vw",
    alignItems: "left",
    width:"100%"
};
const sec_text = {
    fontWeight: "Bold",
    fontFamily: "Quicksand",
    fontSize: {xs: "20px", md:"25px"},
    marginTop:  {xs:"40px", md:"4vw"},
    marginBottom: "15vw",
};
