import React from 'react'
import '../style/estilosPersonalizados.css';
import proy1 from '../assets/proyecto-1.jpg';

const TarjetaProyecto = () => {
    const proyecto=[
        {
            id:1,
            nombre:"",
            descripcion:"",
            img:proy1,
            botonTexto:"Explorar Proyecto",
        },
        {
            id:2,
            nombre:"",
            descripcion:"",
            img:proy2,
            botonTexto:"Explorar Proyecto",
        },
        {
            id:3,
            nombre:"",
            descripcion:"",
            botonTexto:"Explorar Proyecto",
        },
    ]

  return (
    <div className='tarjetaProyecto' style={{
            padding: '20px', 
            display: 'flex',
            flexDirection: 'column' ,
    }}>
      <h2>Nuestros Proyectos</h2>

      {/* <div className="contenedor-tarjeta">
                {
                    equipo.map((team) =>
                        <EquipoTalentoLab key={team.id} nombre={team.nombre}
                            img={team.img}
                            rol={team.rol}
                        />
                    )
                }
            </div> */}
    </div>
  )
}

export default TarjetaProyecto