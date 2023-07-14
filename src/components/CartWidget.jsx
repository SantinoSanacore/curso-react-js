import React from 'react'
import carrito from '../assets/img/icono-carrito.png'

function CartWidget() {
return (
    <>
        <img src={carrito} alt="" />
        <p>0</p>
    </>
)
}

export default CartWidget