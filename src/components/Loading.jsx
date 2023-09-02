import React from 'react'
import { CircularProgress } from '@chakra-ui/react'

const Loading = () => {
  return (
    <div>
        <h2>Cargando productos...</h2>
        <CircularProgress isIndeterminate color='blue.300' display='flex' justifyContent='center' textAlign='center' />
    </div>
  )
}

export default Loading