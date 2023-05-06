// import { useState } from 'react'
import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import Recipepage from "./pages/Recipepage";
import Aboutpage from "./pages/Aboutpage";
import Accountpage from "./pages/Accountpage";
import Findpage from "./pages/Findpage";
import CreateAccountpage from "./pages/CreateAccountpage";
import LogInpage from "./pages/LogInpage";
import Createpage from "./pages/Createpage";
import Editpage from "./pages/Editpage";
import { Routes, Route } from "react-router-dom";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Routes>
                <Route exect path="/" element={<Findpage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/recipe" element={<Recipepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/login" element={<LogInpage />} />
                <Route path="/signup" element={<CreateAccountpage />} />
                <Route path="/account" element={<Accountpage />} />
                <Route path="/create" element={<Createpage />} />
                <Route path="/edit" element={<Editpage />} />
            </Routes>
        </>
    );
}
export default App;
