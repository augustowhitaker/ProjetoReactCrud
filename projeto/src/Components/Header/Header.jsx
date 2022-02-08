import React from "react";
import Navbar from '../Navbar/Navbar';
import './Header.css'

export default function Header(){
    return(
        <header id="header" className="fixed-top d-flex align-items-center">
          <Navbar></Navbar>
        <div className="container d-flex align-items-center">
    
          <div className="logo me-auto">
            <h1><a href="index.html">Agência de viagem</a></h1>
             <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
          </div>
    
     
    
        </div>
      </header>
    );
}

