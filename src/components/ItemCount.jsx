import React from 'react'
import { useState, useEffect } from 'react'
import { Heading, WrapItem, Button, Flex } from '@chakra-ui/react';

const ItemCount = () => {

    let [ contador, setContador ] = useState(0);

    const sumar = () => {
            setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }

    return (
    <>
        <Heading align='center' size='md'>{contador}</Heading>
        <Flex justifyContent='center' >
            <WrapItem margin='.5rem'>
                <Button onClick={sumar} colorScheme='green'>+</Button>
            </WrapItem>
            <WrapItem margin='.5rem'>
                <Button onClick={restar} colorScheme='red'>-</Button>
            </WrapItem>
        </Flex>
    </>
)
}

export default ItemCount