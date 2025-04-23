import React from 'react'
import '../style/estilosPersonalizados.css';
import Boton from './Button'

const GaleriaIntereses = ({ intereses }) => {
  const contenedor = {
    display: 'flex',
    flexWrap: 'wrap', // ✅ Esto hace que pasen a la siguiente línea
    gap: '20px',
    padding: '20px',
    justifyContent: 'center'
  };
  const estilos={
    width: '250px',
    height: '120px',
    backgroundColor: 'purple',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px'
  }
  return (
    <div /* className="contenedorTarjeta"  */style={contenedor}>
      <div /* className="tarjetaProyecto" */ style={estilos} >
        <h2>{intereses}</h2>
        <Boton onClick={console.log(`esto es${intereses}`)}/>
      </div>
    </div>
  )
}

export default GaleriaIntereses
