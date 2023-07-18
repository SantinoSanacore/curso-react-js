import React from 'react'
import carrito from '../assets/img/icono-carrito.png'

const CartWidget = () => {
return (
    <>
    <div className='carrito'>
        <img src={carrito} alt="" />
        <p>0</p>
    </div>
    </>
)
}

export default CartWidget