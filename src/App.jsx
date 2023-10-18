import { useState } from 'react'
import './App.css'
import logo1 from './imagenes/logo1.jpg'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="logo-contenedor">
      <img className='freelogo' src={logo1} alt="Logo de free code" />
    </div>
    <div className="contenedorPrincipal">
      
    </div>
    </>
  )
}

export default App
