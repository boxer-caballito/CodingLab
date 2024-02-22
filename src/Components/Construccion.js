import React from "react";
import Navbar from "./Navbar";
import "../styles/construccion.css"
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Construccion() {
    return(
        <div>
            <Navbar/>
            <div className="construccion">
                <figure>
                <img src="https://www.svgrepo.com/show/429490/construction-crane-lifter.svg" width={100} alt="construccion"/>
                <figcaption></figcaption>
                </figure>
                <h1>section under construction</h1>
                <button className="VolverBTN"><Link to="/">Volver al home</Link></button>
            </div>
            <div className="foots">
            <Footer/>
            </div>
        </div>
    )
}

export default Construccion