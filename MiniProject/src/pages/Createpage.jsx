import React from "react";
import NavBar from "../components/NavBar";
import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

function CreatePage() {
    return (
        <>
            <Box>
                <NavBar />
                {/* <h1>Create Recipe</h1> */}
                <Typography sx={Header}>Create Your Own Recipe</Typography>

                <TextField required label="Name of dish" />
            </Box>
        </>
    );
}

export default CreatePage;

const Header = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontSize: "60px",
    fontWeight: "Bold",
    display: "",
};
