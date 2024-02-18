import React, { useState, useEffect } from 'react';
import '../styles/marcas.css';
import Curses from './Cursos';

var Marcas = () => {
    return(
        <div  className='Marcas-Container'>
            <div>
            <h1>Cursos actualmente disponible</h1>
            </div>

            <div className='curses-main'>
                <Curses
                title="HTML"
                image="https://www.svgrepo.com/show/452228/html-5.svg"
                description="HYPERTEXT LENGUAGE MAKEUP"
                />

                <Curses
                title="CSS"
                image="https://www.svgrepo.com/show/452185/css-3.svg"
                description="Cascading Style Sheets"
                />

                
                <Curses
                title="JAVASCRIPT"
                image="https://www.svgrepo.com/show/353925/javascript.svg"
                description="LENGUAGE FOR INTERACTIVE"
                />
                
            </div>

            <div className='curses-main'>
                                
            <Curses
                title="REACT"
                image="https://www.svgrepo.com/show/452092/react.svg"
                description="FRAMEWORK THE JAVASCRIPT"
                />

                <Curses
                title="GIT"
                image="https://www.svgrepo.com/show/452210/git.svg"
                description="
                version controller git"
                />

                <Curses
                title="NODE JS"
                image="https://www.svgrepo.com/show/452075/node-js.svg"
                description="LENGUAGE FOR BACKEND"
                />

            </div>
        </div>
    )
}

export default Marcas
