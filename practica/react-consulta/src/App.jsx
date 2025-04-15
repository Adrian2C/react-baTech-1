import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './EstilosGenerales.css'


/* se crea  un h1 y un p con el texto a usasr...esto se envuelve en un div-> y se tiene que mostrar con el return
esto se mostrara mediante la funcino Saludo() que se ejecutara, cuando en function App(), se ejecute la compilacion de todo lo hecho*/
function Saludo() {
  return (
    <div>
      <h1>Hola y bienvenido a la clase de consulta</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, quidem ad. Est fugiat ex necessitatibus, saepe, reiciendis totam quae tempora quos in delectus voluptates? Odio nisi ullam ipsa! Aspernatur, itaque!</p>
    </div>
  )
}

/* aqui se crearon los botones que se iban a usar */
function Botones() {
  const estilos = {color:'red'}

  return (
    
    <button style={estilos}>Botón de modo prueba</button>
    
  )
}

/* aqui se compilo todo lo que se iba a usar */
function App() {
 
  return (

    <div>
      <Saludo />
      <Botones />
      <Saludo />
      <Botones />
    </div>

  )
}

/* por ultimo se exporta todo el proyecto para ser levantado en main*/
export default App
