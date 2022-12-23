import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../Context/DarkModeContext";

const Item = ({prod}) => {
    const {DarkMode} = useDarkModeContext();
    return (
        <div className={`card mb-3 cardProducto ${DarkMode ? 'text-white bg-secondary' : 'border-light'}`}>
                        <img className="card-img-top imgPc" src={`../img/${prod.img}`} alt="..." />
                        <div className={`card-body ${DarkMode ? 'cardBodyDark' : 'cardBody' }`}>
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn btn-primary'><Link to={`/producto/${prod.id}`}>Ver Producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;
