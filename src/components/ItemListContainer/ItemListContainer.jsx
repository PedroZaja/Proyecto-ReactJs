import {useState, useEffect} from 'react';
import ItemList from '../itemList/itemList.jsx';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../assets/Funciones.js';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams();
  
    useEffect(() => {
        if(category){
            consultarBDD('../json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category));
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }else{
            consultarBDD('./json/productos.json').then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
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
