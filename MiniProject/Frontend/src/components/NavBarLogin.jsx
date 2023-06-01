import React, { useState } from "react";
import "../styles/NavBar.css";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavBar() {
    let navigate = useNavigate();
    const handleClick = (destination) => {
        navigate(destination);
    };

    return (
        <Box sx={{ width: { xs: "100vw" } }}>

            <AppBar
                position="static"
                sx={{ backgroundColor: "#F67280", width: "100vw" }}
            >
                <Toolbar sx={{ margin: "0", padding: "0px" }}>
                    <Box onClick={() => handleClick("/")} sx={{ flexGrow: 1 }}>
                        <Typography sx={Logo}>Recipe</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;

// Style
const Logo = {
    fontWeight: "bold",
    fontSize: { xs: "30px", sm: "40px", md: "50px" },
    flexGrow: 1,
    fontFamily: "Gluten",
    color: "#F8F8F8",
    justifyContent: "flex-start",
    marginLeft: "20px",
    width: "fit-content",
    // backgroundColor: "purple",
};