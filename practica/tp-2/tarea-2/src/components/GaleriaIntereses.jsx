import React from 'react'

const GaleriaIntereses = ({intereses}) => {
  return (
     <div className="contenedorTarjeta">
            <div className="tarjetaProyecto" >
                <h2 className="nameCard">{intereses}</h2>
            </div>
        </div>
  )
}

export default GaleriaIntereses
