import React from "react";
import NavBar from "../components/NavBar";
import { Box, Typography, Avatar, Divider, Button, Grid } from "@mui/material";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import RecipeCardMyAccount from "../components/RecipeCard/RecipeCardMyAccount";
import { Axios } from "axios";
import { useState } from "react";

function AccountPage({ onSignOut }) {
    const [recipeData, setRecipeData] = useState([]);
    const handleLogout = () => {
        onSignOut();
        // fetch("/logout", {
        //   method: "POST",
        //   credentials: "include",
        // })
        //   .then((response) => {
        //     if (response.ok) {
        //       // Logout successful
        //       // Redirect or perform any other actions
        //     } else {
        //       // Logout failed
        //       console.error("Logout failed");
        //     }
        //   })
        //   .catch((error) => {
        //     console.error("Logout failed", error);
        //   });
    };

    const handleDelete = (recipeId) => {
      console.log(recipeId);
        axios
            .delete(`http://localhost:8000/delete/${recipeId}`)
            .then((response) => {
                console.log(response.data);
                // Handle success response
                // Show a success message, update the recipe list, or perform any other actions
            })
            .catch((error) => {
                console.error(error);
                // Handle error response
                // Show an error message or perform any other actions
            });
    };

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>

                <Grid item xs={12} md={5} sx={Account}>
                    <Avatar
                        alt="user_photo"
                        src="../src/assets/user.png"
                        sx={Picture}
                    />
                </Grid>

                <Grid item xs={12} md={7} sx={Top}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography sx={Header}>
                            Hello, Mrs. Anna Marie
                        </Typography>
                    </Box>
                    <Box sx={Group_detail}>
                        <Box sx={Detail}>
                            <Typography sx={Count}>359</Typography>
                            <Typography sx={Count_Classifier}>
                                Recipes
                            </Typography>
                        </Box>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={VerticalLine}
                        />

                        <Box sx={Detail}>
                            <Typography sx={Count}>12K</Typography>
                            <Typography sx={Count_Classifier}>Views</Typography>
                        </Box>

                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={VerticalLine}
                        />

                        <Box sx={Detail}>
                            <Typography sx={Count}>18</Typography>
                            <Typography sx={Count_Classifier}>
                                Favourite
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box sx={Group_Recipe}>
                        <Divider flexItem sx={BigBreakLine} />
                        <Box sx={Group_row}>
                            <Typography sx={Title}> Your Own Recipe</Typography>
        
                            <RecipeCardMyAccount onDelete={handleDelete}/>
                        </Box>

                        <Divider flexItem sx={Line} />
                        <Box sx={Group_row}>
                            <Typography sx={Title}>
                                Your Favourite Recipe
                            </Typography>
                            <RecipeCard />
                        </Box>
                        <Divider flexItem sx={BigBreakLine} />
                    </Box>
                    <Button sx={Logout} onClick={handleLogout}>
                        Log out
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default AccountPage;

// Style
const Account = {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "aqua",
    // flexFlow : "wrap row"
};
const Top = {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignsItem: "center",
    // backgroundColor : "aqua",
    // margin: { xs: "20px", sm: "50px" },
};

const Header = {
    display: "flex",
    color: "#333333",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: { xs: "30px", sm: "40px", md: "45px" },
    opacity: "64%",
    marginTop: { md: "40px" },
    // marginLeft: { xs :"100px"},
    // backgroundColor: "red",
    width: "fit-content",
    alignsItem: "center",
    justifyContent: "center",
};

const Count = {
    display: "flex",
    color: "#F8B195",
    fontFamily: "Quicksand",
    fontSize: { xs: "50px", sm: "80px", md: "80px", lg: "100px" },
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignsItem: "center",
};

const Count_Classifier = {
    display: "flex",
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontSize: { xs: "20px", sm: "30px" },
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignsItem: "center",
};

const Picture = {
    width: { xs: "180px", sm: "300px", md: "300px", lg: "400px" },
    height: { xs: "180px", sm: "300px", md: "300px", lg: "400px" },
    marginTop: { xs: "10px", sm: "50px", md: "20px" },
    marginBottom: { md: "20px" },
    // float: "left",
    display: "flex",
    // marginLeft: "500px",
    borderRadius: "50%",
};

const Group_detail = {
    display: "flex",
    alignsItem: "center",
    justifyContent: "center",
    marginBottom: "30px",
    // backgroundColor : "blue",
};

const Detail = {
    display: "flex",
    flexDirection: "column",
    margin: { xs: "30px", sm: "50px", md: "10px", lg: "20px" },
    width: { xs: "50px", sm: "150px", md: "180px", lg: "200px" },

    // backgroundColor : "aqua",
};

const VerticalLine = {
    display: "flex",
    backgroundColor: "#C06C84",
    height: "full",
    width: "0.1px",
};

const Line = {
    display: "flex",
    backgroundColor: "#C06C84",
    height: "0.1px",
    width: "full",
};

const BigBreakLine = {
    display: "flex",
    backgroundColor: "#000000",
    width: "full",
    height: "0.2px",
};

const Group_Recipe = {
    // display: "flex",
    marginLeft: "50px",
    marginRight: "50px",
    justifyContent: "center",
    alignsItem: "center",
    // backgroundColor : "Green"
};

const Title = {
    display: "flex",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: { xs: "20px", md: "30px" },
    marginTop: "20px",
};

const Group_row = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    width: "80vw",
    // backgroundColor: "red",
    justifyContent: "center",
    alignsItem: "center",
};

const Logout = {
    display: "flex",
    fontWeight: "bold",
    fontSize: { xs: "15px", sm: "20px" },
    fontFamily: "Quicksand",
    color: "#6C5B7B",
    border: "2px solid #6C5B7B",
    borderRadius: "40px",
    padding: { xs: "10px", sm: "10px" },
    paddingLeft: { xs: "10px", sm: "40px" },
    paddingRight: { xs: "10px", sm: "40px" },
    marginTop: { xs: "20px", sm: "30px" },
    marginRight: { xs: "15px", sm: "50px" },
    marginBottom: { xs: "20px", md: "50px" },
    float: "right",
    "&:hover": {
        backgroundColor: "#6C5B7B",
        color: "#F8F8F8",
    },
};
