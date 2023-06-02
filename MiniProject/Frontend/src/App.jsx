// import { useState } from 'react'
import "./App.css";
import React, { useEffect, useState } from "react";
import RecipeDetailpage from "./pages/RecipeDetailpage";
import Recipepage from "./pages/Recipepage";
import Aboutpage from "./pages/Aboutpage";
import Accountpage from "./pages/Accountpage";
import Findpage from "./pages/Findpage";
import CreateAccountpage from "./pages/CreateAccountpage";
import LogInpage from "./pages/LogInpage";
import Createpage from "./pages/Createpage";
import Editpage from "./pages/Editpage";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Axios from "./AxiosInstance";

// const ProtectedRoute = ({ element: Element, ...rest }) => {
    // const [isLogin, setIsLogin] = useState(localStorage.getItem("token"));
    // const [userLogin, setUserLogin] = useState(false);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     Axios.get("/protected")
    //         .then((res) => {
    //             console.log(res);
    //             setIsLogin(res.data.success);
    //             setIsLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setIsLogin(false);
    //             setIsLoading(false);
    //         });
    // };

    // if (isLoading) {
    //     return <>Loading</>;
    // }
    // if (isLogin) {
    //     return <Route {...rest} element={<Element />} />;
    // } else {
    //     return <Navigate to="/login" replace />;
    // }
// };

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userLogin, setUserLogin] = useState(false);

    function checkAuthentication() {
        const token = localStorage.getItem("token");
        if (token) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
        setIsLoading(false);
      }
    
      useEffect(() => {
        checkAuthentication();
        setIsLoading(false); // Set isLoading to false after checking authentication
    }, []);
    
      function onSignOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        checkAuthentication();
      }
      function onSignIn() {
        checkAuthentication();
      }

    // const navigate = useNavigate();
    // const handleLogin = async () => {
    //     setIsLogin(true);
    //     navigate("/");
    // };

    if (isLoading) {
        return <> Loading </>
    }
    return (
        <>
            {/* <Routes>
                <Route path="/login" element={<LogInpage />} />
                <Route path="/signup" element={<CreateAccountpage />} />
                <Route path="/" element={<Findpage />} />
                <Route
                    path="/recipes/:recipeId"
                    element={<RecipeDetailpage />}
                />
                <Route path="/recipe" element={<Recipepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/account" element={<Accountpage />} />
                <Route path="/create" element={<Createpage />} />
                <Route path="/edit" element={<Editpage />} />
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes> */}

            {isAuthenticated ? (
                <Routes>
                    <Route exect path="/" element={<Findpage />} />
                    <Route
                        path="/detail/:recipeId"
                        element={<RecipeDetailpage />}
                    />
                    <Route path="/recipe" element={<Recipepage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/account" element={<Accountpage onSignOut={onSignOut} />} />
                    <Route path="/create" element={<Createpage />} />
                    <Route path="/edit/:recipeId" element={<Editpage />} />
                    
                    {/* <Route path="/login" element={<Navigate to="/account"> </Navigate>} /> */}

                    {/* <Route path="/*" element={<Navigate to="/account"> </Navigate>} /> */}
                </Routes>
            ) : (
                <Routes>
                    <Route
                        exect
                        path="/login"
                        element={
                            <LogInpage userLogin={userLogin} setUserLogin={setUserLogin} onSignIn={onSignIn} />
                        }
                    />
                    <Route path="/signup" element={<CreateAccountpage />} />
                    <Route
                        path="/*"
                        element={<Navigate to={"/login"} replace />}
                    />
                </Routes>
            )}
        </>
    );
}
export default App;

// // import { useState } from 'react'
// import "./App.css";
// import React, { useEffect, useState } from "react";
// import RecipeDetailpage from "./pages/RecipeDetailpage";
// import Recipepage from "./pages/Recipepage";
// import Aboutpage from "./pages/Aboutpage";
// import Accountpage from "./pages/Accountpage";
// import Findpage from "./pages/Findpage";
// import CreateAccountpage from "./pages/CreateAccountpage";
// import LogInpage from "./pages/LogInpage";
// import Createpage from "./pages/Createpage";
// import Editpage from "./pages/Editpage";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import Axios from "./AxiosInstance";



// const ProtectedRoute = ({ element: Element, ...rest }) => {
//     const [isLogin, setIsLogin] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         Axios.get("/protected")
//             .then((res) => {
//                 console.log(res);
//                 setIsLogin(res.data.success);
//                 setIsLoading(false);
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setIsLogin(false);
//                 setIsLoading(false);
//             });
//     };

//     if (isLoading) {
//         return <>Loading</>;
//     }
//     if (isLogin) {
//         return <Route {...rest} element={<Element />} />;
//     } else {
//         return <Navigate to="/login" replace />;
//     }
// };

// function App() {
//     const [isLogin, setIsLogin] = useState(false);
//     const navigate = useNavigate();
//     const handleLogin = async () => {
//         setIsLogin(true);
//         navigate("/");
//     };
//     return (
//         <>
//       <Routes>
//         <Route path="/login" element={<LogInpage />} />
//         <Route path="/signup" element={<CreateAccountpage />} />
//         <Route path="/" element={<Findpage />} />
//         <Route
//           path="/detail/:recipeId"
//           element={<RecipeDetailpage />}
//         />
//         <Route path="/recipe" element={<Recipepage />} />
//         <Route path="/about" element={<Aboutpage />} />
//         <Route path="/account" element={<Accountpage />} />
//         <Route path="/create" element={<Createpage />} />
//         <Route path="/edit" element={<Editpage />} />
//         <Route path="/*" element={<Navigate to="/login" replace />} />
//       </Routes>

//             {/* {isLogin ? (
//                 <Routes>
//                     <Route exect path="/" element={<Findpage />} />
//                     <Route
//                         path="/detail/:recipeId"
//                         element={<RecipeDetailpage />}
//                     />
//                     <Route path="/recipe" element={<Recipepage />} />
//                     <Route path="/about" element={<Aboutpage />} />
//                     <Route path="/account" element={<Accountpage />} />
//                     <Route path="/create" element={<Createpage />} />
//                     <Route path="/edit" element={<Editpage />} />
//                 </Routes>
//             ) : (
//                 <Routes>
//                     <Route
//                         exect
//                         path="/login"
//                         element={
//                             <LogInpage onLogin={handleLogin} />
//                         }
//                     />
//                     <Route path="/signup" element={<CreateAccountpage />} />
//                     <Route
//                         path="/*"
//                         element={<Navigate to={"/login"} replace />}
//                     />
//                 </Routes>
//             )} */}
//         </>
//     );
// }
// export default App;
