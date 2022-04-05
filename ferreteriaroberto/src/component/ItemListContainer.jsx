import React from "react";
import ItemCount from "./ItemCount";
 

 export default function ItemListContainer() {

    let arrayDeProductos = ["zapato nike", "capera adidas", "otra cosa mas", "Otra cosa nueva"];

    function onAdd(cuanto) {

        alert(cuanto);

       // arrayDeProductos = []
    }
    return (
        <>
        padre conteiner
        <br />
        <ItemCount arrayDeProductos={arrayDeProductos} onAdd={onAdd} />
        </>
    );

}