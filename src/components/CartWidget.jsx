import React from 'react'
import carrito from '../img/icono-carrito.png'

const CartWidget = () => {
    return (
        <>
            <div className='contenedor-carrito'>
                <img src={carrito} alt="" />
                <p>0</p>
            </div>
        </>
    )
}

export default CartWidget