import React from "react";
import NavBar from "../components/NavBar";
import "../assets/user.png";
import { Box, Typography, Avatar, Divider } from "@mui/material";

function Accountpage() {
    return (
        <>
            <Box>
                <NavBar />
                <Avatar alt="user_photo" src="../src/assets/user.png" sx={Picture} />
                <Box sx={Top}>
                    <Typography sx={Header}>Hello, Mrs. Anna Marie</Typography>
                    <Box sx={Group_detail}>
                        <Box sx={Detail}>
                            <Typography sx={Count}>359</Typography>
                            <Typography sx={Count_Classifier}>Recipes</Typography>
                        </Box>

                        <Box sx={Detail}>
                            <Typography sx={Count}>12K</Typography>
                            <Typography sx={Count_Classifier}>Views</Typography>
                        </Box>

                        <Box sx={Detail}>
                            <Typography sx={Count}>18</Typography>
                            <Typography sx={Count_Classifier}>Favourite</Typography>
                        </Box>

                        {/* <Divider orientation="vertical" flexItem sx={{backgroundColor: "red"}}/> */}
                    </Box>
                </Box>

                {/* <Divider flexItem sx={{bgcolor: "red"}} /> */}
                
            </Box>
        </>
    );
}

export default Accountpage;

// Style
const Top = {
    float: "right",
    display: "flex",
    flexDirection: "column",
}

const Header = {
    color: "#333333",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "60px",
    opacity: "64%",
}

const Count = {
    color: "#F8B195",
    fontFamily: "Quicksand",
    fontSize: "100px",
    fontWeight: "bold"
}

const Count_Classifier = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontSize: "30px",
    fontWeight: "bold"
}

const Picture = {
    width: "fit-content",
    height: "fit-content",
    float: "left",
}

const Group_detail = {
    display: "flex",
    justifyContent: "center",
    alignsItem: "center",
    // backgroundColor: "red",
}

const Detail = {
    display: "flex",
    flexDirection:"column",
    margin: "auto"
    // backgroundColor: "aqua",
    // margin: "10px"
}