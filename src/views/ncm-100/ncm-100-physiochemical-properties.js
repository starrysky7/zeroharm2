import './ncm-100.css';
import * as ReactBootStrap from "react-bootstrap";
import ProductNav from '../../components/product-nav/product-nav';

function Ncm100PhysiochemicalProperties() {
    return (

        <div className="section" >
            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={12} md={3} lg={3} >
                    <img className="ncm-100-img" src="/assets/Group 159.png" />
                </ReactBootStrap.Col>

                <ReactBootStrap.Col xs={12} md={9} lg={9} className="product-details-yellow">
                    <ProductNav />
                    <div className="responsive-margin">
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col xs={12} md={4}>
                                <img src="/assets/Group 300.svg" className="mobile-bottom-margin" />
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={4}>
                                <img src="/assets/Component 1 – 1.svg" className="mobile-bottom-margin" />
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={4}>
                                <img src="/assets/Component 2 – 1.svg" className="mobile-bottom-margin" />
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col xs={12} md={4}>
                                <img src="/assets/Component 3 – 1.svg" className="mobile-bottom-margin"/>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={4}>
                                <img src="/assets/water-solubility.svg"className="mobile-bottom-margin" />
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={4}>
                                <img src="/assets/stability-chart.svg" className="mobile-bottom-margin" />
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>

                    </div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </div>
    )
}

export default Ncm100PhysiochemicalProperties;