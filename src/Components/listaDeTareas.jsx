import React, {useState} from "react";
import TareaFormulario from "./formulario";
import "../styles/ListaDeTareas.css"
import Tarea from './tarea';

function ListaDeTareas () {
    
const [tareas,setTareas] = useState([]);

const agregarTarea = tarea => {
    if(tarea.texto.trim()) {
        tarea.texto = tarea.texto.trim();
        const tareasActulizadas = [tarea, ...tareas];
        setTareas(tareasActulizadas);
    }
}

const eliminarTarea = id => {
    const TareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(TareasActualizadas)
}

const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea =>{
        if( tarea.id === id) {
            tarea.completada = !tarea.completada
        }
        return tarea;
    });
    setTareas(tareasActualizadas)
}
    
    return(
        <>
        <TareaFormulario 
        onSubmit={agregarTarea}
        />
        <div className="tareas-lista-contenedor">
            {
                tareas.map((tarea) =>
                <Tarea 
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
                />
                )
            }
        </div>
        </>
    );
}

export default ListaDeTareas;