import React, { useState } from "react";

 

 export default function ItemCount({ onAdd }) {

    const [Cant, setCant] = useState();

    return (
        <>
            <button>-</button>
            {Cant}
            <button>+</button>
            <button onClick={() => onAdd()}>Agregar al carro</button>
            <p>{Cant}</p>
        </>
    );

}