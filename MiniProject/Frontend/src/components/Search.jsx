import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, itemData);

    return (
        <>
            {/* <div
                style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            ></div> */}

            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <div style={{ padding: 3 }}>
                {itemData.map((item) => (
                    <div
                        style={SearchBarStyle}
                        key={item.title}
                    >
                        {/* {d} */}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Search;

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

const itemData = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Berlin",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Rio de Janeiro",
    "Dublin",
];

const SearchBarStyle={
    fontFamily: "Quicksand",
    color: "#F8B195",
    fontSize: "100px",
    fontWeight: "Bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // padding: 5,
    // justifyContent: "normal",
    // fontSize: 20,
    // color: "blue",
    // margin: 1,
    // width: "250px",
    // BorderColor: "green",
    // borderWidth: "10px",

}