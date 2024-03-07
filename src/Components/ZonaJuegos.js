import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Juegos from "./Juegos";
import "../styles/ZonaJuego.css"
import { useState, useEffect } from "react";

function ZonaJuego () {

    const [adivinanzaActual, setAdivinanzaActual] = useState(0);
    const [respuestaUsuario, setRespuestaUsuario] = useState("");
    const [pistaVisible, setPistaVisible] = useState(false);

    const adivinanzas = [
        { pregunta: "¿Cuál es el país conocido como la 'tierra de los mil lagos'?", respuesta: "finlandia", pistas: ["Este país se encuentra en el norte de Europa.", "Es famoso por su naturaleza y sus saunas.", "Su capital es Helsinki.", "Es el hogar de la aurora boreal.", "Es conocido por sus altos estándares de vida."]},
        { pregunta: "¿Cuál es la ciudad de los canales?", respuesta: "venecia", pistas: ["Se encuentra en el noreste de Italia.", "Es famosa por sus canales, góndolas y puentes.", "Su principal plaza es la Plaza de San Marcos.", "Es conocida por su arte y arquitectura.", "Está construida sobre un archipiélago de 118 islas."]},
        { pregunta: "¿Dónde se encuentra el famoso monumento 'Machu Picchu'?", respuesta: "peru", pistas: ["En este país se encuentra una de las Siete Maravillas del Mundo Moderno.", "Es conocido por su patrimonio cultural y arqueológico.", "Su capital es Lima.", "Es hogar de la civilización inca.", "Es conocido por su diversidad geográfica, que incluye selvas, montañas y costas."]},
        { pregunta: "¿En qué país se encuentra la Gran Muralla China?", respuesta: "china", pistas: ["Es el país más poblado del mundo.", "La Gran Muralla China es una de las estructuras más impresionantes del planeta.", "Su capital es Pekín.", "Es conocido por su antigua civilización y su rica historia.", "Es uno de los líderes mundiales en tecnología y manufactura."]},
        { pregunta: "¿Qué ciudad es conocida como 'La ciudad que nunca duerme'?", respuesta: "nueva york", pistas: ["Está ubicada en la costa este de Estados Unidos.", "Es un importante centro cultural, financiero y de entretenimiento.", "Su símbolo más reconocido es la Estatua de la Libertad.", "Es conocida por sus rascacielos y su skyline.", "Es una de las ciudades más multiculturales del mundo."]},
        { pregunta: "¿Cuál es la capital de Japón?", respuesta: "tokio", pistas: ["Es una de las ciudades más grandes del mundo.", "Es conocida por su tecnología avanzada y su cultura tradicional.", "Es hogar del cruce peatonal más transitado del mundo, Shibuya Crossing.", "Es famosa por su deliciosa comida, que incluye sushi, ramen y tempura.", "Es sede de los Juegos Olímpicos de 2020 (pospuestos a 2021)."]},
        { pregunta: "¿En qué país se encuentra la ciudad de Petra, conocida como la Ciudad Rosa?", respuesta: "jordania", pistas: ["Está ubicada en el Medio Oriente.", "Es famosa por sus antiguas ruinas y su arquitectura esculpida en piedra.", "Fue capital del Reino Nabateo.", "Es un importante destino turístico.", "Es hogar del desierto de Wadi Rum, famoso por su paisaje lunar y sus actividades al aire libre."]},
        { pregunta: "¿Cuál es el destino turístico más visitado del mundo?", respuesta: "paris", pistas: ["Es la capital de Francia.", "Es famosa por su arte, moda, gastronomía y cultura.", "Su símbolo más reconocido es la Torre Eiffel.", "Es hogar de importantes museos como el Louvre y el Museo de Orsay.", "Es conocida como 'La Ciudad de la Luz'."]}
    ];

    const mostrarAdivinanza = () => {
        return adivinanzas[adivinanzaActual].pregunta;
    };

    const mostrarPista = () => {
        const pistas = adivinanzas[adivinanzaActual].pistas;
        const pistaIndex = Math.floor(Math.random() * pistas.length);
        return 'Pista: ' + pistas[pistaIndex];
    };

    const verificarRespuesta = () => {
        const respuestaCorrecta = adivinanzas[adivinanzaActual].respuesta.toLowerCase();
        const respuestaUsuarioLower = respuestaUsuario.toLowerCase();

        if (respuestaUsuarioLower === respuestaCorrecta) {
            alert('¡Correcto! Has adivinado la respuesta.');
            setAdivinanzaActual(adivinanzaActual + 1);
            setRespuestaUsuario("");
            setPistaVisible(false);
        } else {
            alert('Incorrecto. Sigue intentándolo.');
        }
    };


    const [showForm, setShowForm] = useState(false);
    const [resultText, setResultText] = useState('');

    const handleExpandButtonClick = () => {
        setShowForm(true);
    };

    const handleWhiteBoxClick = (e) => {
        e.stopPropagation();
    };

    const handleResultsButtonClick = () => {
        const answers = document.querySelectorAll('input[type="radio"]:checked');
        let correctAnswers = 0;
        answers.forEach((answer) => {
            if (answer.value === 'c') {
                correctAnswers++;
            }
        });
        const resultText = `Has obtenido ${correctAnswers} respuestas correctas de ${answers.length}`;
        setResultText(resultText);
    };
    

    return(
        <div>
            <Navbar/>
            <Juegos
             title={"Section con menu desplegable"}
             Creator={"Autor: Josue Ivan Vazques Flores"}
            >
                <div className="ContainerProducts">
                <select id="menu">
        <option value="#">Inicio</option>
        <option value="#">Acerca de</option>
        <optgroup label="Servicios">
            <option value="#">Diseño web</option>
            <option value="#">Desarrollo web</option>
            <option value="#">Marketing digital</option>
        </optgroup>
        <option value="#">Contacto</option>
    </select>
    </div>
            </Juegos>


            <Juegos
                title={"Juego interactivo"}
                Creator={"Autor: Vanessa Alejandra Andrade Hernandez"}
            >
                <h2 className="nombreListaMagica">Adivina la respuesta mágica</h2>
                <section id="adivinanza">
                    <div className="container">
                        <div id="adivinanza-content">
                            <p className="parrafis">{mostrarAdivinanza()}</p>
                            <input
                                type="text"
                                value={respuestaUsuario}
                                onChange={(e) => setRespuestaUsuario(e.target.value)}
                                placeholder="Escribe tu respuesta aquí"
                                className="textInput"
                            />
                            <button onClick={verificarRespuesta} className="butc">¡Adivinar!</button>
                            <button onClick={() => setPistaVisible(true)} className="butc">Pista</button>
                            {pistaVisible && <p className="parrafis">{mostrarPista()}</p>}
                            <p id="mensaje-final" className="parrafis"></p>
                        </div>
                    </div>
                </section>
            </Juegos>
            <Juegos
            title={"Wave (Ola)"}
            Creator={"Autor: MELANY ALEXA VILLALOBOS MOYA"}
            >
                <div className="BoxOLa">
                <h4 className="Olatitle">Hola soy un Titulo</h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="Ola">
  <path fill="#0099ff" fill-opacity="1" d="M0,160L34.3,144C68.6,128,137,96,206,117.3C274.3,139,343,213,411,250.7C480,288,549,288,617,272C685.7,256,754,224,823,186.7C891.4,149,960,107,1029,117.3C1097.1,128,1166,192,1234,218.7C1302.9,245,1371,235,1406,229.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg>
</div>
            </Juegos>

            <Juegos
            title={"Media"}
            Creator={"Autor: Alexa Karina García Tapia"}
            >
                <div className="ContainerMedia">
                    <div className="cajasMedia">
                        <h5>Texto 1</h5>
                    </div>

                    <div className="cajasMedia">
                    <h5>Texto 2</h5>
                        </div>
                </div>
            </Juegos>

            <Juegos 
            title={"Formulario desplazable"}
            Creator={"Autor: GABRIEL ALCANTAR CORNEJO"}
            >

               <div className="button-container">
            {!showForm ? (
                <button id="expand-button" className="expand-button" onClick={handleExpandButtonClick}>
                    <span className="title">Zona de práctica</span>
                </button>
            ) : (
                <button id="expand-button" className="expand-button expanded">
                    <span className="title">Zona de práctica</span>
                    <div id="white-box" className="white-box" onClick={handleWhiteBoxClick}>
                        <div className="topics">
                            <div className="topic">
                                <h3>Uso de la V y la B:</h3>
                                <div className="questions">
                                    <div className="question">
                                        <p>¿Cuál es la palabra correcta?</p>
                                        <input type="radio" name="q1" value="c" /> a) Bebida<br />
                                        <input type="radio" name="q1" value="a" /> b) Bevida<br />
                                        <input type="radio" name="q1" value="b" /> c) Vebida<br />
                                    </div>
                                </div>
                            </div>
                            <div className="topic">
                                <h3>Reglas de la J y la G:</h3>
                                <div className="questions">
                                    <div className="question">
                                        <p>¿Cuál es la palabra correcta?</p>
                                        <input type="radio" name="q6" value="c" /> a) Jirafa<br />
                                        <input type="radio" name="q6" value="b" /> b) Girafa<br />
                                        <input type="radio" name="q6" value="a" /> c) Hirafa<br />
                                    </div>
                                </div>
                            </div>
                            <div className="topic">
                                <h3>El uso de la S:</h3>
                                <div className="questions">
                                    <div className="question">
                                        <p>¿Cuál es la palabra correcta?</p>
                                        <input type="radio" name="q11" value="c" /> a) Sospecha<br />
                                        <input type="radio" name="q11" value="b" /> b) Sospexa<br />
                                        <input type="radio" name="q11" value="a" /> c) Sospeja<br />
                                    </div>
                                </div>
                            </div>
                            <div className="topic">
                                <h3>Uso de la doble R:</h3>
                                <div className="questions">
                                    <div className="question">
                                        <p>¿Cuál es la palabra correcta?</p>
                                        <input type="radio" name="q16" value="c" /> a) Carreta<br />
                                        <input type="radio" name="q16" value="b" /> b) Carrrota<br />
                                        <input type="radio" name="q16" value="a" /> c) Zanahorria<br />
                                    </div>
                                </div>
                            </div>
                            <div className="topic">
                                <h3>Reglas de la acentuación:</h3>
                                <div className="questions">
                                    <div className="question">
                                        <p>¿Cuál es la palabra correctamente acentuada?</p>
                                        <input type="radio" name="q21" value="c" /> a) Telefonó<br />
                                        <input type="radio" name="q21" value="b" /> b) Teléfono<br />
                                        <input type="radio" name="q21" value="a" /> c) Telefono<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button id="results-button" onClick={handleResultsButtonClick}>Ver resultados</button>
                        <div id="result-box">{resultText}</div>
                    </div>
                </button>
            )}
        </div>

            </Juegos>

            <Juegos
            title={"Efecto hover"}
            Creator={"ALAN MOISES ROMERO GONZALEZ"}
            >
                <img src="https://us.123rf.com/450wm/loft39studio/loft39studio2308/loft39studio230806046/209958512-ai-generativo-lindo-gatito-blanco-en-el-parque-en-la-naturaleza-se-encuentra-sobre-piedra-al-aire.jpg?ver=6" alt="ImagenGatitos.png" className="GatosClass"/>
            </Juegos>

            <Juegos
            title = {"Texto animado"}
            Creator = {"Autor: DANIELA ABIGAIL SALDAÑA MORENO"}
            >
                    <div class="contenidoDaniela">
        <h1 class="leftDaniela">TEXTO</h1>
                </div>
            </Juegos>

            <Juegos
            title={"Linea del tiempo"}
            Creator={"Autor: KARLA JANET CIBRIAN ANDRADE"}>
                  <section id="inicio">

    <div class="contenedor-tiempo">
        <div class="linea"></div>
            <a id="iEtiquetaid" class="Nombre">Nombre de la seccion</a>
</div>  
<br/>
<br/>
<br/>
<h1>Nombre del inicio de la pagina</h1>
<h2>subtitulo</h2>
<br/>
<section id="eEtiquetaid">
<h2>Nombre de la seccion</h2>     
</section>
</section> 
            </Juegos>
            <Footer/>
        </div>
    )
}

export default ZonaJuego