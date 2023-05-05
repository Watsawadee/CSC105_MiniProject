import React from "react";
import NavBar from "../components/NavBar";
import { Box, Typography, TextField, colors } from "@mui/material";
import "../styles/Account.css";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get("email"),
        password: data.get("password"),
    });
};
const theme = createTheme();

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
                    {/*                     

                    <TextField
                        required
                        label=""
                        placeholder="example@gmail.com"
                        sx={input_box}
                    />


                    <TextField
                        id="outlined-password-input"
                        label=""
                        type="password"
                        placeholder="****************"
                        autoComplete="current-password"
                        sx={input_box}
                    /> */}
                    <Typography sx={Text}>Email</Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        placeholder="   example@gmail.com"
                        autoFocus
                        sx={input_box}
                    />
                    <Typography sx={Text}>Password</Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        placeholder="   ***********************"
                        type="password"
                        autoComplete="current-password"
                        sx={input_box}
                    />

                    <Button
                        onClick={() => handleClick("/account")}
                        type="submit"
                        fullWidth
                        sx={Submit}
                    >
                        Log in
                    </Button>

                    <Grid container>
                        <Grid item>
                            <Link href="/signup" sx={Signup}>
                                {"Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            {/* 
            <Box sx={BoxContent}>
                <Container maxWidth="xs">
                    <CssBaseline />
                    <Box sx={Content}>
                        <Typography sx={Head}>
                            Log in To Your Account
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                autoFocus
                                sx={input_box}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                sx={input_box}
                            />
                            <Button
                                onClick={() => handleClick("/account")}
                                type="submit"
                                fullWidth
                                sx={Submit}
                            >
                                Log in
                            </Button>

                            <Grid container>
                                <Grid item>
                                    <Link href="/signup" sx={Signup}>
                                        {"Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box> */}
        </>
    );
}

export default Accountpage;

const BoxContent = {
    backgroundImage: "url(src/assets/chef.jpg)",
    backgroundSize: "cover",
    height: "100vh",

    BackgroundColor: "aqua",
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
    borderRadius: "20px",
    padding: "50px",
    backgroundColor: "#F8F8F8",
};

const Head = {
    fontFamily: "Quicksand",
    fontSize: "60px",
    fontWeight: "Bold",
    color: "#6C5B7B",
};

const Text = {
    fontFamily: "Quicksand",
    fontSize: "30px",
    fontWeight: "Bold",
    color: "#6C5B7B",
};

const input_box = {
    backgroundColor: "rgba(192, 108, 132, 0.4)",
    borderRadius: "50px",
    textDecoration: "none",
    "& fieldset": { border: "none" },
    input: { color: "#6C5B7B", fontSize: "20px", },
    // border: "none",
    "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: "#F8F8F8",
        borderRadius: "20px",
        border: "none",
    },
    width: "500px",

};

const Submit = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "30px",
    borderRadius: "40px",
    backgroundColor: "#6C5B7B",
    color: "#F8F8F8",
    width: "500px",
};

const Signup = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecorationColor: "#6C5B7B",
};
