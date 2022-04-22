

import React, { useEffect, useState } from "react";
import Test from "./Test";




export default function TestConteiner() {

    const [universidades, setUniversidades]= useState([]);

    useEffect(() => {

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("http://universities.hipolabs.com/search?country=United+States", requestOptions)
            .then(response => response.json())
            .then(result => {
                //console.log(result))
                setUniversidades(result);
            })
            .catch(error => {
                console.log('error', error)
            });
        }, [])


    return (
        <>
            <Test universidades={universidades}/>
        </>

        );
    }
