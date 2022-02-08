import React from 'react';
import FormLogin from '../../Components/FormLogin/FornLogin';
import Navbar from '../../Components/Navbar/Navbar';

import './Login.css';


export default function Login(){
    return (

        <>
        <Navbar></Navbar>
        <FormLogin></FormLogin>
        </>
    );
}