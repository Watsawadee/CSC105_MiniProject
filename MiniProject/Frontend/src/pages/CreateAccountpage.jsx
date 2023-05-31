import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { IconButton } from "@mui/material";
import { Box, Typography, TextField, Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Axios from "../AxiosInstance"
import axios from "axios";

function SignUppage() {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(true);
    const [error, setError] = useState({});
    const [textAgree, setTextAgree] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validate()) return false;
        const data = {
            name: username,
            password: password,
            email: email,
        };
        try {
            await Axios.post("/signup", data);
            handleClick("/login");
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = (destination) => {
        navigate(destination);
    };

    const validate = () => {
        if (confirmPassword != password) {
            console.log(confirmPassword)
            console.log(password)
            setPassword("");
            setConfirmPassword("");
            return false;
        }

        if (!confirmPassword) {
            setError({ confirmPassword: "Confirm Password is required" });
            return false;
        }

        if (agree) {
            setTextAgree(true);
            return false;
        }

        return true;
    };

    return (
        <Grid container sx={{ height: "100vh" }}>
            <Grid item sm={12}>
                <NavBar />
            </Grid>

            <Grid item sm={false} md={7} sx={Image} />
            <Grid item sm={12} md={5} square>
                <Box sx={BoxContent}>
                    <Typography sx={Head}>Create Account</Typography>
                    <Box noValidate sx={Content}>
                        <Box>
                            <Typography sx={Text}>Username</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                autoComplete="email"
                                type="email"
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                fullWidth
                                placeholder="***************"
                                type="password"
                                sx={input_box}
                            />
                        </Box>
                        <FormControlLabel
                            sx={{ color: textAgree ? "#D70040" : "#6C5B7B" }}
                            control={
                                <Checkbox
                                    sx={{ color: "#6C5B7B" }}
                                    onClick={() => {
                                        setAgree(!agree);
                                        console.log(agree);
                                    }}
                                />
                            }
                            label="I read and agree to Terms & Conditions"
                        />
                        <Button
                            // onClick={() => handleClick("/account")}
                            type="submit"
                            fullWidth
                            sx={Submit}
                            onClick={handleSubmit}
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
    fontSize: { xs: "35px", sm: "40px" },
    fontWeight: "Bold",
    color: "#6C5B7B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const input_box = {
    backgroundColor: "rgba(192, 108, 132, 0.4)",
    borderRadius: "50px",
    textDecoration: "none",
    "& fieldset": { border: "none" },
    input: {
        color: "#6C5B7B",
        fontSize: { xs: "20px" },
    },
    width: { xs: "300px", sm: "320px", lg: "400px" },
    margin: "5px",
};

const Text = {
    fontFamily: "Quicksand",
    fontSize: { xs: "20px", sm: "30px" },
    fontWeight: "Bold",
    color: "#6C5B7B",
    marginLeft: "30px",
};

const Submit = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: { xs: "25px", md: "30px" },
    borderRadius: "40px",
    backgroundColor: "#6C5B7B",
    color: "#F8F8F8",
    width: "250px",
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
        border: "1px solid #6C5B7B",
        backgroundColor: "#F8F8F8",
        color: "#6C5B7B",
        boxShadow: 1,
    },
};

const Login = {
    color: "#6C5B7B",
    fontFamily: "Quicksand",
    fontWeight: "Bold",
    fontSize: { xs: "25px", md: "30px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    textDecorationColor: "#6C5B7B",
    marginTop: "10px",
};

const Image = {
    backgroundImage: "url(src/assets/chef_70.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 75px)",
    "@media (max-width: 900px)": {
        display: "none",
    },
};

const Content = {
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",
    width: "fit-content",
    borderRadius: "20px",
    // backgroundColor: "red",
};

const BoxContent = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    height: "calc(100vh - 75px)",
};
