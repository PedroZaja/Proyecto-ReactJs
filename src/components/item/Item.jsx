import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../Context/DarkModeContext";

const Item = ({prod}) => {
    const {DarkMode} = useDarkModeContext();
    return (
        <div className={`card mb-3 cardProducto ${DarkMode ? 'text-white bg-secondary' : 'text-black border-light'}`}>
                        <img className="card-img-top imgPc" src={prod.img} alt="..." />
                        <div className={`card-body ${DarkMode ? 'cardBody CardObs' : 'cardBody CardClaro' }`}>
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className={`btn ${DarkMode ? 'btnVerProdObs' : 'btnVerPrdoClaro'}`}><Link to={`/producto/${prod.id}`}>Ver Producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;
