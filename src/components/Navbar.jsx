import React from 'react'
import { Menu , MenuButton , MenuList , MenuItem, Button, Flex, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import icono from '../img/icono-ecommerce.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
return (
    <>
    <Flex className='nav'>
        <Link to={"/"}><img className="img-icono" src={icono} alt="" /></Link>
        <Spacer></Spacer>
        <Link to={"/"}><Button color='black' backgroundColor='white' variant='solid'>Inicio</Button></Link>
        <Spacer></Spacer>
        <Link to={"/products"}><Button color='black' backgroundColor='white' variant='solid'>Todos los productos</Button></Link>
        <Spacer></Spacer>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Categorias</MenuButton>
            <MenuList>
                <Link to={`/category/${'afa'}`}><MenuItem>AFA</MenuItem></Link>
                <Link to={`/category/${'futbol argentino'}`}><MenuItem>Fútbol Argentino</MenuItem></Link>
                <Link to={`/category/${'futbol europeo'}`}><MenuItem>Fútbol Europeo</MenuItem></Link>
            </MenuList>
        </Menu>
        <Spacer></Spacer>
        <Link to={"/cart"}><CartWidget/></Link>
    </Flex>
    </>
)
}

export default NavBar