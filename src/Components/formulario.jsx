import React,{useState} from "react";
import "../styles/tareaFormulario.css"
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props) {
    
    const [input,setInput] = useState('');

    const ManejarCambio = e => {
        setInput(e.target.value);
    }

    const ManejarEmvio = e => {
e.preventDefault();
        const TareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(TareaNueva);
    }

    return(
        <form className="tarea-formulario"
        onSubmit={ManejarEmvio}>
            <input 
            className="tarea-input"
            type="text"
            placeholder="Escribe una tarea"
            name="texto"
            onChange={ManejarCambio}
            />
            <button className="tarea-boton">Agregar tarea</button>
        </form>
    );
}

export default TareaFormulario;