import React from "react";
import { Producto } from "./App";



interface ProductoCarritoProps {
    producto: Producto;
    incrementarCantidad: (producto: Producto) => void;
    decrementarCantidad: (producto: Producto) => void;
    sacarDelCarrito: (producto: Producto) => void;
    totalCarrito: number;
}

const ProductoCarrito: React.FC<ProductoCarritoProps> = ({
    producto,
    incrementarCantidad,
    decrementarCantidad,
    sacarDelCarrito }) => {
    return (
        <div className="col mb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <hr />
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">Precio: {producto.precio.toFixed(2)}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        
                        <div className="btn-group">
                            
                            <button
                                className="btn btn-sm btn-outline-warning"
                                onClick={() => decrementarCantidad(producto)}
                            >
                                -
                            </button>
                            <span className="btn btn-sm ">
                                {producto.cantidad}
                            </span>
                            <button
                                className="btn btn-sm btn-outline-success"
                                onClick={() => incrementarCantidad(producto)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => sacarDelCarrito(producto)}
                        >
                            Sacar del carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductoCarrito;
