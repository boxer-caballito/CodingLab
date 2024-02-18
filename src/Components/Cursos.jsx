import React from "react";
import "../styles/Cursos.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Curses(props) {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div className="curse" data-aos="fade-right">
            <img src={props.image} alt="imagen-curso.png" width={75}/>
            <h2>{props.title}</h2>
            <hr/>
            <p>{props.description}</p>
        </div>
    )
}

export default Curses