import React from 'react';
import { PRODUCTOS } from '../../helpers/constants';

const Detalle = props => {
    console.log(props.match.params)
    const producto = PRODUCTOS.find(p => p.id === props.match.params.id)
    return (
        <div>
           <img src={producto.thumbnail} />
           <p>{producto.title}</p>
           <p>Precio: {producto.price}</p>
        </div>
    );
};

export default Detalle;