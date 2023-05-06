import React from "react";
import NavBar from "../components/NavBar";
import { IconButton } from "@mui/material";
import { Box, Typography, TextField, Button } from "@mui/material";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";


const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
};




function SignUppage() {
    let navigate = useNavigate();
    const handleClick = (destination) => {
        navigate(destination);
    };

    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid item sm={12} ><NavBar /></Grid>

            <Grid
                item
                sm={false}
                md={7}
                sx={Image}
            />
            <Grid item sm={12} md={5} square>
                <Box
                    sx={BoxContent}
                >
                    <Typography sx={Head}>
                        Create Account
                    </Typography>

                    <Box noValidate onSubmit={handleSubmit} sx={Content}>
                        <Box>
                            <Typography sx={Text}>Full Name</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                placeholder="Firstname Surname"
                                autoFocus
                                sx={input_box}
                            />
                        </Box>
                        <Box>
                            <Typography sx={Text}>Email</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                placeholder="Email"
                                autoComplete="email"
                                autoFocus
                                sx={input_box}
                            />
                        </Box>
                        <Box>
                            <Typography sx={Text}>Username</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                placeholder="Username"
                                autoFocus
                                sx={input_box}
                            />
                        </Box>
                        <Box>
                            <Typography sx={Text}>Password</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                placeholder="***************"
                                type="password"
                                sx={input_box}
                            />
                        </Box>
                        <Box>
                            <Typography sx={Text}>Repeat Password</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                placeholder="***************"
                                type="password"
                                sx={input_box}
                            /></Box>
                        <FormControlLabel
                            control={<Checkbox sx={{ color: "#6C5B7B" }} />}
                            label="I read and agree to Terms & Conditions"
                            required
                        />
                        <Button
                            onClick={() => handleClick("/account")}
                            type="submit"
                            fullWidth
                            sx={Submit}
                            noValidate
                        >
                            Sign up
                        </Button>

                        <Link href="/login" sx={Login}>
                            {"Log In"}
                        </Link>

                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SignUppage;
//Style

const Head = {
    fontFamily: "Quicksand",
    fontSize: "60px",
    fontWeight: "Bold",
    color: "#6C5B7B",
};

const input_box = {
    backgroundColor: "rgba(192, 108, 132, 0.4)",
    borderRadius: "50px",
    textDecoration: "none",
    "& fieldset": { border: "none" },
    input: { color: "#6C5B7B", fontSize: "20px", },
    width: "500px",
    margin: "5px",
};

const Text = {
    fontFamily: "Quicksand",
    fontSize: "30px",
    fontWeight: "Bold",
    color: "#6C5B7B",
    marginLeft: "30px"
};

const Submit = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "30px",
    borderRadius: "40px",
    backgroundColor: "#6C5B7B",
    color: "#F8F8F8",
    width: "250px",
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};


const Login = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    textDecorationColor: "#6C5B7B",
    marginTop: "10px"
};

const Image = {
    backgroundImage: 'url(src/assets/chef_70.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "full",
}

const Content = {
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    width: "fit-content",
    borderRadius: "20px",
};

const BoxContent = {
    my: 8,
    mx: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};