import { Link } from "react-router-dom";

const Item = ({prod}) => {
    return (
        <div className='card mb-5 cardProducto border-light container-fluid d-flex'>
                        <img src={`../img/${prod.img}`}className="card-img-top" alt="..." />
                        <div className='card-body cardBody'>
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn btn-primary'><Link to={`/producto/${prod.id}`}>Ver Producto</Link></button>
                        </div>
        </div>
    );
}

export default Item;
