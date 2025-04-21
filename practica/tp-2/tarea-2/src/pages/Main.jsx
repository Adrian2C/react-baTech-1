import React from 'react';
import EquipoTalentoLab from '../components/EquipoTalentoLab';

function Main() {

    const equipo = [
        {
            nombre: 'Silvia',
            rol: 'Product Owner',
            img: 'https://via.placeholder.com/100',
        },
        {
            nombre: 'Jamon',
            rol: 'Diseñador UX/UI',
            img: 'https://via.placeholder.com/200',
        },
        {
            nombre: 'pablo',
            rol: 'Desarrollador',
            img: 'https://via.placeholder.com/300',
        },
        {
            nombre: 'kike',
            rol: 'Desarrollador',
            img: 'https://via.placeholder.com/400',
        },
    ];


    return (
        <main style={{ padding: '20px', height: '720px', width: '100%', border: '1px solid red' }}>
            <h2>Contenido Principal</h2>
            <p>Esste es el ejemplo de un contenido principal</p>

            <div className="estilosPersonalizados">
                {
                    equipo.map((team) =>
                        <EquipoTalentoLab key={team.id} titulo={team.nombre}
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