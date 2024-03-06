import React from "react";
import "../styles/Juegos.css"

function Juegos (props) {
    return(
        <div className="JuegosContainer">
            <div className="ChildToJuegos">
            <h1>{props.title}</h1>
            <p className="parrafoGame">{props.Creator}</p>
            <hr className="LineaGames"/>
            <h4>Proyecto</h4>
            <img src="https://www.svgrepo.com/show/443979/gui-table-row-below.svg" alt="row" width={40} className="imageRow"/>
            <div>
                {props.children}
            </div>
            </div>
        </div>
    )
}

export default Juegos;