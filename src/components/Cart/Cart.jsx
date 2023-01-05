import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../Context/DarkModeContext";
import { useCarritoContext } from "../../Context/CarritoContext";

const Cart = () => {
    const {DarkMode} = useDarkModeContext()
    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext()
    return (
        <>
            {carrito.length === 0 ? 
            <>
                <h1 className="carrito">Carrito vacio</h1>
                <button className= {`container d-flex  col-2 btn  btnCarrito ${DarkMode ? 'btnVerProdObs' : 'btnVerPrdoClaro'}`}><Link  className="container nav-link" to={'/'}>Volver al inicio</Link></button>
            </>
            :
            <div className="container cartContainer">
                {
                    carrito.map((prod) => 
                        <div className="container card mb-3" key={prod.id} style={{maxWidth: '540px'}}>
                            <div className="row g-0">
                                <div className="container col-md-4">
                                    <img src={prod.img} alt="Producto" className="img-fluid rounded-start" />
                                </div>
                            </div>
                            <div className="container col-md-8">
                                <div className="cardBody">
                                    <h5 className="card-title"> {`${prod.nombre}`}</h5>
                                    <p className="card-text">Cantidad: {prod.cant}</p>
                                    <p className="card-text">Precio unitario: {new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                                    <p className="card-text">Precio total: {new Intl.NumberFormat('de-De').format(prod.precio * prod.cant)}</p>
                                </div>
                                <button className={`container col-6 btn ${DarkMode ? 'btnVerProdObs' : 'btnVerPrdoClaro'}`} onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                            </div>

                        </div>      
                )}

                <div className="container">
                    <p>Resumen de la compra: ${ new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                    <button className={`btn ${DarkMode ? 'VaciarCarritoObs  text-white' : 'VaciarCarritoClaro text-black'}`} onClick={emptyCart}>Vaciar Carrito</button>
                    <button className={`btn ${DarkMode ? 'btnVerProdObs' : 'btnVerPrdoClaro'}`}><Link  className="nav-link" to={'/'}>Continuar comprando</Link></button>
                    <button className={`btn ${DarkMode ? 'btnVerProdObs' : 'btnVerPrdoClaro'}`}><Link  className="nav-link" to={'/checkout'}>Finalizar Compra</Link></button>
                </div>   
            </div>

            }
        </>
        
    );
}

export default Cart;
