import React from "react";
import NavBar from "../components/NavBar";
import { Box, Typography, Divider } from "@mui/material";
import RecipeCard from "../components/RecipeCard/RecipeCard";

function Recipepage() {
    return (
        <div>
            <NavBar />
            <Box sx={BoxContent}>
                <Box sx={Content}>
                    <Box sx={Group_row}>
                        <Typography sx={Title}> All Recipe</Typography>
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

                    <Box sx={Group_row}>
                        <Typography sx={Title}> Dinner</Typography>
                        <RecipeCard />
                    </Box>
                    <Divider flexItem sx={DividerStyle} />

                    <Box sx={Group_row}>
                        <Typography sx={Title}> Gluten-Free</Typography>
                        <RecipeCard />
                    </Box>
                    <Divider flexItem sx={DividerStyle} />

                </Box>
            </Box>
        </div>
    );
}

export default Recipepage;
// Style
const BoxContent = {
    display: "flex",
    justifyContent: "center",
    // margin: "2px",
    // alignItems: "center",
    height: "calc(100vh - 75px)"
}
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
    marginTop: {xs: "20px", sm:"40px"},
};

const Group_row = {
    marginLeft: "5%",
    marginRight: "5%",
    // margin:"0 auto",
    marginBottom: "10px",    
    width: "80vw"
};

const DividerStyle = {
    backgroundColor: "#C06C84",
    margin: "10px",
    // marginTop: "10px"
};

const Title = {
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: {xs: "20px", md:"30px"},
    marginBottom: "10px",
};
