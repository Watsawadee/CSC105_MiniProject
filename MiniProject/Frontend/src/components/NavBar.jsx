import React, { useState } from "react";
import "../styles/NavBar.css";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Divider,
    Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";

function NavBar() {
    let navigate = useNavigate();
    const handleClick = (destination) => {
        navigate(destination);
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
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
                    <IconButton sx={Hamburger} onClick={handleMenuOpen}>
                        <MenuIcon sx={{ fontSize: "40px" }} />
                    </IconButton>

                    <Box sx={Nav_RightBar}>
                        <Button
                            onClick={() => handleClick("/")}
                            sx={StyleMenuBar}
                        >
                            HOME
                        </Button>
                        {/* <Divider orientation="vertical" flexItem sx={Divider_Vertical} /> */}
                        <Button
                            onClick={() => handleClick("/recipe")}
                            sx={StyleMenuBar}
                        >
                            RECIPE
                        </Button>
                        <Button
                            onClick={() => handleClick("/about")}
                            sx={StyleMenuBar}
                        >
                            ABOUT US
                        </Button>
                        <Button
                            onClick={() => handleClick("/login")}
                            sx={StyleMenuBar}
                        >
                            ACCOUNT
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => handleClick("/")} sx={StyleMenuBarHamburger}>
                    HOME
                </MenuItem>
                <MenuItem
                    onClick={() => handleClick("/recipe")}
                    sx={StyleMenuBarHamburger}
                >
                    RECIPE
                </MenuItem>
                <MenuItem
                    onClick={() => handleClick("/about")}
                    sx={StyleMenuBarHamburger}
                >
                    ABOUT US
                </MenuItem>
                <MenuItem
                    onClick={() => handleClick("/login")}
                    sx={StyleMenuBarHamburger}
                >
                    ACCOUNT
                </MenuItem>
            </Menu>
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

const Divider_Vertical = {
    backgroundColor: "black",
};
const StyleMenuBar = {
    fontFamily: "Anton",
    fontSize: "25px",
    marginLeft: "12px",
    marginRight: "12px",
    color: "#F8F8F8",
};
const Nav_RightBar = {
    display: {
        xs: "none",
        md: "block",
        fontFamily: "Anton",
    },
};

const Hamburger = {
    color: "white",
    display: { xs: "block", md: "none" },
};

const StyleMenuBarHamburger = {
    color: "#F67280",
    fontFamily: "Quicksand",
    fontSize: { xs: "18px", sm: "22px" },
    fontWeight: "bold",
}
