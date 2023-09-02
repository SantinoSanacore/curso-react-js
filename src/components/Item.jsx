import React from 'react'
import { Card, CardHeader, CardBody, Heading, Button, CardFooter, Text, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ name, desc,  id }) => {
    return (
        <>
        <Flex justifyContent='center'>
            <Card  align='center' bg='cornflowerblue' margin='1rem' boxSize='30%'>
                <CardHeader>
                    <Heading align='center' size='md'>{name}</Heading>
                </CardHeader>
                <CardFooter flexDirection='column'>
                    <Link to={`/item/${id}`}>
                        <Button colorScheme='blue' margin='2rem'>Detalles</Button>
                    </Link>
                </CardFooter>
            </Card>
        </Flex>
        </>
)
}

export default Item