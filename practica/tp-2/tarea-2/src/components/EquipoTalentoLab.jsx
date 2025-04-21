import React from 'react';
import '../style/estilosPersonalizados.css';

function EquipoTalentoLab({ nombre, rol, img }) {
    const estilos = {
        
         height: '250px',
        width: '400px',
        color: 'black',
        borderRadius: '5px',
        alignItems: 'center',
    };
    

    return (
        <div className="tarjeta-equipo" style={estilos}>
            <h2 className="nameCard">{nombre}</h2>
            <p>{rol}</p>
            <img src={img} alt={`imagen de ${rol}`}></img>
            
        </div>
    )
}

export default EquipoTalentoLab;