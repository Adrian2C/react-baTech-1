import React from 'react';
import GaleriaIntereses from '../components/GaleriaIntereses'

const Gallery = () => {
  const estilos = {
    background: '#948274'
  }

  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <div style={estilos}>
      <h1>Galeria</h1>
      <div className="contenedor-tarjeta">
        {
          intereses.map((intereses) =>
            <GaleriaIntereses /* key={intereses} */ intereses={intereses}

            />
          )
        }
      </div>
    </div>
  )
}

export default Gallery
