import React from "react";



export default function Test({universidades}) {
    return (
        <>
             {universidades.map(item => { 
                 return (
                    <p>{item.name + " " + item.country }</p>)
                })
             })
                 
             
        </>

        );

}