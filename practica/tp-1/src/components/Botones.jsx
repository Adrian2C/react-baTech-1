import React from "react";

const Botones =({texto,color}) => {
    let estilox = {display:'inlineFlex',
        padding:'10px 15px',
        backgroundColor:color,
        color:'#fff',
        border:'none',
        borderRadius:'4px',
        cursor: 'pointer',
        textDecoration:'none',
        width:'100px'};

    return (
        <div className='botonx' style={estilox}>{texto}</div>
    )
}

export default Botones