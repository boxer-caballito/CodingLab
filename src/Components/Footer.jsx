import React from "react";
import "../styles/footer.css"

var Footer = () => {

    const github = () => {
        window.location.href ="https://github.com/boxer-caballito"
    }

    const portfolio = () => {
        window.location.href ="https://boxer-caballito.github.io/My-portfolio-web/"
    }

    return(
        <div className="containerFooter">
            <div className="dates">
                <h3>CREATE BY EVAN</h3>
                <p>FRONT-END AND BACKEND programmer 💻</p>
                <hr />
                <div className="redes">
                <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="github" width={50}  className="imageLogos" onClick={github}/>
                <img src="https://www.svgrepo.com/show/390225/portfolio-case-business-suitcase.svg" width={50} alt="portfolio" className="imageLogos" onClick={portfolio}/>
            </div>
            </div>
            <div className="moreInfo">
                <h3>All rights reserved©</h3>
                <p>by codingLab</p>
                <hr />
                <div className="LogoCoding">
                <img src="https://www.svgrepo.com/show/428083/lab.svg" alt="log" width={50} />
                </div>
            </div>
        </div>
    )
}

export default Footer;