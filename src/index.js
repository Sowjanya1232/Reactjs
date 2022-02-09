import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/lizardimage1.jpg'
import Component1 from './Component1.js';
import './style.css'

ReactDOM.render(
    
    <div>
    <center>
    <img  className='ima' src={logo}/>
    <Component1 /></center> 
    </div>,
    document.getElementById("root")
    
)


 