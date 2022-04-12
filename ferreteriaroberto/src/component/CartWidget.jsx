import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import s from "./CardWidget.module.css";

 

export default function CartWidget() {


    return (
        <div>
        <AiOutlineShoppingCart  className={s.colorIcon} size= "30"/>
        </div>
    );

}