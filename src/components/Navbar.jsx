import React from 'react'
import CartWidget from './CartWidget'
import ItemListConteiner from './ItemListConteiner'
import Categorias from './Categorias'

function NavBar() {
return (
    <nav>
            <h1>SS Camisetas</h1>
            <Categorias></Categorias>
            <CartWidget></CartWidget>
            <ItemListConteiner></ItemListConteiner>
    </nav>
)
}

export default NavBar