import React from "react";
import Botones from "./Botones";

function Tarjeta({titulo,descripcion})
{
    const estilos = {
        width:'300px',
        height:'200px',
        backgroundColor:'gray',
        padding:'20px',
        border:'1px solid #ccc',
        borderRadius:'5px',
        display:'flex',
        flexDirection:'column',
        alingItems:'center',
        margin:'20px'
    };
    /* const estiloBoton={
        marginTop:'10px',
        padding:'10px 15px',
        backgroundColor:botonColor,
        color:'#fff',
        border:'none',
        borderRadius:'4px',
        cursor: 'pointer',
        textDecoration:'none',
        width:'100px'
    }; */

    return(
        <div className='promos' style={estilos}>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <Botones color="green"texto="hola"/>
            <Botones color="green"texto="hola"/>
        </div>
    )
}
export default Tarjeta