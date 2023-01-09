import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../assets/FireBase';
import { useCarritoContext } from '../../Context/CarritoContext';
import { toast } from 'react-toastify';

const Checkout = () => {

    const { totalPrice, carrito, emptyCart } = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)


        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.cant) {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                } else {
                    toast.error(`El producto ${prodBDD.nombre} no posee stock`)
                    emptyCart()
                }
            })
        })

        createOrdenCompra(cliente, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            if (cliente.email === cliente.repetiremail){
            getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`¡Muchas gracias por su compra! Su orden es ${item.id}`)
                emptyCart()
                e.target.reset()
                navigate("/")
            }).catch(error => {
                toast.error("Su orden no fue generada con exito")
                console.error(error)
            })
            }else{
                toast.error("Su Email no coincide!")
            }

        })
        

    }

    return (
        <div className="container col-5" style={{ marginTop: "20px" }}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label"></label>
                    <input type="text" className="form-control" name="nombre" placeholder='Nombre y Apellido' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"></label>
                    <input type="email" className="form-control" name="email" placeholder='Email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"></label>
                    <input type="email" className="form-control" name="repetiremail" placeholder='Confirme su Email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label"></label>
                    <input type="number" className="form-control" name="dni" placeholder='DNI' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label"></label>
                    <input type="number" className="form-control" name="celular" placeholder='Numero de contacto' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label"></label>
                    <input type="text" className="form-control" name="direccion" placeholder='Direccion de envio' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label"></label>
                    <input type="text" className="form-control" name="direccion" placeholder='Codigo Postal' required />
                </div>
                <button type="submit" className="container col-3 btn btn-secondary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;
