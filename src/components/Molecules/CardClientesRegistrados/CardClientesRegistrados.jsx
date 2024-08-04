import React from "react";
import './CardClientesRegistrados.css';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const CardClientesRegistrados = ({ nombre, pago = 0, coach, id }) => {
    const payment = typeof pago === 'number' ? pago : 0;

    return (
        <div className="card-clientes">
            <div className="card-clientes-header">
                <h3 className="card-clientes-title">{nombre}</h3>
            </div>
            <div className="card-clientes-body">
                <p className="card-clientes-payment">Pago: ${payment.toFixed(2)}</p>
                <div className="card-clientes-coach">
                    <span>Coach: </span>
                    {coach ? <FaCheckCircle className="icon-yes" /> : <FaTimesCircle className="icon-no" />}
                </div>
                <p className="card-clientes-id">ID: {id}</p>
            </div>
        </div>
    );
};

export default CardClientesRegistrados;
