import React from 'react'

const ItemListConteiner = () => {

    const greeting = 23;
    
return (
    <>
    <div className='btn-apretar'>
        <button onClick={()=> console.log(greeting)}>Apreta</button>
    </div>
    </>
)
}

export default ItemListConteiner