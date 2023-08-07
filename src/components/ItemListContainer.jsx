import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const { category }= useParams()

    const productos = [
        {id: 1, name: 'Camiseta seleccion argentina suplente 2022', description: 'Camiseta elaborada con tecnologia HeatReady', category:'afa', price: 29.999, stock: 120},
        {id: 2, name: 'Camiseta Real Madrid suplente', description: 'Camiseta elaborada con tecnologia AeroReady', category:'futbol europeo', price: 29.999, stock: 50},
        {id: 3, name: 'Camiseta titular Club Atletico Boca Juniors', description: 'Camiseta elaborada con tecnologia HeatReady', category:'futbol argentino', price: 29.999, stock: 20},
        {id: 4, name: 'Camiseta titular seleccion argentina 2 estrellas', description: 'Camiseta elaborada con tecnologia AeroReady', category:'afa', price: 34.999, stock: 50},
        {id: 5, name: 'Camiseta titular AFC Ajax', description: 'Camiseta elaborada con tecnologia AeroReady', category:'futbol europeo', price:  29.999, stock:  100},
        {id: 6, name: 'Camiseta de entrenamiento seleccion argentina', description: 'Camiseta elaborada con tecnologia HeatReady', category:'afa', price:  14.999, stock:  130},
        {id: 7, name: 'Camiseta visitante Club Atletico Boca Juniors', description: 'Camiseta elaborada con tecnologia AeroReady', category:'futbol argentino', price:  9.999, stock:  90},
        {id: 8, name: 'Camiseta titular seleccion argentina 3 estrellas', description: 'Camiseta elaborada con tecnologia HeatReady', category:'afa', price:  14.999, stock:  50},
        {id: 9, name: 'Camiseta titular Bayern Munich', description: 'Camiseta elaborada con tecnologia AeroReady', category:'futbol europeo', price:  29.999, stock:  100},
        {id: 10, name: 'Tercera camiseta Club Atletico Boca Juniors', description: 'Camiseta elaborada con tecnologia AeroReady', category:'futbol argentino', price:  34.999, stock:  75,}
    ]

    const obtenerProductos = new Promise((resolve, reject) => {
            if(productos.length > 0){
                setTimeout(() => {
                    resolve(productos)
                }, 2000);
            } else {
                reject(new Error("No hay datos"))
            }
        })
    

obtenerProductos
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
    
    const productosFiltrados = productos.filter((producto) => producto.category === category)

    return (
        <>
            <ItemList productos = { productosFiltrados }></ItemList>
        </>
    )
}

export default ItemListContainer