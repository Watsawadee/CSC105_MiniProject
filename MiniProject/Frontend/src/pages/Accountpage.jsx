import React from "react";
import NavBar from "../components/NavBar";
import "../assets/user.png";
import { Box, Typography, Avatar, Divider, Button, Grid } from "@mui/material";
import RecipeCard from "../components/RecipeCard";

function Accountpage() {
    return (
        <>
            <Grid>
                <Grid item={12}>
                    <NavBar />
                </Grid>

                <Grid item xs={6} md={12} sx={Account}>
                    <Avatar
                        alt="user_photo"
                        src="../src/assets/user.png"
                        sx={Picture}
                    />
                </Grid>

                <Grid item xs={6} sx={Top}>
                    <Box sx={{
                        display: "flex", justifyContent: "center",
                        alignsItem: "center",
                    }}>
                        <Typography sx={Header} >
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
                            <Typography sx={Count_Classifier}>
                                Views
                            </Typography>
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

                <Grid item xs={1}>
                    <Box sx={Group_Recipe}>
                        <Divider flexItem sx={BigBreakLine} />
                        <Box sx={Group_row}>
                            <Typography sx={Title}> Recommends</Typography>
                            <RecipeCard/>
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
                    <Button sx={Logout} href="/">
                        Log out
                    </Button>
                </Grid>

            </Grid >
        </>
    );
}

export default Accountpage;

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
    color: "#333333",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: { xs: "30px", sm: "60px" },
    opacity: "64%",
    // marginLeft: { md:"100px"}
    // backgroundColor: "red",
    width: "fit-content"
};

const Count = {
    color: "#F8B195",
    fontFamily: "Quicksand",
    fontSize: { xs: "50px", sm: "80px", md: "90px" },
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignsItem: "center",
};

const Count_Classifier = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontSize: { xs: "20px", sm: "30px" },
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignsItem: "center",
};

const Picture = {
    width: { xs: "180px", sm: "300px", md: "400px" },
    height: { xs: "180px", sm: "300px", md: "400px" },
    marginTop: { xs: "10px", sm: "50px", md: "50px" },
    // float: "left",
    display: "flex",
    // marginLeft: "500px",
    borderRadius: "50%"
};

const Group_detail = {
    display: "flex",
    alignsItem: "center",
    justifyContent: "center",
    marginBottom:"30px",

    // backgroundColor : "blue",
};

const Detail = {
    display: "flex",
    flexDirection: "column",
    margin: { xs: "30px", sm: "50px", md: "80px" },
    width: { xs: "50px", sm: "150px", md: "180px" },

    // backgroundColor : "aqua",
};

const VerticalLine = {
    backgroundColor: "#C06C84",
    height: "full",
    width: "0.1px",
};

const Line = {
    backgroundColor: "#C06C84",
    height: "0.1px",
    width: "full",
};

const BigBreakLine = {
    backgroundColor: "#000000",
    width: "full",
    height: "0.2px",
};

const Group_Recipe = {
    marginLeft: "50px",
    marginRight: "50px",
    justifyContent: "center",
    alignsItem: "center",
    // backgroundColor : "Green"
};

const Title = {
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: { xs: "20px", md: "30px" },
    marginTop: "20px",
};

const Group_row = {
    marginBottom: "10px",
    width: "80vw",
    backgroundColor: "red",
    justifyContent:"center",
    alignsItem: "center",
};


const Logout = {
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
    marginBottom: {xs:"20px", md:"50px"},
    float: "right",
    "&:hover": {
        backgroundColor: "#6C5B7B",
        color: "#F8F8F8",
    },
}
