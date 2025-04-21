import React from 'react';
import EquipoTalentoLab from '../components/EquipoTalentoLab';
import img1 from '../assets/avatar-1.jpg';
import img2 from '../assets/avatar-2.png';
import img3 from '../assets/avatar-3.png';
import img4 from '../assets/avatar-4.jpg';

function Main() {

    const equipo = [
        {
            id:1,
            nombre: 'Silvia',
            rol: 'Product Owner',
            img: img1
        },
        {
            id:2,
            nombre: 'Jamon',
            rol: 'Diseñador UX/UI',
            img: img2
        },
        {
            id:3,
            nombre: 'pablo',
            rol: 'Desarrollador',
            img: img3
        },
        {
            id:4,
            nombre: 'kike',
            rol: 'Desarrollador',
            img: img4
        },
    ];


    return (
        <main style={{ 
            padding: '20px', 
            /* height: '720px',  */
            width: '1024px', 
            border: '1px dashed red',
            backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'column' ,
        }}>
            <h2>Nuestro Equipo</h2>
            <div className="contenedor-tarjeta">
                {
                    equipo.map((team) =>
                        <EquipoTalentoLab key={team.id} nombre={team.nombre}
                            img={team.img}
                            rol={team.rol}
                        />
                    )
                }
            </div>
        </main>
            
    )
}

export default Main;