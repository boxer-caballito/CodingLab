import React from "react";
import Pantalla from "./Pantalla"
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/calculator.css"
import Boton from "./Botones";
import { useState } from "react";

function Calculator () {
    const mensajeAL = "agrege una opreacion valida"
    const [input, setInput] = useState('');
  
    const borrar = () => {
      setInput("")
    }
  
    const agregarNumero = val => {
      setInput(prevInput => prevInput + val);
    };
  
    const evaluar = () => {
      try {
  
  
        setInput(input)
        const createFragment = document.createRange().createContextualFragment(`
        <div class="operacion">
        <h1>Tu operacion</h1>
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
    
    return(
        <div className="principal">
            <Navbar/>
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

