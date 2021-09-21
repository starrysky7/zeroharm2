import './ncm-100.css';
import * as ReactBootStrap from "react-bootstrap";
import ProductNav from '../../components/product-nav/product-nav';

function Ncm100ProductForms() {
    return (
        <div className="section">
            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={12} md={3} lg={3} >
                    <img className="ncm-100-img" src="/assets/Group 157.png" />
                </ReactBootStrap.Col>

                <ReactBootStrap.Col xs={12} md={9} lg={9} className="product-details-yellow">
                    <ProductNav />
                    <div className="margin-left-42">
                        <ReactBootStrap.Row>
                            <span className="styled-text white header-20">PRODUCT FORMS &amp; PACKAGING</span></ReactBootStrap.Row>
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
                        <ReactBootStrap.Row>
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
                        <ReactBootStrap.Row>
                            <span className="styled-text white header-20">RECOMMENDED APPLICATIONS</span>
                        </ReactBootStrap.Row>
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col xs={12} md={2} className="recommend-img">
                                <img src="/assets/Group 371.png" />
                                <br/>
                                <span className="default-text black align-center">Nutraceuticals &amp; Wellness</span>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={2}  className="recommend-img">
                                <img src="/assets/Group 374.png" />
                                <br/>
                                <span className="default-text black align-center">Pharmaceuticals</span>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={2}  className="recommend-img">
                                <img src="/assets/Group 375.png" />
                                <br/>
                                <span className="default-text black align-center">Fortified Foods like Cereals,
Chawanprash</span>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={2}  className="recommend-img">
                                <img src="/assets/Group 377.png" />
                                <br/>
                                <span className="default-text black align-center">Fortified Beverages
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