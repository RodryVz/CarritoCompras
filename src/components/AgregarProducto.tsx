
import React from "react";

interface AgregarProductoProps {
    agregarProducto: () => void;
    nombre: string;
    setNombre: (nombre: string) => void;
    descripcion: string;
    setDescripcion: (descripcion: string) => void;
    precio: string;
    setPrecio: (precio: string) => void;
}

const AgregarProducto: React.FC<AgregarProductoProps> = ({
    agregarProducto,
    nombre,
    setNombre,
    descripcion,
    setDescripcion,
    precio,
    setPrecio
}) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Agregar Producto</h2>
                    <hr />
                    <form onSubmit={(e) => { e.preventDefault(); agregarProducto(); }}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descripcion">Descripción</label>
                            <input
                                type="text"
                                className="form-control"
                                id="descripcion"
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="precio">Precio</label>
                            <input
                                type="number"
                                className="form-control"
                                id="precio"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AgregarProducto;
