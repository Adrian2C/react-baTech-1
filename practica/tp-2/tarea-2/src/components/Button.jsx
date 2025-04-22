import React from 'react';

const Boton = ({ texto, onClick }) => {
    return (
        <button onClick={onClick} style={{ marginLeft: '10px' }}>
            {texto}
        </button>
    )
}

export default Boton