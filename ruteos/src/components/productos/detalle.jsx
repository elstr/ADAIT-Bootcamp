import React from "react";
import { PRODUCTOS } from "../../helpers/constants";

const Detalle = props => {
// ahroa recibimos todo en location.state.nombreQueLePuse
  console.log({ props });
  const { producto } = props.location.state;
  // console.log(props.match.params)
  // const producto = PRODUCTOS.find(p => p.id === props.match.params.id)
  return (
    <div>
      <img src={producto.thumbnail} />
      <p>{producto.title}</p>
      <p>Precio: {producto.price}</p>
    </div>
  );
};

export default Detalle;
