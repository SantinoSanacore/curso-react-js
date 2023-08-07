import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <>
        <h2>Productos</h2>
            {productos.map((p) => {
                return (
                    <Item
                        key={p.id}
                        id={p.id}
                        price={p.price}
                        desc={p.description}
                        name={p.name}>
                    </Item>)
            })
            }
        </>
)
}

export default ItemList