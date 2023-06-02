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