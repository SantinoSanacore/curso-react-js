import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Loading from './Loading'


const ItemListContainer = () => {
    
    const { category } = useParams()

    const [ loading, setLoading ] = useState(true)
    const [ productos, setProductos ] = useState([])

    useEffect(() => {
        setTimeout(() => {
            const db = getFirestore()

        const itemsCollection = collection(db, "camisetas")
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProductos(docs)
            setLoading(false)
        })
     }, 100);
    }, [])
       

        if(loading){
            return <Loading/>
        }
        

    
    
    const productosFiltrados = productos.filter((producto) => producto.category === category)

    return (
        <>
            {category ? <ItemList productos={productosFiltrados}/> : <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer