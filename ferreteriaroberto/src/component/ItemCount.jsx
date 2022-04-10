import Button from 'react-bootstrap/Button'
import React, { useState } from "react";


 

export default function ItemCount({ stock }) {
    const [count, setCount] = useState(0);


    function adding () {
        if(count < stock) {
        setCount(count + 1);}
    }

    function subs () {
        if(count > 0) {
        setCount(count - 1);}
    }

    function onAdd () {
      alert('You added ' + count + ' items to your cart');

    }

return (
        
            <div>
            <Button onClick={subs} variant="danger">-</Button> 
            <p>{count}</p>
            <Button onClick={adding} variant="success">+</Button>
            <Button onClick= {onAdd} variant="primary">Comprar</Button>{' '}
            
            </div>
        
    );

}