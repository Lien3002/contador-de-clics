import { useState } from "react";
import "./App.css";
import logo1 from "./imagenes/logo1.jpg";
import  Boton  from "./componetes/boton.jsx";
import './hojas-de-estilo/Botones.css';
import Contador from "./componetes/contador.jsx";
import "./hojas-de-estilo/contador.css"

function App() {
  const [count, setCount] = useState(0);
  const manejarClic = () => {
    console.log("clic");
  };
  const reiniciarClic = () => {
    console.log("onClic");
  };
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="freelogo" src={logo1} alt="Logo de free code" />
      </div>
      <div className="contenedorPrincipal">
        <Contador numClics={5}></Contador>
        <Boton
          texto='Clic'
          esBotonClic={true} 
          manejarClic={manejarClic}>
        </Boton>
        <Boton
          texto='Reiniciar' 
          esBotonClic={false} 
          manejarClic={reiniciarClic}>
        </Boton>
      </div>
    </div>
  );
}

export default App;
