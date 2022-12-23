import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../assets/Funciones.js';
import { cargarBDD, getProducto, getProductos, updateProducto, deleteProducto } from '../../assets/FireBase.js';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams();
  
    useEffect(() => {
        if(category){
            getProductos().then(products => {
                const productsList = products.filter(prod => prod.stock > 0).filter
            })
        }
        
    },[category]);
    
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
       
    );
}

export default ItemListContainer;
