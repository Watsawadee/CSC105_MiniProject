import React from "react";
import NavBar from "../components/NavBar";
import { Typography, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function CreatePage() {
    return (
        <>
            <NavBar />
            <Box sx={Create}>

                <Typography sx={Header}>Create Your Own Recipe</Typography>
                <Box>
                    <input type="file" />
                </Box>


                <Box sx={detail}>
                    <Box>
                        <Box>
                            <Box>
                                <Typography sx={Text}>Name of dish</Typography>
                                <TextField sx={input_box} required placeholder="Name of dish" />
                            </Box>
                            <Box>
                                <Typography sx={Text}>Time</Typography>
                                <TextField sx={input_box_time} required type="number" min="0" max="23" step="1" placeholder="Hour" />
                                <TextField sx={input_box_time} required type="number" min="0" max="59" step="1" placeholder="Minute" />
                                <TextField sx={input_box_time} required type="number" min="0" max="59" step="1" placeholder="Second" />
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={Text}>Tools</Typography>
                            <TextField sx={input_box} required multiline placeholder="Tools" />
                        </Box>
                        <Box>
                            <Typography sx={Text}>Ingredients</Typography>
                            <TextField sx={input_box} required multiline placeholder="Ingredients" />
                        </Box>
                        <Box>
                            <Typography sx={Text}>Directions</Typography>
                            <TextField sx={input_box} required multiline placeholder="Directions" />
                        </Box>
                    </Box>
                    <Button
                        onClick={() => handleClick("/account")}
                        type="submit"
                        fullWidth
                        sx={Submit}
                        noValidate
                    >
                        save
                    </Button>
                </Box>

            </Box>
        </>
    );
}

export default CreatePage;

// Style

const Create = {
    marginTop: "50px",
    marginLeft: "50px",
}

const detail = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    float: "right",
    marginRight: "50px",
}

const Header = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontSize: "60px",
    fontWeight: "Bold",
    display: "",
};

const input_box = {
    borderRadius: "50px",
    border: "1px solid #6C5B7B",
    textDecoration: "none",
    "& fieldset": { border: "none" },
    width: "500px",
    margin: "5px",
};

const input_box_time = {
    borderRadius: "50px",
    border: "1px solid #6C5B7B",
    textDecoration: "none",
    color: "#6C5B7B",
    fontSize: "20px",
    "& fieldset": { border: "none" },
    width: "150px",
    margin: "5px",
};

const Text = {
    fontFamily: "Quicksand",
    fontSize: "22px",
    fontWeight: "Bold",
    color: "#6C5B7B",
    marginLeft: "30px"
};

const Submit = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "30px",
    borderRadius: "40px",
    backgroundColor: "#6C5B7B",
    color: "#F8F8F8",
    width: "250px",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
        border: "1px solid #6C5B7B",
        color: "#6C5B7B",
    },
};