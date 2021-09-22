import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from 'react-bootstrap'
import * as ReactBootStrap from "react-bootstrap";


const Nav = () => {

        function opnMegaNavSplIng() {
                document.getElementById("mega-menu-spc-ing").style.display = "block";
        }

        function hidMegaNavSplIng() {
                document.getElementById("mega-menu-spc-ing").style.display = "none";
        }

        return (
                <>

                        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bsPrefix="nav">
                                <ReactBootStrap.Navbar.Brand href="#home">
                                        <div className="nav-logo-container" onClick={e => { e.preventDefault(); window.location.href = "/" }}>
                                                <span className="nav-logo-top">ZEROHARM</span>
                                                <span className="nav-logo-bottom">SCIENCES</span>
                                        </div>
                                </ReactBootStrap.Navbar.Brand>
                                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <div className="nav-items-right">
                                        <span className="search-button"><img src="/icons/search-icon.png" /></span>
                                </div>
                                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                                        <ReactBootStrap.Nav className="mr-auto">
                                                <ReactBootStrap.Nav.Link href="#2" className="nav-item">Origins</ReactBootStrap.Nav.Link>
                                                <ReactBootStrap.Nav.Link href="#" className="nav-item desktop" onMouseEnter={opnMegaNavSplIng}>Product</ReactBootStrap.Nav.Link>
                                                <ReactBootStrap.NavDropdown title="Product" className="mobile">
                                                        <ReactBootStrap.NavDropdown.Item href="/speciality-ingredients" bsPrefix="title-text green heading-20">SPECIALITY INGREDIENTS</ReactBootStrap.NavDropdown.Item>
                                                        <ReactBootStrap.NavDropdown.Item href="" bsPrefix="grey align-left default-styled-text">NCM 100</ReactBootStrap.NavDropdown.Item><br/>
                                                        <ReactBootStrap.NavDropdown.Item href="" bsPrefix="grey align-left default-styled-text">HCM 100</ReactBootStrap.NavDropdown.Item><br/>
                                                        <ReactBootStrap.NavDropdown.Item href="" bsPrefix="grey align-left default-styled-text">NAG 100</ReactBootStrap.NavDropdown.Item><br/>
                                                        <ReactBootStrap.NavDropdown.Item href="" bsPrefix="grey align-left default-styled-text">HAG 100</ReactBootStrap.NavDropdown.Item><br/>
                                                        <ReactBootStrap.NavDropdown.Item href="/speciality-ingredients" bsPrefix="title-text green heading-20">STANDARD INGREDIENTS</ReactBootStrap.NavDropdown.Item>
                                                        <ReactBootStrap.NavDropdown.Item href="" bsPrefix="grey align-left default-styled-text">View all products</ReactBootStrap.NavDropdown.Item>
                                                        <ReactBootStrap.NavDropdown.Item href="/speciality-ingredients" bsPrefix="title-text green heading-20">CUSTOMIZED APIs</ReactBootStrap.NavDropdown.Item>
                                                        <ReactBootStrap.NavDropdown.Item href="" bsPrefix="grey align-left default-styled-text">View all products</ReactBootStrap.NavDropdown.Item>
                                                        <ReactBootStrap.NavDropdown.Item href="/speciality-ingredients" bsPrefix="title-text green heading-20">SPECIALITY APIs</ReactBootStrap.NavDropdown.Item>
                                                        <ReactBootStrap.NavDropdown.Item href="" bsPrefix="grey align-left default-styled-text">View all products</ReactBootStrap.NavDropdown.Item>
                                                        <br/>
                                                        <ReactBootStrap.NavDropdown.Item href="" bsPrefix="nav-mega-menu-btn">
                                        <a href="" className="mega-menu-btn-txt align-left default-styled-text">VIEW ALL PRODUCTS</a></ReactBootStrap.NavDropdown.Item>
                                                </ReactBootStrap.NavDropdown>
                                                <ReactBootStrap.Nav.Link href="#4" className="nav-item">Process</ReactBootStrap.Nav.Link>
                                                <ReactBootStrap.Nav.Link href="#9" className="nav-item">Validation</ReactBootStrap.Nav.Link>
                                                <ReactBootStrap.Nav.Link href="#3" className="nav-item">Genomics</ReactBootStrap.Nav.Link>
                                                <ReactBootStrap.Nav.Link href="#13" className="nav-item">Contact Us</ReactBootStrap.Nav.Link>
                                        </ReactBootStrap.Nav>
                                </ReactBootStrap.Navbar.Collapse>
                        </ReactBootStrap.Navbar>

                        <div className="nav-mega-menu" id="mega-menu-spc-ing" onMouseEnter={opnMegaNavSplIng}>
                                <ReactBootStrap.Row className="mega-menu-row1" >
                                        <ReactBootStrap.Col xs={12} md={4} lg={4}>
                                                <a href="/speciality-ingredients" className="title-text green">SPECIALITY <br />INGREDIENTS</a>
                                                <a href="" className="grey align-left default-styled-text">NCM 100</a><br />
                                                <a href="" className="grey align-left default-styled-text">HCM 100</a><br />
                                                <a href="" className="grey align-left default-styled-text">NAG 100</a><br />
                                                <a href="" className="grey align-left default-styled-text">HAG 100</a>
                                        </ReactBootStrap.Col>
                                        <ReactBootStrap.Col xs={12} md={4} lg={4}>
                                                <span className="title-text green">STANDARD <br />INGREDIENTS</span>
                                                <a href="" className="grey align-left default-styled-text">View all products</a><br />
                                        </ReactBootStrap.Col>
                                        <ReactBootStrap.Col xs={12} md={4} lg={4}>
                                                <span className="title-text green"></span>
                                        </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <ReactBootStrap.Row className="mega-menu-row2">
                                        <ReactBootStrap.Col xs={12} md={4} lg={4}>
                                                <span className="title-text green">CUSTOMIZED <br />INGREDIENTS</span>
                                                <a href="" className="grey align-left default-styled-text">View all products</a><br />
                                        </ReactBootStrap.Col>
                                        <ReactBootStrap.Col xs={12} md={4} lg={4}>
                                                <span className="title-text green">CUSTOMIZED <br /> APIs</span>
                                                <a href="" className="grey align-left default-styled-text">View all products</a><br />
                                        </ReactBootStrap.Col>
                                        <ReactBootStrap.Col xs={12} md={4} lg={4}>
                                                <span className="title-text green">SPECIALITY <br />APIs</span>
                                                <a href="" className="grey align-left default-styled-text">View all products</a><br />
                                        </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <div className="nav-mega-menu-btn">
                                        <a href="" className="mega-menu-btn-txt align-left default-styled-text">VIEW ALL PRODUCTS</a>
                                </div>
                        </div>
                </>
        );
};

export default Nav;


