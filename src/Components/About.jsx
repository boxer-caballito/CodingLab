import React from "react";
import "../styles/About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

function About() {

    useEffect(() => {
        AOS.init();
    },[])

    return(
        <div className="ContainerMain">
        <div className="containerAbout">
            <div className="Bienvenida" data-aos="fade-right">
                <h1>Bienvenido a CodingLab</h1>
                <hr />
                <p className="parrafo">En CodingLab, encontrarás una amplia variedad de recursos de aprendizaje, incluyendo cursos paso a paso, tutoriales prácticos, desafíos de codificación, proyectos reales y una comunidad activa de estudiantes y mentores. Nuestra plataforma está diseñada para que puedas aprender a tu propio ritmo y desde cualquier lugar.</p>
                <img src="https://www.svgrepo.com/show/530243/question-and-answer.svg" alt="question"  className="pregunta"/>
            </div>
            <div className="Bienvenida" data-aos="fade-right">
            <h1>¿Que es codingLab?</h1>
            <hr />
                <p className="parrafo">                CodingLab es una aplicación educativa dedicada exclusivamente a enseñar programación de manera accesible, interactiva y gratuita. Desde principiantes hasta usuarios avanzados, nuestro objetivo es proporcionar recursos de alta calidad para aprender diversos lenguajes de programación y conceptos de desarrollo de software.</p>
                <img src="https://www.svgrepo.com/show/492789/books-and-people.svg" alt="books.png" className="pregunta" />
            </div>
        </div>

        <div className="Bienvenida" data-aos="fade-right">
            <h1>¿Estas listo?</h1>
            <img src="https://www.svgrepo.com/show/449472/coding.svg" alt="" width={100} className="imageCoding"/>
        </div>
        </div>
    );
}

export default About
