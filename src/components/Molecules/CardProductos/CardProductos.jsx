import React from "react";
import "./CardProductos.css";

const CardProductos = ({ imagen, nombre, marca, precio }) => {
  return (
    <div className="card-productos">
      <img src={imagen} alt={nombre} className="producto-imagen" />
      <div className="producto-detalle">
        <h3 className="producto-nombre">{nombre}</h3>
        <p className="producto-marca">Marca: {marca}</p>
        <p className="producto-precio">Precio: ${precio}</p>
      </div>
    </div>
  );
};

export default CardProductos;
