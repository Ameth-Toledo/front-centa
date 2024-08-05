import React, { useState } from "react";
import BarAdministrador from "../../../Organism/BarAdministrador/BarAdministrador";
import Footer from "../../../Templates/Footer/Footer";
import { FaBox, FaTag, FaDollarSign, FaImage } from 'react-icons/fa'; // Importa los iconos
import './AgregarProductos.css';

const AgregarProductos = () => {
    const [formData, setFormData] = useState({
        name: '',
        marca: '',
        precio: '',
        image: null,
        imagePreview: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({
                ...formData,
                image: files[0],
                imagePreview: URL.createObjectURL(files[0])
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
    };

    return (
        <>
            <BarAdministrador />
            <div className="productos-form-page">
                <h2 className="productos-form-title">Agregar Producto</h2>
                <div className="productos-form-container">
                    <form onSubmit={handleSubmit} className="productos-form">
                        <div className="productos-form-group">
                            <label htmlFor="name" className="productos-form-label">
                                <FaBox className="productos-form-icon" />
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Nombre del producto"
                                className="productos-form-input"
                            />
                        </div>
                        <div className="productos-form-group">
                            <label htmlFor="marca" className="productos-form-label">
                                <FaTag className="productos-form-icon" />
                                Marca
                            </label>
                            <input
                                type="text"
                                id="marca"
                                name="marca"
                                value={formData.marca}
                                onChange={handleChange}
                                required
                                placeholder="Marca del producto"
                                className="productos-form-input"
                            />
                        </div>
                        <div className="productos-form-group">
                            <label htmlFor="precio" className="productos-form-label">
                                <FaDollarSign className="productos-form-icon" />
                                Precio
                            </label>
                            <input
                                type="number"
                                id="precio"
                                name="precio"
                                value={formData.precio}
                                onChange={handleChange}
                                required
                                placeholder="Precio del producto"
                                className="productos-form-input"
                            />
                        </div>
                        <div className="productos-form-group">
                            <label htmlFor="image" className="productos-form-label">
                                <FaImage className="productos-form-icon" />
                                Imagen
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleChange}
                                className="productos-form-file-input"
                            />
                        </div>
                        {formData.imagePreview && (
                            <div className="productos-image-preview">
                                <img src={formData.imagePreview} alt="Vista previa" className="productos-image-preview-img"/>
                            </div>
                        )}
                        <button type="submit" className="productos-submit-button">Agregar Producto</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AgregarProductos;
