//import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"; //Redirect replaced by Navigate()
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./PetKennel.css"

let page;

if (sessionStorage.getItem("kennel_user")) {
    page = <>
        <NavBar />
        <ApplicationViews/>
    </>

} else {
    page = <Navigate replace to="/login" />;
}


export const PetKennel = () => (
    <>
            {page}
            <Routes>
                {/* <Route element={page}/>  */}
                
            
                <Route path="/login" element={<Login />}/>
                    
                <Route path="/register" element={<Register />}/>
            </Routes>
    </>
);

//export default PetKennel;