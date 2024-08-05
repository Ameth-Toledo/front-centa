import React from "react";
import BarAdministrador from "../../../Organism/BarAdministrador/BarAdministrador";
import Footer from "../../../Templates/Footer/Footer";
import ProductCard from "../../../Molecules/ProductCard/ProductCard";
import './CrudProductos.css'

const CrudProductos = () => {
    const product = {
        image: "https://via.placeholder.com/150",
        name: "Producto Ejemplo",
        price: "29.99",
        brand: "Marca Ejemplo"
    };

    return (
        <div className="page-container">
            <BarAdministrador />
            <div className="main-content">
                <div className="product-card-container">
                    <ProductCard
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        brand={product.brand}
                    />
                    <ProductCard
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        brand={product.brand}
                    />
                    <ProductCard
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        brand={product.brand}
                    />
                    <ProductCard
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        brand={product.brand}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CrudProductos;
