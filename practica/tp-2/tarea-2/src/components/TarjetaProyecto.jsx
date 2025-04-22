import React from 'react'
import '../style/estilosPersonalizados.css';
import Boton from './Button';

/*import proy1 from '../assets/proyecto-1.jpg'; */
/* import proy2 from '../assets/proyecto-1.jpg';
import proy3 from '../assets/proyecto-1.jpg'; */

function TarjetaProyecto({ titulo, descripcion }) {
    const estilos = {
        height: '300px',
        width: '100%',
        backgroundColor: 'blue'
    }
    

    const handleClick = (titulo) => {
        conole.log(`Explorando proyecto ${titulo}`)
    }

    return (
        <div style={estilos}>
            <h3>jamon</h3>
            <div className="tarjeta-equipo" >
                <h2 className="nameCard">{titulo}</h2>
                <p>{descripcion}</p>

                <Boton texto="explorar Proyecto" onClick={() => handleClick(titulo)} />
            </div>
        </div>
    )
}

export default TarjetaProyecto