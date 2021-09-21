import React from 'react';
import { Link } from 'react-router-dom';

import './product-nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from 'react-bootstrap'
import * as ReactBootStrap from "react-bootstrap";

const ProductNav = () => {
    return (
        <div className="product-nav">
            <a href="/ncm-100-about" className="product-nav-item">About</a>
            <a href="/ncm-100-physiochemical-properties" className="product-nav-item">Physicochemical Properties</a>
            <a href="/ncm-100-in-test-we-trust" className="product-nav-item">In Test We Trust</a>
            <a href="/ncm-100-product-forms" className="product-nav-item">Product Applications</a>
        </div>
    );
};

export default ProductNav;


