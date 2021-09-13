import './footer-end.css';
import * as ReactBootStrap from "react-bootstrap";
import { useState } from 'react';

function FooterEnd() {

    return (
        <div className="footer-end">
            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={12} md={4} lg={3}>
                    <div className="footer-end-logo-container" onClick={e => { e.preventDefault(); window.location.href = "/" }}>
                        <span className="footer-end-logo-top">ZEROHARM</span>
                        <span className="footer-end-logo-bottom">SCIENCES</span>
                    </div>
                </ReactBootStrap.Col>

                <ReactBootStrap.Col xs={12} md={2} lg={2}>
                    <span className="footer-end-title">Company</span>
                    <a href="#" className="footer-end-item">Blog</a>
                    <a href="#" className="footer-end-item">Patents &amp; Certificates</a>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col xs={12} md={2} lg={2}>
                    <span className="footer-end-title">Customer Care</span>
                    <a href="#" className="footer-end-item">FAQs</a>
                    <a href="#" className="footer-end-item">Feedback</a>
                    <a href="#" className="footer-end-item">Terms &amp; Conditions</a>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col xs={12} md={2} lg={2}>
                    <span className="footer-end-title">Retail Partners</span>
                    <span className="footer-end-sub-title">Follow Us</span>
                </ReactBootStrap.Col>

            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="footer-end-bottom">
                <ReactBootStrap.Col xs={12} md={4} >
                    <span className="footer-end-small-text terms-text">Terms of Service | Privacy Policy</span>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col xs={12} md={2} >
                </ReactBootStrap.Col>
                <ReactBootStrap.Col xs={12} md={2} >
                    <span className="footer-end-small-text copyright-text">&copy;2021 Zeroharm | All Rights Reserved</span>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

        </div>
    );
}

export default FooterEnd;