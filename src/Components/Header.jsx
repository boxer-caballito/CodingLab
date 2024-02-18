import React from "react";
import "../styles/Header.css"
import styled from "styled-components";

//componentes de styled components

const ButtonBlue = styled.button`
    background-color: #2b72fb;
    color: white;
    padding: 20px;
    border-radius: 10px;
    transition: all .5s;
    font-size: 15px;

&:hover {
    background-color: black;
    color: white;
    transform: scale(1.1);
}
`;

var Cabezera = () =>  {

    return(
        <div className="containerMain"> 
            <h1>CodingLab</h1>
            <p>Aprende programacion totalmente gratis</p>
            <img src="https://www.svgrepo.com/show/428083/lab.svg"  alt="CodingLab.png" className="Lab"/>
            <div className="Buttons">
            <ButtonBlue>Doc</ButtonBlue>
            <ButtonBlue>Curses</ButtonBlue>
            </div>
        </div>
    );
}

export default Cabezera;