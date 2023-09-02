import { React, useState } from 'react'
import { Heading, WrapItem, Button, Flex } from '@chakra-ui/react';


const ItemCount = ( {onAdd} ) => {

    function ToastExample() {
        const toast = useToast()
        return (
          <Button
            onClick={() =>
              toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            }
          >
            Show Toast
          </Button>
        )
      }
    
    const [ quantity, setQuantity ] = useState(1);

  const restar = () => {
    if(quantity > 1) {
        setQuantity(quantity - 1)
    }
  }

  const sumar = () => {
    setQuantity(quantity + 1)
  }

    return (
    <>
        <Heading align='center' size='md'>{quantity}</Heading>
        <Flex justifyContent='center' >
            <WrapItem margin='.5rem'>
                <Button onClick={sumar} colorScheme='green'>+</Button>
            </WrapItem>
            <WrapItem margin='.5rem'>
                <Button onClick={restar} colorScheme='red'>-</Button>
            </WrapItem>
        </Flex>
        <Flex justifyContent='center'>
            <Button onClick={() => { onAdd(quantity) && ToastExample }  } colorScheme='blue'>Añadir al carrito</Button>
        </Flex>
        
    </>
)
}

export default ItemCount