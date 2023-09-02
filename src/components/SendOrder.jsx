import React, { useState } from 'react'
import { collection, addDoc, getFirestore} from 'firebase/firestore'
import { Input, Flex, Button } from '@chakra-ui/react'

const SendOrder = () => {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [orderId, setOrderId] = useState(null)
    const db = getFirestore()
    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({id})=> 
        setOrderId(id))
    }

    const order = { name, email}

    const ordersCollection = collection(db, "orden")


  return (
    <>
        <Flex flexDirection='column' alignItems='center'>
            <h1 margin='5rem'>Recibir orden de compra</h1>
            <form onSubmit={handleSubmit}>
            
                <Input margin='2rem' borderColor='blue' type="text" width='20rem' placeholder='Nombre y apellido' onChange={(e)=> setName(e.target.value)} required/>

                <Input margin='2rem' borderColor='blue' type="text" width='20rem' placeholder='Email' onChange={(e)=> setEmail(e.target.value)} required/>

                <Button  type="submit" width='10rem' colorScheme='green' margin='1rem'>Enviar</Button>
            
            </form>
            <h3>Tu orden de compra es : {orderId}</h3>
            <p>GUARDALA, PARA QUE PUEDAS SEGUIR EL ENVIO DE TU COMPRA</p>
            <p>Gracias por elegirnos!</p>
        </Flex>
    </>
  )
}

export default SendOrder