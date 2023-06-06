import { useState } from "react";
import AgregarProducto from './AgregarProducto';
import ProductoCarrito from './ProductoCarrito';
import { FaShoppingCart } from "react-icons/fa";

export interface Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
}

function App() {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [nombre, setNombre] = useState<string>('');
    const [descripcion, setDescripcion] = useState<string>('');
    const [precio, setPrecio] = useState<string>(''); 
    const [totalCarrito, setTotalCarrito] = useState<number>(0); 

    const agregarProducto = () => {
        if (nombre !== '' && precio !== '') {
            const nuevoProducto: Producto = {
                nombre: nombre,
                descripcion: descripcion,
                precio: parseFloat(precio),
                cantidad: 1
            };

            const productoExistente = productos.find(p => p.nombre === nombre);
            if (productoExistente) {
                productoExistente.cantidad += 1;
                setProductos([...productos]);
            } else {
                setProductos([...productos, nuevoProducto]);
            }

            const nuevoTotal = totalCarrito + parseFloat(precio);
            setTotalCarrito(nuevoTotal);

            setNombre('');
            setDescripcion('');
            setPrecio('');
        }
    };

    const incrementarCantidad = (producto: Producto) => {
        producto.cantidad += 1;
        setProductos([...productos]);
        const nuevoTotal = totalCarrito + producto.precio;
        setTotalCarrito(nuevoTotal);
    };

    const decrementarCantidad = (producto: Producto) => {
        if (producto.cantidad > 1) {
            producto.cantidad -= 1;
            setProductos([...productos]);
            const nuevoTotal = totalCarrito - producto.precio;
            setTotalCarrito(nuevoTotal);
        }
    };

    const sacarDelCarrito = (producto: Producto) => {
        const nuevosProductos = productos.filter((p) => p !== producto);
        setProductos(nuevosProductos);

        const nuevoTotal = totalCarrito - producto.precio * producto.cantidad;
        setTotalCarrito(nuevoTotal);
    };


    return (
        <div className="container">
            <div className="row">
                <AgregarProducto
                    agregarProducto={agregarProducto}
                    nombre={nombre}
                    setNombre={setNombre}
                    descripcion={descripcion}
                    setDescripcion={setDescripcion}
                    precio={precio}
                    setPrecio={setPrecio}
                />
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2 className="card-title">Carrito</h2>
                                <div className="bg-secondary text-white p-2 rounded-top-right">
                                    ${totalCarrito.toFixed(2)} <FaShoppingCart />
                                </div>
                                
                            </div>
                            <hr />
                            <div className="list-group">
                                {productos.map((producto, index) => (
                                    <ProductoCarrito
                                        key={index}
                                        producto={producto}
                                        incrementarCantidad={incrementarCantidad}
                                        decrementarCantidad={decrementarCantidad}
                                        sacarDelCarrito={sacarDelCarrito} totalCarrito={0}                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
