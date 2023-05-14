import React from "react";
import NavBar from "../components/NavBar";
import {
    Box,
    Typography,
    Grid,
    Card,
    ListItem,
    Button,
    Divider,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import RecipeCard from "../components/RecipeCard";

// const SearchBar = ({ setSearchQuery }) => (
//     <form>
//         <IconButton type="submit" aria-label="search">
//             <SearchIcon style={{ fill: "blue" }} />
//         </IconButton>
//         <TextField
//             onInput={(e) => {
//                 setSearchQuery(e.target.value);
//             }}
//             placeholder="Salad, Breakfast, Vegetarian, Gluten-Free"
//             size="small"
//         />
//     </form>
// );

// const filterData = (query, itemData) => {
//     if (!query) {
//         return itemData;
//     } else {
//         return itemData.filter((item) => item.toLowerCase().includes(query));
//     }
// };

// const itemData = [
//     "Paris",
//     "London",
//     "New York",
//     "Tokyo",
//     "Berlin",
//     "Buenos Aires",
//     "Cairo",
//     "Canberra",
//     "Rio de Janeiro",
//     "Dublin"
// ];

function Findpage() {
    // const [searchQuery, setSearchQuery] = useState("");
    // const dataFiltered = filterData(searchQuery, itemData);
    return (
        <Box sx={FindPage}>
            {/* <div
                style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: 20,
                }}
            >
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <div style={{ padding: 3 }}>
                    {itemData.map((item) => (
                        <div
                            style={{
                                padding: 5,
                                justifyContent: "normal",
                                fontSize: 20,
                                color: "blue",
                                margin: 1,
                                width: "250px",
                                BorderColor: "green",
                                borderWidth: "10px",
                            }}
                            key={item.title}
                        >
                            {d}
                        </div>
                    ))}
                </div>
            </div> */}

            <NavBar />
            <Typography sx={Head}> Find a Recipe </Typography>
            <Box sx={Content}>
                <Box sx={Group_row}>
                    <Typography sx={Title}> Recommends</Typography>
                    <RecipeCard />
                </Box>

                <Divider flexItem sx={DividerStyle}/>

                {/* <Box sx={Group_row}>
                    <Typography sx={Title}>Top 5 in Breakfast</Typography>
                    <ImageList sx={Group_Recipe} gap={12}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} sx={Recipe_content}>
                                <img
                                    src={item.img}
                                    // srcSet={item.img}
                                    alt={item.title}
                                    sx={img}
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                    sx={Recipe_detail}
                                    actionIcon={
                                        <IconButton>
                                            {item.favourite == true ? <FavoriteBorderIcon fontSize="large" sx={{ color: "#F8F8F8" }} /> : <FavoriteIcon fontSize="large" sx={{ color: "#F67280" }} />}
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <Divider flexItem sx={DividerStyle}/> */}
            </Box>
        </Box>
    );
}

export default Findpage;

// Style
const Head = {
    fontFamily: "Quicksand",
    color: "#F8B195",
    fontSize: "100px",
    fontWeight: "Bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    marginBottom: "50px",
};

const Content = {
    backgroundColor: "rgb(248, 177, 149, 0.24)",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    width: "fit-content",
    height: "fit-content",
    paddingTop: "25px",
    paddingBottom: "25px",


};

const Title = {
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "30px",
    marginBottom: "10px",
};



const Group_row = {
    marginLeft: "50px",
    marginRight: "50px",
    marginBottom: "10px",

};





const DividerStyle = {
    backgroundColor: "#C06C84",
    margin: "10px",
    // marginTop: "10px"
};





const FindPage = {
    // width: "100vw",
    // padding: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"

}

//Handle ...
const handleClick = () => {
    onClick = () => {
        alert("clicked");
    };
};
