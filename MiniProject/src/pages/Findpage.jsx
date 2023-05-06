import React from "react";
import NavBar from "../components/NavBar";
import { Box, Typography, Grid, Card, ListItem, Button, Divider } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({ setSearchQuery }) => (
    <form>
        <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
        <TextField
            onInput={(e) => {
                setSearchQuery(e.target.value);
            }}
            placeholder="Salad, Breakfast, Vegetarian, Gluten-Free"
            size="small"
        />

    </form>
);

const filterData = (query, itemData) => {
    if (!query) {
        return itemData;
    } else {
        return itemData.filter((item) => item.toLowerCase().includes(query));
    }
};

// const data = [
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
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, itemData);
    return (
        <Box sx={{ width: "100vw", padding: "0" }}>
            <div
                style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: 20
                }}
            >
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
                                borderWidth: "10px"
                            }}
                            key={item.title}
                        >
                            {/* {d} */}
                        </div>
                    ))}
                </div>
            </div>


            <NavBar />
            <Typography sx={Head}> Find a Recipe </Typography>
            <Box sx={Content}>
                <Box sx={Group_row}>
                    <Typography sx={Title}> Recommends</Typography>
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
                {/* <Divider flexItem sx={DividerStyle}/>
                <Box sx={Group_row}>
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
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    height: "fit-content",
    paddingTop: "25px",
    paddingBottom: "25px",
};

const Title = {
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "30px",
};

const Group_Recipe = {
    display: "flex",
    flexDirection: "row",

};

const Group_row = {
    marginLeft: "50px",
    marginRight: "50px",
    marginBottom: "10px",
};

const Recipe_detail = {
    transition: "250ms all",
    background: "",
    height: "fit-content",
};

const Recipe_content = {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    boxShadow: "0px 3px 6px rgba(0,0,0,.16)",
    overflow: "hidden",
    borderRadius: "8px",
    position: "relative",
    textAlign: "center",
    width: "250px",
    height: "1000px"
};

const img = {
    width: 1,
    height: 1,
    maxHeight: "120px",
    objectFit: "cover",
    position: "relative",

};

const DividerStyle = {
    backgroundColor: "#C06C84",
    margin: "10px",
    // marginTop: "10px"
}

// Data
const itemData = [
    {
        img: "src/assets/Salad.jpg",
        title: "Salad",
        author: "@bkristastucchio",
        favourite: true,
        // rows: 2,
        // cols: 2,
        // featured: true,
    },

    {
        img: "src/assets/Pizza.png",
        title: "Pizza",
        author: "@rollelflex_graphy726",
        favourite: false,

    },
    {
        img: "src/assets/Hamburger.jpg",
        title: "Hamburger",
        author: "@helloimnik",
        favourite: true,

    },
    {
        img: "src/assets/Pancake.jpg",
        title: "Pancake",
        author: "@nolanissac",
        favourite: false,

        // cols: 2,
    },
    {
        img: "src/assets/Spaghetti.jpg",
        title: "Spaghetti",
        author: "@helloimnik",
        favourite: true,

    },
];

//Handle ...
const handleClick = () => {
    onClick = () => { alert('clicked') }
}