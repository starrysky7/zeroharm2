import './ncm-100.css';
import * as ReactBootStrap from "react-bootstrap";
import ProductNav from '../../components/product-nav/product-nav';

function Ncm100KnowMore() {
    return (

        <div className="section product-details-yellow" >
            <ReactBootStrap.Row>

                <ReactBootStrap.Col sm={12} md={8} >
                    <img className="about-section1-image" src="/assets/Group 393.png" />
                </ReactBootStrap.Col>

                <ReactBootStrap.Col sm={12} md={4}>
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col xs={12} md={6}>
                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col xs={12} md={4}>
                                    <img src="/assets/Group 382.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={8}>
                                    <span className="styled-text white">In-vitro</span>
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            <br />
                            <span className='styled-text black'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</span>
                        </ReactBootStrap.Col>
                        
                        <ReactBootStrap.Col xs={12} md={6}>
                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col xs={12} md={4}>
                                    <img src="/assets/Group 386.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={8}>
                                    <span className="styled-text white">In-vitro</span>
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            <br />
                            <span className='styled-text black'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</span>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                    <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={6}>
                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col xs={12} md={4}>
                                    <img src="/assets/Group 391.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={8}>
                                    <span className="styled-text white">Clinical studies</span>
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            <br />
                            <span className='styled-text black'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</span>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={12} md={6}>
                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col xs={12} md={4}>
                                    <img src="/assets/Group 389.png" />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={8}>
                                    <span className="styled-text white">Ongoing active research</span>
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                            <br />
                            <span className='styled-text black'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</span>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Col>

            </ReactBootStrap.Row>

        </div>
    )
}

export default Ncm100KnowMore;