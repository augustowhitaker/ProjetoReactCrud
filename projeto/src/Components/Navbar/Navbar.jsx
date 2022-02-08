import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';


export default function Navbar(){
    return(
       
        <nav id="navbar" className="navbar">
        <ul>
          <li>
              <Link to="/">
              <a className="nav-link scrollto active" >Home</a>
              </Link>
              </li>

          <li>
              <Link to="/Login">
              <a className="nav-link scrollto">Login</a>
              </Link>
              </li>

          <li><a className="nav-link scrollto" href="#services">Serviços</a> </li>

  
          <li><a className="nav-link scrollto" href="#contact">Contato</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
       
    );
}