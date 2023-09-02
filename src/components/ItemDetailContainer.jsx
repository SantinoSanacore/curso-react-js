import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Loading from './Loading';


const ItemDetailContainer = () => {
    
    const  { id } = useParams()

    const [ loading, setLoading] = useState(true)
    const [ productos, setProductos ] = useState([])

    useEffect(() => {
        
        const db = getFirestore()

        const oneItem = doc(db, "camisetas", `${id}`)
        getDoc(oneItem).then ((snapshot) => {
            if(snapshot.exists()){
                const docs = snapshot.data();
                setProductos({id: snapshot.id, ...docs});
                setLoading(false)
            }
        } )
    }, [])

    if (loading){
        return <Loading/>
    }
 
  return (
    <>
    <ItemDetail productos = {productos} />
    </>
  )
}

export default ItemDetailContainer