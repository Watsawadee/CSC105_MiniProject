import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import NavBar from "../components/NavBar";
import { Typography, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CollectionsIcon from "@mui/icons-material/Collections";
import Upload_img from "../components/Upload_img";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Editpage() {
    // const [recipeList, setRecipelist] = useState([]);
    let navigate = useNavigate();
    const { recipeId } = useParams();
    const recipe_id = recipeId;
    const [recipeData, setRecipeData] = useState({
        recipe_name: "",
        description: "",
        cook_time: 0,
        is_favourite: false,
        rating: 0,
        likes: 0,
        Breakfast: false,
        lunch: false,
        Gluten_Free: false,
        Dinner: false,
        image_link: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRecipeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(recipeId);

        // Make a PUT request to the backend API
        axios
            .put(`http://localhost:8000/edit/${recipe_id}`, recipeData)
            .then((response) => {
                console.log(response.data);
                navigate("/account");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // const recipeList = () => {
    //     Axios.get("/recipes", {
    //         headers: { Authorization: localStorage.getItem("token") },
    //     }).then((res) => {
    //         setRecipeList(res.data.data);
    //     });
    // };

    useEffect(() => {
        axios
            .get(`http://localhost:8000/recipes/${recipe_id}`)
            .then((response) => {
                const recipe = response.data; // Assuming the response data is the recipe object
                setRecipeData(recipe.data[0]);
                console.log(recipe.data[0]);
                console.log(recipe_id);
            })
            .catch((error) => {
                console.error(error);
                // Handle error response
                // Show an error message or perform any other actions
            });
    }, []);
    

    return (
        <>
            <NavBar />
            <Box sx={Create}>
                <Typography sx={Header}>Edit Your Own Recipe </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "20px",
                            marginLeft: "0px",
                        }}
                    >
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
                                        <Typography sx={Text}>Name</Typography>
                                        <TextField
                                            sx={input_box_name}
                                            required
                                            placeholder="Name of dish"
                                            name="recipe_name"
                                            value={recipeData.recipe_name}
                                            onChange={handleInputChange}
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
                                            name="cook_time"
                                            value={recipeData.cook_time}
                                            onChange={handleInputChange}
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
                                        name="description"
                                        value={recipeData.description}
                                        onChange={handleInputChange}
                                    />
                                </Box>
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
                            onClick={handleSubmit}
                            type="submit"
                            fullWidth
                            sx={Submit}
                            noValidate
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Editpage;

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
    display: "flex",
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
