import './ncm-100.css';
import { Row, Col } from "react-bootstrap";
import ProductNav from '../../components/product-nav/product-nav';

function Ncm100KnowMore() {
    return (

        <div className="section product-details-yellow" >
            <Row>

                <Col sm={12} md={5} className="flex-center">
                    <img className="ncm-know-more-image" src="/assets/Group 393.png" />
                </Col>

                <Col sm={12} md={7} className="ncm-know-more-content">
                    <Row>
                        <Col xs={12} md={6}>
                            <img src="/assets/Group 382.png" className="ncm-100-know-more-icon" />
                            <span className="styled-text white ncm-100-know-more-icon-text">In-vitro</span>
                            <br />
                            <span className='styled-text black'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</span>
                        </Col>

                        <Col xs={12} md={6}>
                            <img src="/assets/Group 386.png" className="ncm-100-know-more-icon" />
                            <span className="styled-text white ncm-100-know-more-icon-text ">In-vitro</span>
                            <br />
                            <span className='styled-text black'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</span>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12} md={6}>
                            <img src="/assets/Group 391.png"  className="ncm-100-know-more-icon" />
                            <span className="styled-text white ncm-100-know-more-icon-text ">Clinical studies</span>
                            <br />
                            <span className='styled-text black'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</span>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src="/assets/Group 389.png" className="ncm-100-know-more-icon" />
                            <span className="styled-text white ncm-100-know-more-icon-text ">Ongoing active research</span>
                            <br />
                            <span className='styled-text black'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</span>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </div>
    )
}

export default Ncm100KnowMore;