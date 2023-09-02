import React, { useContext, useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import { Card, Stack, Heading, Text, CardBody, Divider, Button, Flex} from '@chakra-ui/react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { ProductoAgregado } from './ProductoAgregado'

const ItemDetail = ( {  productos } ) => {
  

  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem }= useContext(CartContext) 

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const { id, name, description, price} = productos

    const item = {
      id, name, description, price
    }

    addItem(item, quantity)
  }


  return (
    <>
    <div className='detalle-productos' key={productos.id}>
    <h2>{productos.name}</h2>
            <Card maxW='sm'>
              <CardBody>
                <Stack mt='6' spacing='7'>
                <Heading size='md'>{productos.name}</Heading>
                  <Text> {productos.desc} </Text>
                  <Text color='blue.600' fontSize='2xl'> $ {productos.price} </Text>
                </Stack>
              </CardBody>
              <Divider />
              <div>
              {
                quantityAdded > 0 ? (<ProductoAgregado/>) : (<ItemCount onAdd={handleOnAdd} />)
              }
            </div>
            </Card>
    </div>  
    </>
  )
}

export default ItemDetail