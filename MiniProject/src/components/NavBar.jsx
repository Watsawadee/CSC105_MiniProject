import React from "react";
import "../styles/NavBar.css";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
}  from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function NavBar() {
    let navigate = useNavigate();
    const handleClick = (destination) => {
        navigate(destination);
    };
    return (
        <>
            <Box>
                <AppBar
                    position="static"
                    sx={{ backgroundColor: "#F67280", width: "100vw" }}
                >
                    <Toolbar sx={{ margin: "0", padding: "0px" }}>
                        <Box onClick={() => handleClick("/")} sx={Logo}>
                            <Typography sx={Logo}>Recipe</Typography>
                        </Box>
                        <IconButton
                            sx={{
                                color: "white",
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <MenuIcon sx={{ fontSize: "40px" }} />
                        </IconButton>
                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "block",
                                    fontFamily: "Anton",
                                },
                            }}
                        >
                            <Button
                                onClick={() => handleClick("/")}
                                color="inherit"
                                sx={{
                                    fontFamily: "Anton",
                                    fontSize: "25px",
                                    marginRight: "25px",
                                }}
                            >
                                Home
                            </Button>
                            <Button
                                onClick={() => handleClick("/recipe")}
                                color="inherit"
                                sx={{
                                    fontFamily: "Anton",
                                    fontSize: "25px",
                                    marginRight: "25px",
                                }}
                            >
                                Recipe
                            </Button>
                            <Button
                                onClick={() => handleClick("/about")}
                                color="inherit"
                                sx={{
                                    fontFamily: "Anton",
                                    fontSize: "25px",
                                    marginRight: "25px",
                                }}
                            >
                                ABOUT US
                            </Button>
                            <Button
                                onClick={() => handleClick("/login")}
                                color="inherit"
                                sx={{
                                    fontFamily: "Anton",
                                    fontSize: "25px",
                                    marginRight: "25px",
                                }}
                            >
                                LOG IN
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default NavBar;

const Logo = {
    fontWeight: "bold",
    fontSize: "50px",
    flexGrow: 1,
    fontFamily: "Gluten",
    color: "#F8F8F8",
    justifyContent: "flex-start",
    marginLeft: "20px",
};

