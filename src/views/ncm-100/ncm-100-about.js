import './ncm-100.css';
import * as ReactBootStrap from "react-bootstrap";
import ProductNav from '../../components/product-nav/product-nav';

function Ncm100About() {
    return (

        <div className="section fit-content" >
            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={12} md={3} lg={3} >
                    <img className="ncm-100-img" src="/assets/Group 157.png" />
                </ReactBootStrap.Col>

                <ReactBootStrap.Col xs={12} md={9} lg={9} className="product-details-yellow">
                    <ProductNav />
                    <div className="margin-left-42">
                        <ReactBootStrap.Row><span className="heading-20 default-text white">KEY FEATURES</span></ReactBootStrap.Row>
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col xs={12} md={6}>
                                <ReactBootStrap.Row className="key-feature-item">
                                    <ReactBootStrap.Col xs={12} md={2}>
                                        <img src="/assets/Group 249.png" className="key-feature-item-icon" />
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={12} md={6} className="key-feature-item-text">
                                        <span className="styled-text black responsive-text"><span className="styled-text white">All Natural</span><br />
                                            Botanicals grown in naturally organic regions with complete traceability</span>
                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <ReactBootStrap.Row className="key-feature-item">
                                    <ReactBootStrap.Col xs={12} md={2}>
                                        <img src="/assets/Group 237.png" className="key-feature-item-icon" />
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={12} md={6} className="key-feature-item-text">
                                        <span className="styled-text black responsive-text"><span className="styled-text white">Aqueous &amp; Organic</span><br />Natural extraction methods for holistic health benefits</span>
                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row >
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={6}>
                                <ReactBootStrap.Row className="key-feature-item">
                                    <ReactBootStrap.Col xs={12} md={2}>
                                        <img src="/assets/Group 280.png" className="key-feature-item-icon" />
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={12} md={6} className="key-feature-item-text">
                                        <span className="styled-text black responsive-text"><span className="styled-text white">Patented Technology</span><br />Pharma-grade, precision nano formulation for highest efficacy</span>
                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <ReactBootStrap.Row className="key-feature-item">
                                    <ReactBootStrap.Col xs={12} md={2}>
                                        <img src="/assets/Group 269.png" className="key-feature-item-icon" />
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={12} md={6} className="key-feature-item-text">
                                        <span className="styled-text black responsive-text"><span className="styled-text white">100% Water Soluble</span><br />Highest Bioavailability Purest, safest for widest applications</span>
                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        <ReactBootStrap.Row><span className="default-text white heading-20">KEY HEALTH BENEFITS</span></ReactBootStrap.Row>
                        <ReactBootStrap.Row className="key-feature-item">
                            <ReactBootStrap.Col xs={12} md={6}>
                                <ReactBootStrap.Row className="key-feature-item">
                                    <ReactBootStrap.Col xs={12} md={2}>
                                        <img src="/assets/Group 256.png" className="key-feature-item-icon" />
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={12} md={6} className="key-feature-item-text responsive-text">
                                        Anti-cancer properties
                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <ReactBootStrap.Row className="key-feature-item">
                                    <ReactBootStrap.Col xs={12} md={2}>
                                        <img src="/assets/Group 260.png" className="key-feature-item-icon" />
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={12} md={6} className="key-feature-item-text responsive-text">
                                        Immunity boosting properties
                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <ReactBootStrap.Row className="key-feature-item">
                                    <ReactBootStrap.Col xs={12} md={2}>
                                        <img src="/assets/Group 287.png" className="key-feature-item-icon" />
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={12} md={6} className="key-feature-item-text responsive-text">
                                        Prevention of Arthritis, Depression &amp; other Chronic diseases
                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={6}>
                                <ReactBootStrap.Row className="key-feature-item">
                                    <ReactBootStrap.Col xs={12} md={2}>
                                        <img src="/assets/Group 280.png" className="key-feature-item-icon" />
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={12} md={6} className="key-feature-item-text responsive-text">
                                        Anti-Inflammatory, Antioxidant &amp; Anti-Ageing
                                        properties

                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <ReactBootStrap.Row className="key-feature-item">
                                    <ReactBootStrap.Col xs={12} md={2}>
                                        <img src="/assets/Group 284.png" className="key-feature-item-icon" />
                                    </ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={12} md={6} className="key-feature-item-text responsive-text">
                                        Lowering risk of
                                        Heart diseases and Alzheimer’s diseases

                                    </ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </div>
    )
}

export default Ncm100About