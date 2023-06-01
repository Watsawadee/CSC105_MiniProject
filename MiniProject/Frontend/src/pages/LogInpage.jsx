import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import Cookies from "js-cookie";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password
      });
      const { userId, token } = response.data;
      Cookies.set("token", token);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <NavBar />
      <Box sx={styles.boxContent}>
        <Box sx={styles.content}>
          <Typography sx={styles.head}>Log in To Your Account</Typography>
          <Box sx={styles.input}>
            <Typography sx={styles.text}>Email</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              placeholder="example@gmail.com"
              autoFocus
              sx={styles.inputBox}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={styles.input}>
            <Typography sx={styles.text}>Password</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              placeholder="***********************"
              type="password"
              autoComplete="current-password"
              sx={styles.inputBox}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={styles.submit}
            onClick={handleLogin}
          >
            Log in
          </Button>

          <Link href="/signup" sx={styles.signup}>
            Sign up
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default LogInPage;

// Style

const styles = {
    errorMessage: {
        color: "red",
        marginTop: "10px",
        fontSize: "14px",
    },
    boxContent: {
        backgroundImage: "url(src/assets/chef_30.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 75px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImageOpacity: "60%",
    },
    content: {
        color: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        height: "fit-content",
        width: "fit-content",
        borderRadius: "20px",
        padding: "20px",
    },
    head: {
        fontFamily: "Quicksand",
        fontSize: "60px",
        fontWeight: "bold",
        color: "#6C5B7B",
    },
    text: {
        fontFamily: "Quicksand",
        fontSize: "30px",
        fontWeight: "bold",
        color: "#6C5B7B",
    },
    inputBox: {
        backgroundColor: "rgba(192, 108, 132, 0.4)",
        borderRadius: "50px",
        textDecoration: "none",
        "& fieldset": { border: "none" },
        input: {
            color: "#6C5B7B",
            fontSize: "20px",
        },
        width: "500px",
        height: "50px",
        margin: "5px",
    },
    input: {
        marginBottom: "10px",
    },
    submit: {
        fontFamily: "Quicksand",
        fontWeight: "bold",
        fontSize: "30px",
        borderRadius: "40px",
        backgroundColor: "#6C5B7B",
        color: "#F8F8F8",
        width: "250px",
        marginTop: "15px",
        "&:hover": {
            border: "1px solid #6C5B7B",
            backgroundColor: "#F8F8F8",
            color: "#6C5B7B",
            boxShadow: 3,
        },
    },
    signup: {
        fontFamily: "Quicksand",
        fontWeight: "bold",
        fontSize: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        textDecorationColor: "#6C5B7B",
        marginTop: "10px",
        color: "#",
    },
};

// import React, { useState } from "react";
// import { Box, Typography, TextField, Button, Link } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Axios from "../AxiosInstance";
// import NavBar from "../components/NavBar";

// function LogInPage({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [token, setToken] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = {
//       email: email,
//       password: password,
//     };
//     try {
//       const response = await Axios.post("/login", data);
//       const { token } = response.data;
//       localStorage.setItem("token", token);
//       setToken(token);
//       onLogin();
//       navigate("/account"); // Navigate to the account page after successful login
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setError("Invalid email or password");
//       } else {
//         setError("An error occurred. Please try again.");
//       }
//     }
//   };

//   const handleClick = (destination) => {
//     navigate(destination);
//   };

//   return (
//     <>
//       <NavBar token={token} />
//       <Box sx={styles.boxContent}>
//         <Box sx={styles.content}>
//           <Typography sx={styles.head}>Log in To Your Account</Typography>
//           <Box sx={styles.input}>
//             <Typography sx={styles.text}>Email</Typography>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               placeholder="example@gmail.com"
//               autoFocus
//               sx={styles.inputBox}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Box>
//           <Box sx={styles.input}>
//             <Typography sx={styles.text}>Password</Typography>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               placeholder="***********************"
//               type="password"
//               autoComplete="current-password"
//               sx={styles.inputBox}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Box>

//           {error && <Typography sx={styles.errorMessage}>{error}</Typography>}

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={styles.submit}
//             onClick={handleSubmit}
//           >
//             Log in
//           </Button>

//           <Link href="/signup" sx={styles.signup}>
//             Sign up
//           </Link>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default LogInPage;

// // Style

// const styles = {
//   errorMessage: {
//     color: "red",
//     marginTop: "10px",
//     fontSize: "14px",
//   },
//   boxContent: {
//     backgroundImage: "url(src/assets/chef_30.jpg)",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     height: "calc(100vh - 75px)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundImageOpacity: "60%",
//   },
//   content: {
//     color: "#f5f5f5",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F8F8F8",
//     height: "fit-content",
//     width: "fit-content",
//     borderRadius: "20px",
//     padding: "20px",
//   },
//   head: {
//     fontFamily: "Quicksand",
//     fontSize: "60px",
//     fontWeight: "bold",
//     color: "#6C5B7B",
//   },
//   text: {
//     fontFamily: "Quicksand",
//     fontSize: "30px",
//     fontWeight: "bold",
//     color: "#6C5B7B",
//   },
//   inputBox: {
//     backgroundColor: "rgba(192, 108, 132, 0.4)",
//     borderRadius: "50px",
//     textDecoration: "none",
//     "& fieldset": { border: "none" },
//     input: {
//       color: "#6C5B7B",
//       fontSize: "20px",
//     },
//     width: "500px",
//     height: "50px",
//     margin: "5px",
//   },
//   input: {
//     marginBottom: "10px",
//   },
//   submit: {
//     fontFamily: "Quicksand",
//     fontWeight: "bold",
//     fontSize: "30px",
//     borderRadius: "40px",
//     backgroundColor: "#6C5B7B",
//     color: "#F8F8F8",
//     width: "250px",
//     marginTop: "15px",
//     "&:hover": {
//       border: "1px solid #6C5B7B",
//       backgroundColor: "#F8F8F8",
//       color: "#6C5B7B",
//       boxShadow: 3,
//     },
//   },
//   signup: {
//     fontFamily: "Quicksand",
//     fontWeight: "bold",
//     fontSize: "30px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "start",
//     textDecorationColor: "#6C5B7B",
//     marginTop: "10px",
//   },
// };
