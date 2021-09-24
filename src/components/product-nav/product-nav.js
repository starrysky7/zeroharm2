import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect} from 'react';
import './product-nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from 'react-bootstrap'
import * as ReactBootStrap from "react-bootstrap";

const ProductNav = (props) => {

    function resetBorder(){
        document.getElementById('about').style.borderBottomColor = "#EAA921";
        document.getElementById('physio-chem').style.borderBottomColor = "#EAA921";
        document.getElementById('test-trust').style.borderBottomColor = "#EAA921";
        document.getElementById('application').style.borderBottomColor = "#EAA921";
    }

    useEffect(() =>{

        if(window.location.pathname == "/ncm-100-about"){
            resetBorder();
            document.getElementById('about').style.borderBottomColor = "white"
        }

        if(window.location.pathname == "/ncm-100-physiochemical-properties"){
            resetBorder();
            document.getElementById('physio-chem').style.borderBottomColor = "white"
        }

        if(window.location.pathname == "/ncm-100-in-test-we-trust"){
            resetBorder();
            document.getElementById('test-trust').style.borderBottomColor = "white"
        }

        if(window.location.pathname == "/ncm-100-product-forms"){
            resetBorder();
            document.getElementById('application').style.borderBottomColor = "white"
        } 
    
      }, [])


    return (
        <div className="product-nav">
            <a href="/ncm-100-about" className="product-nav-item" id="about">About</a>
            <a href="/ncm-100-physiochemical-properties" className="product-nav-item" id="physio-chem">Physicochemical Properties</a>
            <a href="/ncm-100-in-test-we-trust" className="product-nav-item" id="test-trust">In Test We Trust</a>
            <a href="/ncm-100-product-forms" className="product-nav-item" id="application">Product Applications</a>
        </div>
    );
};

export default ProductNav;


