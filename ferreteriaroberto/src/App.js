import React from "react";
import NavBar from "./component/NavBar";
import ItemListContainer from "./component/ItemListContainer";
import Footer from "./component/Footer";
import './App.css';
import TestConteiner from "./component/Test/TestConteiner";

 

export default function App() {


  return (
    <>
    <NavBar />
    <ItemListContainer/>
    <TestConteiner/>
    <br />
    <Footer />
    </>
  );

}
