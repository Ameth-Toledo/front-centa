import React from "react";
import BarAdministrador from "../../../Organism/BarAdministrador/BarAdministrador";
import Footer from "../../../Templates/Footer/Footer";
import CardAdministrador from "../../../Organism/CardAdministrador/CardAdministrador";
import empleado from "../../../../assets/iconos/empleado.png";
import './Administrador.css';

function HomeAdministrador() {
    return (
        <div className="home-administrador-container">
            <BarAdministrador />
            <div className="cards-container">
                <CardAdministrador
                    imageSrc={empleado}
                    title={"Empleados"}
                    description={"Aquí podrás ver los empleados en tu gimnasio."}
                    buttonText={"Ver empleados"}
                />
                <CardAdministrador
                    imageSrc={empleado}
                    title={"Agregar Productos"}
                    description={"Aquí podrás agregar productos a tu gimnasio."}
                    buttonText={"Agregar productos"}
                />
                <CardAdministrador
                    imageSrc={empleado}
                    title={"Planes"}
                    description={"Aquí podrás ver los planes disponibles."}
                    buttonText={"Ver planes"}
                />
                <CardAdministrador
                    imageSrc={empleado}
                    title={"Agregar Empleados"}
                    description={"Aquí podrás agregar nuevos empleados a tu gimnasio."}
                    buttonText={"Agregar empleados"}
                />
            </div>
            <Footer />
        </div>
    );
}

export default HomeAdministrador;
