import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const ProductoAgregado = () => {
  return (
    <div>
        <h2>Producto agregado</h2>   
        <Flex justifyContent='center'>
            <Link to={"/products"}><Button colorScheme='blue' m='.5rem'>Ver mas productos</Button></Link>
            <Link to={"/cart"}> <Button colorScheme='blue' m='.5rem'>Ir al carrito</Button></Link>
        </Flex>
                
    </div>
  )
}
