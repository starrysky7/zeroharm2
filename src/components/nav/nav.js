import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from 'react-bootstrap'

const Nav = () => {
 return (
     <div className="nav">
       <div className="nav-logo-container">
               <span className="nav-logo-top">ZEROHARM</span>
               <span className="nav-logo-bottom">SCIENCES</span>
           </div>
           <div class="nav-items-container">
               <a href="#2" className="nav-item">Origins</a>
               <a href="#" className="nav-item">Product</a>
               <a href="#4" className="nav-item">Process</a>
               <a href="#9" className="nav-item">Validation</a>
               <a href="#3" className="nav-item">Genomics</a>
               <a href="#13" className="nav-item mobileHide">Contact Us</a>
           </div>
   </div>     
 );
};

export default Nav;


