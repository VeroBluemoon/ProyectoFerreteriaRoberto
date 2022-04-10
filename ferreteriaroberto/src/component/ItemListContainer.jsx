import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

 
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

    return (
        <>
        <br/> aca va la x: {x.map(item => <p key={item.id}>{item.id + " " + item.name}</p>)}
        <div>
       <ItemCount stock={5}/>
        </div>

        </>
    )

}

    
