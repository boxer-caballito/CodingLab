import Me from "./Me";
import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import "../styles/Info.css"

var Info = () => {
    return(
        <div>
            <Navbar/>
            <div className="">
            <Me/>
            </div>
            <div className="ContainerFooter">
            <Footer/>
            </div>
        </div>
    );
}

export default Info;