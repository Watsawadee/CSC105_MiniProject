import React from "react";
import NavBar from "../components/NavBar";
import { Box, Typography, TextField, colors } from "@mui/material";
import "../styles/Account.css";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get("email"),
        password: data.get("password"),
    });
};

function Accountpage() {
    let navigate = useNavigate();
    const handleClick = (destination) => {
        navigate(destination);
    };
    return (
        <>
            <NavBar />
            <Box sx={BoxContent}>
                <Box sx={Content}>
                    <Typography sx={Head}>Log in To Your Account</Typography>
                    <Box sx={input}>
                        <Typography sx={Text}>Email</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            placeholder="example@gmail.com"
                            autoFocus
                            sx={input_box}
                        />
                    </Box>
                    <Box sx={input}>
                        <Typography sx={Text}>Password</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            placeholder="***********************"
                            type="password"
                            autoComplete="current-password"
                            sx={input_box}
                        />
                    </Box>

                    <Button
                        // onClick={() => handleClick("/account")}
                        href="/account"
                        type="submit"
                        fullWidth
                        sx={Submit}
                    >
                        Log in
                    </Button>

                    <Link href="/signup" sx={Signup}>
                        {"Sign up"}
                    </Link>
                </Box>
            </Box>
        </>
    );
}

export default Accountpage;
// Style
const BoxContent = {
    backgroundImage: "url(src/assets/chef_30.jpg)",
    backgroundSize: "cover",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "calc(100vh - 75px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImageOpacity: "60%",
};
const Content = {
    color: "#f5f5f5",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    height: "fit-content",
    width: "fit-content",
    // height: {xs:"fit-content", sm:"80vh"},
    // width: "50vh",
    borderRadius: "20px",
    padding: {xs:"8px", sm:"15px", md:"20px"},
};

const Head = {
    fontFamily: "Quicksand",
    fontSize: {xs:"28px", sm:"40px",md:"60px"},
    // , md:"55px"
    fontWeight: "Bold",
    color: "#6C5B7B",
};

const Text = {
    fontFamily: "Quicksand",
    fontSize: {xs:"20px", sm:"28px", md:"30px"},
    fontWeight: "Bold",
    color: "#6C5B7B",
};

const input_box = {
    backgroundColor: "rgba(192, 108, 132, 0.4)",
    borderRadius: "50px",
    textDecoration: "none",
    "& fieldset": { border: "none" },
    input: { 
        color: "#6C5B7B",
        fontSize: {xs:"20px"},
        // alignItems:"center",
        // justifyContent: "center"
    },
    width: {xs:"300px", sm:"500px"},
    height: {xs:"45px", sm:"50px"},
    margin: "5px",
};

const input = {

};

const Submit = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: {xs:"20px", sm:"30px"},
    borderRadius: "40px",
    backgroundColor: "#6C5B7B",
    color: "#F8F8F8",
    width: {xs:"200px", sm:"250px"},
    marginTop: "15px",
    "&:hover": {
        border: "1px solid #6C5B7B",
        backgroundColor: "#F8F8F8",
        color: "#6C5B7B",
        boxShadow: 3,
    },

};

const Signup = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: {xs:"20px", sm:"30px"},
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    textDecorationColor: "#6C5B7B",
    marginTop: "10px"
};
