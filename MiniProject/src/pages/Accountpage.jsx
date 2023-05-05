import React from "react";
import NavBar from "../components/NavBar";
import "../assets/user.png";
import { Box, Typography } from "@mui/material";

function Accountpage() {
    return (
        <>
            <Box>
                <NavBar />
                <Typography sx={Header}>Hello, Mrs. Anna Marie</Typography>
            </Box>
        </>
    );
}

export default Accountpage;

const Header = {
    color: "#333333",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "60px",
    opacity: "64%",
}