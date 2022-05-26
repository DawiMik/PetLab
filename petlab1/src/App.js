import React from 'react';
import "./scss/main.scss"
import Home from "./components/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Foundations from "./components/Home/Entities/Foundations/foundations";
import Organizations from "./components/Home/Entities/Organizations/organizations";
import Locals from "./components/Home/Entities/LocalHelp/locals";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/foundation" element={<Foundations/>}/>
                <Route exact path="/organizations" element={<Organizations/>}/>
                <Route exact path="/local_help" element={<Locals/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App