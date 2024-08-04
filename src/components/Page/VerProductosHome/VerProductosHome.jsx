import React from "react";
import BarHome from "../../Organism/BarHome/BarHome";
import Footer from "../../Templates/Footer/Footer";
import CardProductos from "../../Molecules/CardProductos/CardProductos";
import logo from "../../../assets/logoGym.png"
import './VerProductosHome.css';

function VerProductosHome() {
    return (
        <div className="container-home">
            <BarHome src={logo}/>
            <div className="cards-container-home">
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

export default VerProductosHome;
