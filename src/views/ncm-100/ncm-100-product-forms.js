import './ncm-100.css';
import * as ReactBootStrap from "react-bootstrap";
import ProductNav from '../../components/product-nav/product-nav';

function Ncm100ProductForms() {
    return (
        <div className="section">
            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={12} md={3} >
                    <img className="ncm-100-img" src="/assets/Group 159.png" />
                </ReactBootStrap.Col>

                <ReactBootStrap.Col xs={12} md={9} className="product-details-yellow">
                    <ProductNav />
                    <div className="responsive-margin">
                        <ReactBootStrap.Row>
                            <span className="styled-text white heading-20 desktop">PRODUCT FORMS &amp; PACKAGING</span>
                            <span className="styled-text white heading-20 align-center mobile">PRODUCT FORMS &amp; PACKAGING</span>
                        </ReactBootStrap.Row>
                        <br />

                        <div className="desktop">
                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col xs={12} md={2}>
                                    <img src="/assets/Group 358.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2}>
                                    <img src="/assets/Group 355.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2}>
                                    <img src="/assets/Group 365.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2}>
                                    <img src="/assets/Component 4 – 1.png" />
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            <br />
                            <ReactBootStrap.Row className="full-width desktop">
                                <ReactBootStrap.Col xs={12} md={2}>
                                    <img src="/assets/Component 5 – 1.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2}>
                                    <img src="/assets/Group 359.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2}>
                                    <img src="/assets/Group 361.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2}>
                                    <img src="/assets/Group 363.png" />
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                        </div>

                        <div className="mobile">
                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col xs={6}>
                                    <img src="/assets/Group 358.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={6}>
                                    <img src="/assets/Group 355.png" />
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            <br />
                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col xs={6} md={2}>
                                    <img src="/assets/Component 4 – 1.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={6} md={2}>

                                    <img src="/assets/Group 365.png" />
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            <br />
                            <ReactBootStrap.Row >
                                <ReactBootStrap.Col xs={6} md={2}>
                                    <img src="/assets/Group 359.png" />

                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={6} md={2}>
                                    <img src="/assets/Group 361.png" />
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            <br />
                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col xs={6} md={2}>
                                    <img src="/assets/Component 5 – 1.png" />

                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={6} md={2}>
                                    <img src="/assets/Group 363.png" />
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                        </div>


                        <br />
                        <ReactBootStrap.Row>
                            <span className="styled-text white heading-20 desktop">RECOMMENDED APPLICATIONS</span>
                            <span className="styled-text white heading-20 align-center mobile">RECOMMENDED APPLICATIONS</span>
                        </ReactBootStrap.Row>
                        <br />
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col xs={12} md={2} className="recommend-img bottom-spacing-30">
                                <img src="/assets/Group 371.png" />
                                <br />
                                <span className="default-styled-text black align-center">Nutraceuticals &amp; Wellness</span>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={2} className="recommend-img bottom-spacing-30">
                                <img src="/assets/Group 374.png" />
                                <br />
                                <span className="default-styled-text black align-center">Pharmaceuticals</span>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={2} className="recommend-img bottom-spacing-30">
                                <img src="/assets/Group 375.png" />
                                <br />
                                <span className="default-styled-text black align-center">Fortified Foods like Cereals,
                                    Chawanprash</span>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={2} className="recommend-img bottom-spacing-30">
                                <img src="/assets/Group 377.png" />
                                <br />
                                <span className="default-styled-text black align-center">Fortified Beverages
                                    Health drinks,Tea</span>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </div>
    )
}

export default Ncm100ProductForms;