import React from "react";
import NavBar from "../components/NavBar";
import "../assets/user.png";
import { Box, Typography, Avatar, Divider, Button } from "@mui/material";
import RecipeCard from "../components/RecipeCard";

function Accountpage() {
    return (
        <>
            <Box>
                <NavBar />
                <Box sx={Account}>
                    <Avatar
                        alt="user_photo"
                        src="../src/assets/user.png"
                        sx={Picture}
                    />
                    <Box sx={Top}>
                        <Typography sx={Header}>
                            Hello, Mrs. Anna Marie
                        </Typography>
                        <Box sx={Group_detail}>
                            <Box sx={Detail}>
                                <Typography sx={Count}>359</Typography>
                                <Typography sx={Count_Classifier}>
                                    Recipes
                                </Typography>
                            </Box>
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={VerticalLine}
                            />

                            <Box sx={Detail}>
                                <Typography sx={Count}>12K</Typography>
                                <Typography sx={Count_Classifier}>
                                    Views
                                </Typography>
                            </Box>

                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={VerticalLine}
                            />

                            <Box sx={Detail}>
                                <Typography sx={Count}>18</Typography>
                                <Typography sx={Count_Classifier}>
                                    Favourite
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={Group_Recipe}>
                    {/* INSERT THE RECIPEEEEEEEE HEREEEEE */}
                    <Divider flexItem sx={BigBreakLine} />
                    <Box sx={Group_row}>
                        <Typography sx={Title}> Recommends</Typography>
                        <RecipeCard />
                    </Box>

                    <Divider flexItem sx={Line} />
                    <Box sx={Group_row}>
                        <Typography sx={Title}>
                            Your Favourite Recipe
                        </Typography>
                        <RecipeCard />

                    </Box>
                    <Divider flexItem sx={BigBreakLine} />
                </Box>
                <Button sx={Logout} href="/">
                    Log out
                </Button>
            </Box>
        </>
    );
}

export default Accountpage;

// Style
const Account = {
    // margin : "150px",
    display: "flex",
    justifyContent: "center",
    flexFlow : "wrap row"
};
const Top = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    // backgroundColor : "aqua",
    margin: {xs:"20px", sm:"80px"},
};

const Header = {
    color: "#333333",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: {xs:"30px", sm:"60px"},
    opacity: "64%",
    // backgroundColor : "red",
};

const Count = {
    color: "#F8B195",
    fontFamily: "Quicksand",
    fontSize: {xs:"50px", sm:"100px"},
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignsItem: "center",
};

const Count_Classifier = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontSize: {xs:"20px", sm:"30px"},
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignsItem: "center",
};

const Picture = {
    width: {xs:"150px", sm:"300px", md:"400px"},
    height: {xs:"150px", sm:"300px", md:"400px"},
    margin: {xs:"30px", sm:"50px", md:"100px"},
    // float: "left",
    display: "flex",
    // marginLeft: "500px",
    borderRadius: "50%"
};

const Group_detail = {
    display: "flex",
    alignsItem: "center",
    justifyContent: "center",
    // backgroundColor : "blue",
};

const Detail = {
    display: "flex",
    flexDirection: "column",
    margin: "50px",
    width: {xs:"50px", sm:"150px"},

    // backgroundColor : "aqua",
};

const VerticalLine = {
    backgroundColor: "#C06C84",
    height: "full",
    width: "0.1px",
};

const Line = {
    backgroundColor: "#C06C84",
    height: "0.1px",
    width: "full",
};

const BigBreakLine = {
    backgroundColor: "#000000",
    width: "full",
    height: "0.2px",
};

const Group_Recipe = {
    marginLeft: "50px",
    marginRight: "50px",
    // backgroundColor : "Green"
};

const Title = {
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: {xs: "20px", md:"30px"},
    marginTop: "20px",
};

const Group_row = {
    marginLeft: "5%",
    marginRight: "5%",
    // margin:"0 auto",
    marginBottom: "10px",
    width: "80vw",
};


const Logout = {
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "Quicksand",
    color: "#6C5B7B",
    border: "2px solid #6C5B7B",
    borderRadius: "40px",
    padding: "10px",
    paddingLeft: "40px",
    paddingRight: "40px",
    marginTop: "30px",
    marginRight: "50px",
    float: "right",
    "&:hover": {
        backgroundColor: "#6C5B7B",
        color: "#F8F8F8",
    },
}