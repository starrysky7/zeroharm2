import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from 'react-bootstrap'
import * as ReactBootStrap from "react-bootstrap";

const Nav = () => {

  function opnMegaNavSplIng(){
    document.getElementById("mega-menu-spc-ing").style.display="block";
  }

  function hidMegaNavSplIng(){
    document.getElementById("mega-menu-spc-ing").style.display="none";
  }

 return (
   <>
     <div className="nav">
       <div className="nav-logo-container" onClick={e=>{e.preventDefault();window.location.href="/"}}>
               <span className="nav-logo-top">ZEROHARM</span>
               <span className="nav-logo-bottom">SCIENCES</span>
           </div>
           <div class="nav-items-container">
               <a href="#2" className="nav-item">Origins</a>
               <a href="#" className="nav-item" onMouseEnter={opnMegaNavSplIng}>Product</a>
               <a href="#4" className="nav-item">Process</a>
               <a href="#9" className="nav-item">Validation</a>
               <a href="#3" className="nav-item">Genomics</a>
               <a href="#13" className="nav-item mobileHide">Contact Us</a>
           </div>
   </div> 

    <div className="nav-mega-menu" id="mega-menu-spc-ing" onMouseEnter={opnMegaNavSplIng}>
     <div className="mega-menu-margin">
      <ReactBootStrap.Row >
                    <ReactBootStrap.Col xs={12} md={4} lg={4}>
                            <span className="nav-menu-title green">SPECIALITY INGREDIENTS</span>
                            <a href="" className="grey align-left default-styled-text">NCM 100</a><br/>
                            <a href=""className="grey align-left default-styled-text">HCM 100</a><br/>
                            <a href="" className="grey align-left default-styled-text">NAG 100</a><br/>
                            <a href="" className="grey align-left default-styled-text">HAG 100</a>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={4} lg={4}>
                            <span className="nav-menu-title green">STANDARD INGREDIENTS</span>
                            <a href="" className="grey align-left default-styled-text">View all products</a><br/>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={4} lg={4}>
                            <span className="nav-menu-title green"></span>
                    </ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row >
                    <ReactBootStrap.Col xs={12} md={4} lg={4}>
                            <span className="nav-menu-title green">CUSTOMIZED INGREDIENTS</span>
                            <a href="" className="grey align-left default-styled-text">View all products</a><br/>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={4} lg={4}>
                            <span className="nav-menu-title green">CUSTOMIZED APIs</span>
                            <a href="" className="grey align-left default-styled-text">View all products</a><br/>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={4} lg={4}>
                    <span className="nav-menu-title green">SPECIALITY APIs</span>
                            <a href="" className="grey align-left default-styled-text">View all products</a><br/>
                    </ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <br/>
     </div>
     <div className="nav-mega-menu-btn">
     <a href="" className="mega-menu-btn-txt align-left default-styled-text">VIEW ALL PRODUCTS</a>
     </div>
   </div>
   </>    
 );
};

export default Nav;


