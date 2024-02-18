import Tarea from "./tarea";
import ListaDeTareas from "./listaDeTareas"
import Navbar from "./Navbar";
import TareaFormulario from "./formulario"
import Footer from "./Footer"
import "../styles/Home.css"

function Home () {
    return(
      <div className="con">
            <Navbar/>
            <div className="containerTaks">
        <div className='tarea-lista-principal'>
          <h1 align="center" className="h1-text">Mis tareas</h1>
          <ListaDeTareas/>
        </div>
        </div>
        </div>
    )
}

export default Home;