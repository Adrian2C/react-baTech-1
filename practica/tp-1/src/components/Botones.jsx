import React from 'react'

const Botones = ({texto,color}) => {
    const estilos = {color:'white',backgroundColor:color, padding:'10px'};
    return(
        <button style={estilos}>{texto}</button>
    )
}

export default Botones