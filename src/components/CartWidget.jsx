import React, { useContext } from 'react'
import carrito from '../img/icono-carrito.png'
import { Flex } from '@chakra-ui/react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
    return (
        <>
            <Flex>
                <img className="img-carrito" src={carrito} alt="" />
            </Flex>
        </>
    )
}

export default CartWidget