import React from "react";
import Pantalla from "./Pantalla"
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/calculator.css"
import Boton from "./Botones";
import { useState } from "react";
import { evaluate, log } from 'mathjs';

let arregloElementos = [0]; 

function Calculator () {
    const mensajeAL = "agrege una opreacion valida"
    const [input, setInput] = useState("");
  
    const borrar = () => {
      setInput(""); 
    };
  
  
    const agregarNumero = val => {
      setInput(prevInput => prevInput + val);
    };

  
    const evaluar = () => {
      try {

        const ultimoElemento = arregloElementos[arregloElementos.length - 1];
        const aumento = ultimoElemento + 1;
        arregloElementos.push(aumento);

        const xS = arregloElementos[arregloElementos.length - 1];

        setInput(evaluate(input));
        const createFragment = document.createRange().createContextualFragment(`
        <div class="operacion">
        <h1>operacion: ${xS}</h1>
        <hr/>
        <h3>${input}</h3>
        </div>
        `)
  
        const main = document.querySelector("main")
  
        main.appendChild(createFragment);
      } catch (error) {
        alert(mensajeAL)
        setInput("")
      }
    }

    const changeDark = () => {
      const contenedorCalculadora = document.querySelectorAll(".Calculator");

      const BotonLight = document.querySelectorAll(".buttonlight");

      const BotonDark = document.querySelectorAll(".buttondark");

      const Botones = document.querySelectorAll(".boton-contenedor");

      const encabezadoH2 = document.querySelectorAll("h2")

      const EsOperador = document.querySelectorAll(".operador");
      

      //-------------------------------------------------------------------

      contenedorCalculadora.forEach((element) => {
        element.style.backgroundColor = "rgb(163, 163, 163)"
      })

      BotonLight.forEach((element) => {
      element.style.border = "solid 5px #000"
      })

      BotonDark.forEach((element) => {
        element.style.border = "solid 5px #ff8be6"
      })

      Botones.forEach((element) => {
        element.style.color = "#fff"
        element.style.border = "solid 2px #fff"
      })

      encabezadoH2.forEach((element) => {
        element.style.color = "#fff"
      })

      EsOperador.forEach((element) => {
        element.style.backgroundColor = "#000"
      })
    }

    const changeLight = () => {
      const contenedorCalculadora = document.querySelectorAll(".Calculator");

      const BotonLight = document.querySelectorAll(".buttonlight");

      const BotonDark = document.querySelectorAll(".buttondark");

      const Botones = document.querySelectorAll(".boton-contenedor");

      const encabezadoH2 = document.querySelectorAll("h2");

      const EsOperador = document.querySelectorAll(".operador");

      //--------------------------------------------------------------

      contenedorCalculadora.forEach((element) => {
        element.style.backgroundColor = "ghostwhite"
      })

      BotonLight.forEach((element) => {
      element.style.border = "solid 5px #ff8be6"
      })

      BotonDark.forEach((element) => {
        element.style.border = "solid 5px #000"
    })

    Botones.forEach((element) => {
      element.style.color = "#000"
      element.style.border = "solid 2px rgb(247, 216, 216)"
    })

    encabezadoH2.forEach((element) => {
      element.style.color = "#000"
    })

    EsOperador.forEach((element) => {
      element.style.backgroundColor = "#ffd5d5"
    })

    }

  

    
    
    return(
        <div className="principal">
            <Navbar/>
            <div className="BottonsChange">
            <button className="buttonlight" onClick={changeLight}><img src="https://www.svgrepo.com/show/513495/light-bulb-1.svg" width={50}/></button>
            <button className="buttondark" onClick={changeDark}><img src="https://www.svgrepo.com/show/381213/dark-mode-night-moon.svg" width={50}/></button>
            </div>
            <div className="CalculatorMain">
            <div className='Calculator'>
        <Pantalla
        input={input}
        manejarClick={borrar}
        />
        <div className='fila'>
          <Boton manejarClic={agregarNumero}>1</Boton>
          <Boton manejarClic={agregarNumero}>2</Boton>
          <Boton manejarClic={agregarNumero}>3</Boton>
          <Boton manejarClic={agregarNumero}>+</Boton>
          <Boton manejarClic={agregarNumero}>)</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarNumero}>4</Boton>
          <Boton manejarClic={agregarNumero}>5</Boton>
          <Boton manejarClic={agregarNumero}>6</Boton>
          <Boton manejarClic={agregarNumero}>-</Boton>
          <Boton manejarClic={agregarNumero}>sin(</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarNumero}>7</Boton>
          <Boton manejarClic={agregarNumero}>8</Boton>
          <Boton manejarClic={agregarNumero}>9</Boton>
          <Boton manejarClic={agregarNumero}>*</Boton>
          <Boton manejarClic={agregarNumero}>tan(</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={evaluar}>=</Boton>
          <Boton manejarClic={agregarNumero}>0</Boton>
          <Boton manejarClic={agregarNumero}>.</Boton>
          <Boton manejarClic={agregarNumero}>/</Boton>
          <Boton manejarClic={agregarNumero}>)</Boton>
        </div>
      </div>
      </div>
      <main className="Stup">
      </main>
      <Footer/>
        </div>
    )
}

export default Calculator

