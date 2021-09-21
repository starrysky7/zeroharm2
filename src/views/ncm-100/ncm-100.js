import './ncm-100.css';
import * as ReactBootStrap from "react-bootstrap";
import ProductNav from '../../components/product-nav/product-nav';

function Ncm100() {
    return (

        <div className="section fit-content" >
            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={12} md={3} lg={3} >
                    <img className="ncm-100-img" src="/assets/Group 157.png" />
                </ReactBootStrap.Col>

                <ReactBootStrap.Col xs={12} md={9} lg={9} className="product-details-yellow">
                    <ProductNav />
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col xs={12} md={6} >
                            <div className="content-container product-details-text">
                                <span className='default-text black'>
                                    We are at the intersection of nature and efficacy. The tests are at the highest levels at Laboratories of international repute. <br /><br />A promise that lives up even in the generics range. For instance the Laboratory testing
                                    showed serum levels by more than ve times
                                    with our nano-capsulated generics over
                                    conventional generics.
                                </span>
                                <span className='default-text black'>
                                </span>
                                <a href="/actionable" class="default-button white">KNOW MORE</a>
                            </div>

                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col xs={12} md={6}>
                            <img src="/assets/Group 332.png" className="full-width in-test-img" />
                        </ReactBootStrap.Col>

                    </ReactBootStrap.Row>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </div>
    )
}

export default Ncm100