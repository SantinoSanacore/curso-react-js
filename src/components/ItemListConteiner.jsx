import React, { PureComponent } from 'react'

export class ItemListConteiner extends PureComponent {
render() {
    const greeting = 23;

    return (
        <>
        <button onClick={()=> console.log(greeting)}>Apreta</button>
        </>
    )
}
}

export default ItemListConteiner