import React, { useEffect } from "react";
import "../styles/Me.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import Curses from './Cursos';

function Me() {

    useEffect(() => {
        AOS.init();
    },[])
    return(
        <div>
            <div className="MeContainer">
            <h1>¿Quienes somos?</h1>
            </div>
            <div className="InfoMe">
                <div className="conatainerText">        
                    <h3>CodingLab es un sitio web dedicado a enseñar programación desde cero,<br/> de manera totalmente gratuita y accesible para cualquier persona gracias a su flexibilidad.<br/> Ofrece cursos de HTML, CSS, JavaScript, entre otros.</h3></div>
            </div>
            <div className="CursesContainer">
                <div className="CursesBoxes">
            <Curses
                title="HTML"
                image="https://www.svgrepo.com/show/452228/html-5.svg"
                description="HYPERTEXT LENGUAGE MAKEUP"
                />
                </div>
                <div className="CursesBoxes">
                <Curses
                title="CSS"
                image="https://www.svgrepo.com/show/452185/css-3.svg"
                description="Cascading Style Sheets"
                />
                </div>
                <div className="CursesBoxes">
                <Curses
                title="JAVASCRIPT"
                image="https://www.svgrepo.com/show/353925/javascript.svg"
                description="LENGUAGE FOR INTERACTIVE"
                />
                </div>
            </div>
            <hr/>
            
            <div className="infoMeContainer">
            <h1>equipo de CodingLab</h1>
            </div>


            <div className="MePhotoInfo">
                <div className="Element1">
            <a href="#profile">
              <img src="https://scontent-qro1-2.xx.fbcdn.net/v/t1.6435-9/118510519_653067362279933_5317020813752245670_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeFIFUPLviSUQ7IvEIzI47CqLhDOFHHlfZQuEM4UceV9lNlvb_2pFPh5dvL1I7DSSyZmFrO7-9WVrOlwfqYcoQgE&_nc_ohc=D11-qiy7rAIAX9B3cks&_nc_ht=scontent-qro1-2.xx&oh=00_AfBoSOz221W2OjAODFyEV2twpMSTsXzzflVGrwK2uxG3rg&oe=65FE3F91" width="400" height="400" alt="user image" data-aos="fade-left" className="imageMe"/>
            </a>
            </div>
            <div className="Element2" data-aos="fade-left">
                <h3>Evan Alberto Aguilar Garcia</h3>
                <hr className="line"/>
                <p><mark>FRONT-END AND BACK-END DEVELOPPER</mark></p>
                <hr className="line"/>
                <p>Hi I'm Evan :-)</p>
                <p><small>let's program</small></p>
                <hr className="line"/>
                <p>Email: <address>evan_boxer_@outlook.com</address></p>
                <hr className="line"/>
                <p>Ciudad: <cite>Leon GTO</cite></p>
                <hr className="line"/>
                <p>Tiempo: <time> (UTC-6)</time></p>
                <img src="https://www.svgrepo.com/show/402888/waving-hand.svg" alt="hello.png" width={50} className="hello"/>
            </div>
            </div>
        </div>
    )
}

export default Me;