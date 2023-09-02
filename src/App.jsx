import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import Cart from './components/Cart'
import CartWidget from './components/CartWidget'
import CartContextProvider from './context/CartContext'
import SendOrder from './components/SendOrder'


const App = () => {
  return (

    <>

      <CartContextProvider>

        <BrowserRouter>

        <NavBar/>

        <Routes>

          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
          <Route exact path='/products' element={<ItemListContainer/>}></Route>
          <Route exact path='/category/:category' element={<ItemListContainer/>}></Route>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route exact path='/formulario' element={<SendOrder></SendOrder>}></Route>

        </Routes>

        </BrowserRouter>

      </CartContextProvider>

    </>)
    

  
}

export default App