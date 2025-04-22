import React from 'react';
import GaleriaIntereses from '../components/GaleriaIntereses'

const Gallery = () => {
    const estilos={
        background:'red'
    }

    const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <div style={estilos}>
      <h1>Galeria</h1>
      {
        intereses.map(interes => (

            <GaleriaIntereses 
            key={intereses.id}
            />
        ))
      }
    </div>
  )
}

export default Gallery
