import React from "react";
import { Routes, Route , Link } from "react-router-dom";
import SignUp from "../../Pages/Auth/Sign Up/Sign Up";
import Home from "../../Pages/Home/Home";
import '../../App.css';
import Login from '../../Pages/Auth/Login/Login.jsx';

const RoutesComponent = () =>{

    return (
        <div className="Routes-Wrap">
            <Routes >
                <Route exact path="/" element = {<Home/> } />
                <Route exact path="/SignUp" element = { <SignUp/> } />
                <Route exact path="/Login" element = { <Login/> } />
            </Routes>
        </div>
    )
}

export default RoutesComponent;