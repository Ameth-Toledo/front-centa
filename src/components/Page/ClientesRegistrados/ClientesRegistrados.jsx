import React from "react";
import BarEmpleado from "../../Organism/BarEmpleado/BarEmpleado";
import Footer from "../../Templates/Footer/Footer";
import CardClientesRegistrados from "../../Molecules/CardClientesRegistrados/CardClientesRegistrados";
import './ClientesRegistrados.css';

function ClientesRegistrados() {
    return (
        <div className="clientes-registrados-container">
            <BarEmpleado />
            <div className="cards-container">
                <CardClientesRegistrados
                    nombre="Juan Pérez"
                    pago={49.99}
                    coach={true}
                    id="12345"
                />
                <CardClientesRegistrados
                    nombre="Ana Gómez"
                    pago={59.99}
                    coach={false}
                    id="67890"
                />
                <CardClientesRegistrados
                    nombre="Luis Martínez"
                    pago={69.99}
                    coach={true}
                    id="11223"
                />
                <CardClientesRegistrados
                    nombre="María López"
                    pago={79.99}
                    coach={false}
                    id="44556"
                />
            </div>
            <Footer />
        </div>
    );
}

export default ClientesRegistrados;
