//se crea una variable que se asigne el valor del parametro de cada producto
import React from "react";

const ListaProductos = ({ productos }) => {
    return (
        <ol>
            {
                productos.map((producto, index) => (
                    <li key={index}>
                        {producto}
                    </li>
                ))}
        </ol>
    );
};

export default ListaProductos;