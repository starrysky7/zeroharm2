import './ncm-100.css';
import * as ReactBootStrap from "react-bootstrap";

function Ncm100() {
    return (

        <div className="section ncm-100-section" >
            <ReactBootStrap.Row>
                <ReactBootStrap.Col xs={12} md={3} lg={3} >
                    <div className="overflow-hidden">
                        <img className="ncm-100-img overflow-hidden" src="/assets/Group 157.png" />
                        <label className="speciality-product-text align-center">NCM 100</label>
                    </div>
                </ReactBootStrap.Col>

                <ReactBootStrap.Col xs={12} md={9} lg={9} className="product-details-yellow overflow-hidden">
                    <div className="product-details-tab-container">
                        <label className="default-text white prod-details-tab">About</label>
                        <label className="default-text white prod-details-tab">Physicochemical Properties</label>
                        <label className="default-text white prod-details-tab">In Test We Trust</label>
                        <label className="default-text white prod-details-tab">Product Applications</label>
                    </div>
                    <div className="in-test-we-trust ">
                        <ReactBootStrap.Row className="overflow-hidden">

                            <ReactBootStrap.Col xs={12} md={6} >
                                <div className="content-container">
                                   <span className='default-text grey'>
                                   We are at the intersection of nature and
efcacy. The tests are at the highest levels at
Laboratories of international repute. 
                                   </span>
                                   <br/>
                                   <span className='default-text grey'>
                                   A promise that lives up even in the generics
range. For instance the Laboratory testing
showed serum levels by more than ve times
with our nano-capsulated generics over
conventional generics.
                                   </span>
                                   <br/>
                                   <a href="/actionable" class="default-button white">KNOW MORE</a>
                                </div>

                            </ReactBootStrap.Col>

                            <ReactBootStrap.Col xs={12} md={6}>
                                <img src="/assets/Group 332.png" className="ncm-100-img overflow-hidden"/>
                            </ReactBootStrap.Col>

                        </ReactBootStrap.Row>
                    </div>
                </ReactBootStrap.Col>
            </ReactBootStrap.Row>
        </div>
    )
}

export default Ncm100