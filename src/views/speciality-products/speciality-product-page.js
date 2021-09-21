import './speciality-product-page.css';
import * as ReactBootStrap from "react-bootstrap";
import React from 'react';

function SpecialityProductPage() {
    return (
        <>
            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={12} md={6}>
                    <img className="speciality-prod-sect-1-img" src="/assets/Group 172.png" />
                </ReactBootStrap.Col>
                <ReactBootStrap.Col xs={12} md={6}>
                    <span className="title-text green align-right desktop">SPECIALITY <br />INGREDIENTS.</span>
                    <span className="title-text green align-center mobile">SPECIALITY <br />INGREDIENTS.</span>
                    <br />
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col xs={3} md={2}>
                            <img src="/assets/Group 211.png" className="speciality-ingredients-icon margin-auto" />
                            <span className="default-text green align-center">All <br /> Natural</span>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={3} md={2}>
                            <img src="/assets/Group 218.png" className="speciality-ingredients-icon margin-auto" />
                            <span className="default-text green align-center">100% <br />Bio-available</span>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={3} md={2}>
                            <img src="/assets/Group 202.png" className="speciality-ingredients-icon margin-auto" />
                            <span className="default-text green align-center">No <br />Side Effects</span>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={3} md={2}>
                            <img src="/assets/Group 227.png" className="speciality-ingredients-icon margin-auto" />
                            <span className="default-text green align-center">Clinically <br />Tested</span>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                    <span className="default-text grey align-right desktop">Meet the pillars that build credibility right from origins</span>
                    <span className="default-text grey align-center mobile">Meet the pillars that build credibility right from origins</span>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <div className="speciality-product-section2">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={3}>
                        <a href="/ncm-100"><img className="product-image" src="/assets/Group 159.png" /></a>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={3}>
                        <a href="#"><img className="product-image" src="/assets/Group 163.png" /></a>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={3}>
                        <a href="#"><img className="product-image" src="/assets/Group 167.png" /></a>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={3}>
                        <a href="#"><img className="product-image" src="/assets/Group 171.png" /></a>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>

            <ReactBootStrap.Row className="speciality-product-section2">
                <ReactBootStrap.Col xs={12} md={12}>
                    <span className="title-text green">PRODUCT SUPERIORITY</span>
                    <table className="superiority-table-row default-text grey">
                        <tr>
                            <td></td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                        </tr>
                        <tr>
                            <td>Lorem Ipsum</td>
                            <td><img src="/assets/Path 128.svg" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lorem Ipsum</td>
                            <td><img src="/assets/Path 128.svg" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lorem Ipsum</td>
                            <td><img src="/assets/Path 128.svg" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lorem Ipsum</td>
                            <td><img src="/assets/Path 128.svg" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lorem Ipsum</td>
                            <td><img src="/assets/Path 128.svg" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lorem Ipsum</td>
                            <td><img src="/assets/Path 128.svg" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lorem Ipsum</td>
                            <td><img src="/assets/Path 128.svg" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lorem Ipsum</td>
                            <td><img src="/assets/Path 128.svg" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lorem Ipsum</td>
                            <td><img src="/assets/Path 128.svg" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>

                </ReactBootStrap.Col>
            </ReactBootStrap.Row>


            <ReactBootStrap.Row className="speciality-product-section2">
                <ReactBootStrap.Col xs={12} md={12}>
                    <span className="title-text green">CUSTOMER REVIEWS</span>
                    <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                    <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                    <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                    <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                    <br />
                    <br />
                    <div className="pat-cert-line"></div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="speciality-product-section2">
                <ReactBootStrap.Col xs={12} md={12}>
                    <span className="title-text green">EXPERT REVIEWS</span>
                    <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                    <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                    <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                    <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                    <br />
                    <br />
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="speciality-product-section2">
                <ReactBootStrap.Col xs={12} md={12}>
                    <span className="title-text green">PATENTS</span>
                    <span className="default-text grey align-left"><strong>Patent 1:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                    <span className="default-text grey align-left"><strong>Patent 2:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                    <span className="default-text grey align-left"><strong>Patent 3:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                    <br />
                    <br />
                    <div className="pat-cert-line"></div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={4} md={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                <ReactBootStrap.Col xs={4} md={1}><img src="/certification/Rectangle 65.png" className="certif-img" /></ReactBootStrap.Col>
                <ReactBootStrap.Col xs={4} md={1}><img src="/certification/Group 149.png" className="certif-img" /></ReactBootStrap.Col>
                <ReactBootStrap.Col xs={4} md={1}><img src="/certification/Group 148.png" className="certif-img" /></ReactBootStrap.Col>
                <ReactBootStrap.Col xs={4} md={1}><img src="/certification/Rectangle 63.png" className="certif-img" /></ReactBootStrap.Col>
                <ReactBootStrap.Col xs={4} md={1}><img src="/certification/Rectangle 64.png" className="certif-img" /></ReactBootStrap.Col>
                <ReactBootStrap.Col xs={4} md={1}><img src="/certification/Group 151.png" className="certif-img" /></ReactBootStrap.Col>
            </ReactBootStrap.Row>

        </>
    );
}

export default SpecialityProductPage;