import React from 'react'
import ItemCount from './ItemCount'
import { Card, Stack, Heading, Text, CardBody, CardFooter, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetail = ( {  productos  } ) => {

  const { id } = useParams()

  const productosF = productos.filter((producto) => producto.id == id )
  console.log(id)

  return (
    <>
    {productosF.map((p) => {
      return(
        
        <div className='detalle-productos' key={p.id}>
            <h2>{p.category}</h2>
            <Card maxW='sm'>
              <CardBody>
                <Stack mt='6' spacing='7'>
                <Heading size='md'>{p.name}</Heading>
                  <Text> {p.desc} </Text>
                  <Text color='blue.600' fontSize='2xl'> $ {p.price} </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'> Agregar </Button>
                </ButtonGroup>
              </CardFooter>
              <ItemCount />
            </Card>

        </div>)
    })}
    
    </>
  )
}

export default ItemDetail