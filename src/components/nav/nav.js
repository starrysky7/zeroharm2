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
               <a href="#" className="nav-item">Origins</a>
               <a href="#" className="nav-item">Process</a>
               <a href="#" className="nav-item">Products</a>
               <a href="#" className="nav-item">Validation</a>
               <a href="#" className="nav-item">Beliefs</a>
               <a href="#" className="nav-item mobileHide">Contact Us</a>
           </div>
   </div>
     

 );
};

export default Nav;


