import React from "react";
import NavBar from "../components/NavBar";
import "../assets/user.png";
import { Box, Typography, Avatar, Divider, Button } from "@mui/material";

function Accountpage() {
    return (
        <>
            <Box>
                <NavBar />
                <Box sx={Account}>
                    <Avatar
                        alt="user_photo"
                        src="../src/assets/user.png"
                        sx={Picture}
                    />
                    <Box sx={Top}>
                        <Typography sx={Header}>
                            Hello, Mrs. Anna Marie
                        </Typography>
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
                    </Box>
                </Box>
                <Box sx={Group_Recipe}>
                    {/* INSERT THE RECIPEEEEEEEE HEREEEEE */}
                    <Divider flexItem sx={BigBreakLine} />
                    <Box sx={Group_row}>
                        <Typography sx={Title}> Recommends</Typography>
                    </Box>

                    <Divider flexItem sx={Line} />
                    <Box sx={Group_row}>
                        <Typography sx={Title}>
                            Your Favourite Recipe
                        </Typography>
                    </Box>
                    <Divider flexItem sx={BigBreakLine} />
                </Box>
                <Button sx={Logout} href="/">
                    Log out
                </Button>
            </Box>
        </>
    );
}

export default Accountpage;

// Style
const Account = {
    // margin : "150px",
    display: "flex",
    justifyContent: "center",
    // flexFlow : "wrap row"
};
const Top = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    // backgroundColor : "aqua",
    margin: "80px",
};

const Header = {
    color: "#333333",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "60px",
    opacity: "64%",
    // backgroundColor : "red",
};

const Count = {
    color: "#F8B195",
    fontFamily: "Quicksand",
    fontSize: "100px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignsItem: "center",
};

const Count_Classifier = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontSize: "30px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignsItem: "center",
};

const Picture = {
    width: "fit-content",
    height: "fit-content",
    float: "left",
    display: "flex",
    margin: "80px",
};

const Group_detail = {
    display: "flex",
    alignsItem: "center",
    // backgroundColor : "blue",
};

const Detail = {
    display: "flex",
    flexDirection: "column",
    margin: "50px",
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
    // backgroundColor : "Green"
};

const Title = {
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "30px",
    marginTop: "20px",
};

const Group_row = {
    marginLeft: "50px",
    marginRight: "50px",
    marginBottom: "10px",
    // backgroundColor : "yellow"
};

const Logout = {
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "Quicksand",
    color: "#6C5B7B",
    border: "2px solid #6C5B7B",
    borderRadius: "40px",
    padding: "10px",
    paddingLeft: "40px",
    paddingRight: "40px",
    marginTop: "30px",
    marginRight: "50px",
    float: "right",
    "&:hover": {
        backgroundColor: "#6C5B7B",
        color: "#F8F8F8",
    },
}