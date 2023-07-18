import React from 'react'
import icono from '../img/icono-ecommerce.png'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
            <nav>
                <div className='contenedor-icono'>
                    <img src={icono} alt="" />
                </div>
                <div className='contenedor-categorias'>
                    <ul>
                        <li><a href="" target='_blank'>AFA</a></li>
                        <li><a href="" target='_blank'>Fútbol Argentino</a></li>
                        <li><a href="" target='_blank'>Fútbol Europeo</a></li>
                    </ul>
                </div>
                <CartWidget></CartWidget>
            </nav>
        </>
    )
}

export default NavBar