import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Cart from './components/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>

        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>



        <Route exact path='/category/:category' element={<ItemListContainer/>}></Route>

        <Route exact path='/item/:id' element={<ItemDetailContainer/>}></Route>


      </Routes>

    </BrowserRouter>
  )
}

export default App