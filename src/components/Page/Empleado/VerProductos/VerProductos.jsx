import React from "react";
import BarEmpleado from "../../../Organism/BarEmpleado/BarEmpleado";
import Footer from "../../../Templates/Footer/Footer";
import CardProductos from "../../../Molecules/CardProductos/CardProductos";
import './VerProductos.css';

function VerProductos() {
    return (
        <div className="container">
            <BarEmpleado/>
            <div className="cards-container">
                <CardProductos/>                
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>

            </div>
            <Footer/>
        </div>
    )
}

export default VerProductos;
