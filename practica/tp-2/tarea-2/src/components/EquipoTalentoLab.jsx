import '../style/estilosPersonalizados.css';

function EquipoTalentoLab({ nombre, rol, img }) {
    const estilos = {
        
        height: '100px',
        
        color:'red',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        display: 'flex',
        /* flexDirection: 'column', */
        alignItems: 'center',
        margin: '20px'
    };
    

    return (
        <div className="tarjeta" style={estilos}>
            <h2>{nombre}</h2>
            <img src={img} alt={`imagen de ${rol}`}></img>
            <p>{rol}</p>
        </div>
    )
}

export default EquipoTalentoLab;