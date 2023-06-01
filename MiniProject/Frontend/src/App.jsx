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



const ProtectedRoute = ({ element: Element, ...rest }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        Axios.get("/protected")
            .then((res) => {
                console.log(res);
                setIsLogin(res.data.success);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLogin(false);
                setIsLoading(false);
            });
    };

    if (isLoading) {
        return <>Loading</>;
    }
    if (isLogin) {
        return <Route {...rest} element={<Element />} />;
    } else {
        return <Navigate to="/login" replace />;
    }
};

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async () => {
        setIsLogin(true);
        navigate("/");
    };
    return (
        <>
            <Routes>
                <Route path="/login" element={<LogInpage />} />
                <Route path="/signup" element={<CreateAccountpage />} />
                <Route path="/" element={<Findpage />} />
                <Route
                    path="/detail/:recipeId"
                    element={<RecipeDetailpage />}
                />
                <Route path="/recipe" element={<Recipepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/account" element={<Accountpage />} />
                <Route path="/create" element={<Createpage />} />
                <Route path="/edit" element={<Editpage />} />
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>

            {/* {isLogin ? (
                <Routes>
                    <Route exect path="/" element={<Findpage />} />
                    <Route
                        path="/detail/:recipeId"
                        element={<RecipeDetailpage />}
                    />
                    <Route path="/recipe" element={<Recipepage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/account" element={<Accountpage />} />
                    <Route path="/create" element={<Createpage />} />
                    <Route path="/edit" element={<Editpage />} />
                </Routes>
            ) : (
                <Routes>
                    <Route
                        exect
                        path="/login"
                        element={
                            <LogInpage onLogin={handleLogin} />
                        }
                    />
                    <Route path="/signup" element={<CreateAccountpage />} />
                    <Route
                        path="/*"
                        element={<Navigate to={"/login"} replace />}
                    />
                </Routes>
            )} */}
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
