import React from "react";
import NavBar from "../components/NavBar";
import { Typography, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
// import { useDropzone } from 'react-dropzone';
import Upload_img from "../components/Upload_img";

function CreatePage() {
    return (
        <>
            <NavBar />
            <Box sx={Create}>
                    <Typography sx={Header}>Create Your Own Recipe </Typography>
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{justifyContent:"center", alignItems:"center", margin:"20px" ,marginLeft:"0px"}}>
                        <Upload_img />
                    </Box>

                    <Box sx={detail}>
                        <Box>
                            <Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            md: "row",
                                        },
                                        justifyContent: {
                                            xs: "flex-start",
                                            md: "space-between",
                                        },
                                    }}
                                >
                                    <Box>
                                        <Typography sx={Text}>
                                            Name
                                        </Typography>
                                        <TextField
                                            sx={input_box_name}
                                            required
                                            placeholder="Name of dish"
                                        />
                                    </Box>
                                    <Box>
                                        <Typography sx={Text_time}>
                                            Cook Time
                                        </Typography>
                                        <TextField
                                            sx={input_box_time}
                                            required
                                            type="number"
                                            min="0"
                                            step="1"
                                            placeholder="Minutes"
                                        />
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography sx={Text}>
                                        Description
                                    </Typography>
                                    <TextField
                                        sx={input_box}
                                        required
                                        multiline
                                        placeholder="Description"
                                    />
                                </Box>
                                {/* <Box sx={Time_row}> */}
                                {/* <Box sx={TimeBox} gap={1}>
                                    <TextField
                                        sx={input_box_time}
                                        required
                                        type="number"
                                        min="0"
                                        max="23"
                                        step="1"
                                        placeholder="Hour"
                                    />
                                    <TextField
                                        sx={input_box_time}
                                        required
                                        type="number"
                                        min="0"
                                        max="59"
                                        step="1"
                                        placeholder="Minutes"
                                    />
                                    <TextField
                                        sx={input_box_time}
                                        required
                                        type="number"
                                        min="0"
                                        max="59"
                                        step="1"
                                        placeholder="Second"
                                    />
                                </Box> */}
                                {/* </Box> */}
                            </Box>
                            <Box>
                                <Typography sx={Text}>Directions</Typography>
                                <TextField
                                    sx={input_box}
                                    required
                                    multiline
                                    placeholder="Directions"
                                />
                            </Box>
                            <Box>
                                <Typography sx={Text}>Ingredients</Typography>
                                <TextField
                                    sx={input_box}
                                    required
                                    multiline
                                    placeholder="Ingredients"
                                />
                            </Box>

                            <Box>
                                <Typography sx={Text}>Tools</Typography>
                                <TextField
                                    sx={input_box}
                                    required
                                    multiline
                                    placeholder="Tools"
                                />
                            </Box>
                            <Box>
                                <FormControlLabel
                                    control={
                                        <Checkbox sx={{ color: "#6C5B7B" }} />
                                    }
                                    label="Breakfast"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox sx={{ color: "#6C5B7B" }} />
                                    }
                                    label="Lunch"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox sx={{ color: "#6C5B7B" }} />
                                    }
                                    label="Dinner"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox sx={{ color: "#6C5B7B" }} />
                                    }
                                    label="Gluten-Free"
                                />
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
            </Box>
        </>
    );
}

export default CreatePage;

// Style

const Create = {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: {xs:"none", sm:"50px"},
};

const detail = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    float: "right",
    marginRight: "50px",
};

const Header = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontSize: { xs: "30px", sm: "40px", md: "60px" },
    fontWeight: "Bold",
    display: "",
    maxWidth: "100%",
    // justifyContent: "center",
    // alignItems: "center"
};

const input_box = {
    display: "flex",
    borderRadius: "50px",
    border: "1px solid #6C5B7B",
    textDecoration: "none",
    "& fieldset": { border: "none" },
    width: "100%",
    margin: "5px",
};

const input_box_name = {
    display: "flex",
    borderRadius: "50px",
    border: "1px solid #6C5B7B",
    textDecoration: "none",
    "& fieldset": { border: "none" },
    width: { xs: "100%" },
    maxWidth: { xs: "230", md: "230px" },
    margin: "5px",
};

const input_box_time = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "50px",
    border: "1px solid #6C5B7B",
    textDecoration: "none",
    color: "#6C5B7B",
    fontSize: "20px",
    "& fieldset": { border: "none" },
    width: "100%",
    maxWidth: { xs: "230", md: "230px" },
    margin: "5px",
};

const Text = {
    fontFamily: "Quicksand",
    fontSize: "22px",
    fontWeight: "Bold",
    color: "#6C5B7B",
    marginLeft: "30px",
};

const Text_time = {
    fontFamily: "Quicksand",
    fontSize: "22px",
    fontWeight: "Bold",
    color: "#6C5B7B",
    marginLeft: "10px",
};

const Submit = {
    display:"flex",
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
