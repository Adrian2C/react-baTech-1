import React from "react";


function Tarjeta({ titulo, img, descripcion, botonTexto, botonColor }) {

  const estilo = {
    width: '300px',
    height: '100px',
    backgroundColor: 'white',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px'
  };

  const estiloBoton = {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: botonColor || '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none'
  };


  return (
    <div className='promos' style={estilo}>
      <h2>{titulo}</h2>
      <img src={img} alt={`Imagen de ${titulo}`} />
        <p>{descripcion}</p>
	   <a href={enlace}style={estiloBoton}>{botonTexto}</a>
      </div>
    );
  }
  export default Tarjeta;
