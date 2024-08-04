import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faHashtag, faBox, faBarcode, faCheck, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import BarEmpleado from "../../../Organism/BarEmpleado/BarEmpleado";
import Footer from "../../../Templates/Footer/Footer";
import { useVenderProductoLogic } from './VenderProductoLogic';
import './VenderProductos.css';

function VenderProductos() {
    const [formData, setFormData] = useState({
        price: '',
        id: '',
        name: '',
        brand: ''
    });
    const [reference, setReference] = useState('');
    const { handleGeneratePDF, handleConfirm, validateFormData } = useVenderProductoLogic();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFormData(formData)) {
            handleConfirm(setReference, formData);
        }
    };

    return (
        <div className="page-container">
            <BarEmpleado />
            <div className="form-container">
                <h2>Vender Producto</h2>
                <form className="product-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="price">
                            <FontAwesomeIcon icon={faTag} /> Precio
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="form-group-input"
                            placeholder="Ej. 1000"
                            value={formData.price}
                            onChange={handleChange}
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id">
                            <FontAwesomeIcon icon={faHashtag} /> ID
                        </label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            className="form-group-input"
                            placeholder="Ej. 12345"
                            value={formData.id}
                            onChange={handleChange}
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">
                            <FontAwesomeIcon icon={faBox} /> Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-group-input"
                            placeholder="Nombre del producto"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand">
                            <FontAwesomeIcon icon={faBarcode} /> Marca
                        </label>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            className="form-group-input"
                            placeholder="Marca del producto"
                            value={formData.brand}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="button-venta">
                        <FontAwesomeIcon icon={faCheck} /> Confirmar Venta
                    </button>
                </form>
                {reference && (
                    <div className="reference-container">
                        <h3>Referencia de Pago</h3>
                        <p>{reference}</p>
                        <button className="button-venta" onClick={() => handleGeneratePDF(reference, formData)}>
                            <FontAwesomeIcon icon={faFilePdf} /> Descargar Recibo
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default VenderProductos;
