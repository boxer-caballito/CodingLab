import './App.css';
import Navbar from './Components/Navbar';
import Cabezera from './Components/Header';
import About from './Components/About';
import Marcas from './Components/marcas';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cabezera/>
      <hr></hr>
      <About></About>
      <hr className='linea'></hr>
      <Marcas/>
      <Footer></Footer>
    </div>
  );
}

export default App;
