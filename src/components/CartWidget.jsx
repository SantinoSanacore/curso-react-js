import React from 'react'
import carrito from '../img/icono-carrito.png'
import { Flex } from '@chakra-ui/react'

const CartWidget = () => {
    return (
        <>
            <Flex>
                <img className="img-carrito" src={carrito} alt="" />
                <p>0</p>
            </Flex>
        </>
    )
}

export default CartWidget