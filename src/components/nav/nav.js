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
               <a href="#" className="nav-item">Contact Us</a>
           </div>
   </div>
     

 );
};

export default Nav;

// import React from 'react';
// import * as ReactBootStrap from "react-bootstrap";

// const Nav = () => {
//   return (
//     <div className="nav">
//       <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="white" variant="light" className="nav">
//         <ReactBootStrap.Navbar.Brand href="/home"> ZEROHARM</ReactBootStrap.Navbar.Brand>
//         <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//           <ReactBootStrap.Nav className="mr-auto">


//             <ReactBootStrap.Nav.Link href="/about">Origins</ReactBootStrap.Nav.Link>


//             <ReactBootStrap.Nav.Link href="/Process">Process</ReactBootStrap.Nav.Link>

//             <ReactBootStrap.Nav.Link href="/roducts">Products</ReactBootStrap.Nav.Link>

//             <ReactBootStrap.Nav.Link href="/Validation">Validation</ReactBootStrap.Nav.Link>

//             <ReactBootStrap.Nav.Link href="/Beliefs">Beliefs</ReactBootStrap.Nav.Link>
//             <ReactBootStrap.Nav.Link href="/contact">Contact Us</ReactBootStrap.Nav.Link>

//           </ReactBootStrap.Nav>
//         </ReactBootStrap.Navbar.Collapse>
//       </ReactBootStrap.Navbar>
//     </div>
//   )
// }

// export default Nav;

