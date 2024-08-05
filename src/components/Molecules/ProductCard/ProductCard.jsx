import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price, brand }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">${price}</p>
                <p className="product-brand">{brand}</p>
            </div>
            <div className="product-buttons">
                <button className="edit-button">Editar</button>
                <button className="delete-button">Eliminar</button>
            </div>
        </div>
    );
};

export default ProductCard;
