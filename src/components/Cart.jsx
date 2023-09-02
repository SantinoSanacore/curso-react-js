import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, Flex, Card, CardBody, Stack, Heading, Text, Divider } from '@chakra-ui/react'
import SendOrder from './SendOrder'

const Cart = () => {
    
  const { cart, vaciarCarrito, precioFinal ,eliminarProducto } = useContext(CartContext)

  if(cart.length === 0){
            return (
              <div className='carrito-vacio'>
              <h2>Tu carrito esta vacio...</h2>
              <p>Podes mirar todos nuestros productos en nuestra pagina principal.</p>
              <Link to={`/products`}><Button variant='solid' colorScheme='blue' > Ver productos </Button></Link>
              </div>
            )
          } 
          return(
            <>
            {cart.map((producto) => (
              <Flex justifyContent='center' key={producto.id}>
              <Card margin='1.5rem' padding='0rem 2rem' maxW='medium' border='solid 3px'  borderColor='blue'>
              <CardBody>
                <Stack>
                <Heading size='md'>{producto.name}</Heading>
                  <Text> {producto.description} </Text>
                  <Text> Cantidad : {producto.quantity} </Text>
                  <Text color='blue.600' fontSize='2xl'>Precio de cada unidad : $ {producto.price} </Text>
                  <Text color='blue.600' fontSize='2xl'>Precio total : $ { producto.price * producto.quantity } </Text>
                </Stack>
              </CardBody>
              <Button margin='1rem' onClick={()=> {eliminarProducto(producto.id)}} colorScheme='red'>Eliminar producto</Button>
              <Divider />
            </Card>
            </Flex>))
            }
            <h2>Precio total de su compra: $ {precioFinal}</h2>
            <Flex justifyContent='center' margin='3rem'>
              <Button onClick={vaciarCarrito} colorScheme='red' margin='1rem'>Vaciar carrito</Button>
              <Link to={`/formulario`}><Button  colorScheme='green' margin='1rem'>Terminar compra</Button></Link>
            </Flex>

            </>
          )

}

export default Cart