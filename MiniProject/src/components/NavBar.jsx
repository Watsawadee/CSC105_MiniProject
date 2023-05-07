import React from "react";
import "../styles/NavBar.css";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";


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
                            sx={Hamburger}
                        >
                            <MenuIcon sx={{ fontSize: "40px" }} />
                        </IconButton>
                        <Box sx={Nav_RightBar}>
                            <Button
                                onClick={() => handleClick("/")}
                                sx={StyleMenuBar}
                            >
                                Home
                            </Button>
                            {/* <Divider orientation="vertical" flexItem sx={Divider_Vertical} /> */}
                            <Button
                                onClick={() => handleClick("/recipe")}
                                sx={StyleMenuBar}
                            >
                                Recipe
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

// Style
const Logo = {
    fontWeight: "bold",
    fontSize: "50px",
    flexGrow: 1,
    fontFamily: "Gluten",
    color: "#F8F8F8",
    justifyContent: "flex-start",
    marginLeft: "20px",
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
}
const Nav_RightBar = {
    display: {
        xs: "none",
        md: "block",
        fontFamily: "Anton",
    }
}

const Hamburger = {
    color: "white",
    display: { xs: "block", md: "none" },
}