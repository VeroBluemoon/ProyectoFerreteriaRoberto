import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import customFetch from "./Utils/customFetch";
import productos from './Utils/productos';


 
export default function ItemListContainer() {

    /*function onAdd(cuanto) {
        alert(cuanto);
    }*/

const [x, setX] = useState([]);

    useEffect(() => {

        const pago = new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve([
                { id: '13457893883mvklsa', name: 'Juano', description: 'cabezon', stock: '1'}])
        }, 3000)
        })

        pago
       
        .then((res) => {
           setX(res);
        })
        .catch((err) => {
            console.log(err);
        })
       
    }, [])
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(3000, productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items])
    
    return (
        <>
        {/*<br/> Mapeo Con X Prueba{x.map(Item => <p key={Item.id}>{Item.id + " " + item.name}</p>)}*/}
        <div>
        <ItemList productos={items}/>
        </div>

        </>
    )

}

    
