 import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {
  
  const [cart, setCart] = useState([])

  const [precioFinal, setPrecioFinal] = useState(0);

    useEffect(() => {
        const precioTotal = cart.reduce((compra, product) => compra + product.price * product.quantity, 0);
        setPrecioFinal(precioTotal);
      }, [cart]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)){
        setCart(prev => [...prev, {...item, quantity}])
    } else {
        console.error("already in cart")
    }
  }

  const vaciarCarrito = () =>{
    setCart([])
  }

  const eliminarProducto = ( ItemId ) =>{
      const cartUpdated = cart.filter(prod => prod.id !== ItemId)
      setCart(cartUpdated)

  }

  const isInCart = (ItemId) => {
    return cart.some( prod => prod.id === ItemId)
  }

  return (

    <CartContext.Provider value= { { cart, setCart, vaciarCarrito, addItem, precioFinal, eliminarProducto } } >


      {children}

      
    </CartContext.Provider>

  )
}

export default CartContextProvider