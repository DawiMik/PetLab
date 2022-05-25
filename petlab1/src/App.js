import React from 'react';
import "./scss/main.scss"
import Home from "./components/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App