import './speciality-product-page.css';
import * as ReactBootStrap from "react-bootstrap";

function SpecialityProductPage() {
    return (
        <>
            <div className="section" >
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={6} >
                        <img className="speciality-prod-sect-1-img" src="/assets/Group 172.png" />
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs={12} md={6}>
                        <div className="content-container section5-content-container">
                            <span className="title-text green align-right">SPECIALITY INGREDIENTS.</span>
                            <br/>
                            <div className="prod-sect-1-icon-container">
                                <div className="prod-sect-1-icon-box">
                                    <img src="/assets/Group 211.png" className="prod-sect-1-icon"/>
                                    <label className="default-text green align-center">All Natural</label>
                                </div>
                                <div className="prod-sect-1-icon-box">
                                    <img src="/assets/Group 218.png" className="prod-sect-1-icon"/>
                                    <label className="default-text green align-center">100% Bio-available</label>
                                </div>
                                <div className="prod-sect-1-icon-box">
                                    <img src="/assets/Group 202.png" className="prod-sect-1-icon"/>
                                    <label className="default-text green align-center">No Side Effects</label>
                                </div>
                                <div className="prod-sect-1-icon-box">
                                    <img src="/assets/Group 227.png" className="prod-sect-1-icon"/>
                                    <label className="default-text green align-center">Clinically tested</label>
                                </div>
                            </div>
                            <span className="default-text grey align-right">Meet the pillars that build credibility right from origins</span>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>
            <div className="section speciality-product-section-2" >
                <div className="speciality-img-container">
                    <ReactBootStrap.Row className="desktop">
                        <ReactBootStrap.Col xs={3} md={3} lg={3} className="overflow-hidden">
                            <img className="speciality-prod-img overflow-hidden" src="/assets/Group 157.png" />
                            <label className="speciality-product-text">NCM 100</label>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={3} md={3} lg={3} className="overflow-hidden" >
                            <img className="speciality-prod-img overflow-hidden" src="/assets/Group 161.png" />
                            <label className="speciality-product-text">HCM 100</label>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={3} md={3} lg={3} className="overflow-hidden" >
                            <img className="speciality-prod-img overflow-hidden" src="/assets/Group 165.png" />
                            <label className="speciality-product-text">NAG 100</label>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={3} md={3} lg={3} className="overflow-hidden" >
                            <img className="speciality-prod-img overflow-hidden" src="/assets/Group 169.png" />
                            <label className="speciality-product-text">HAG 100</label>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="mobile">

                    <ReactBootStrap.Row className="mobile-row">
                        <ReactBootStrap.Col xs={6} md={3} lg={3} className="overflow-hidden">
                            <img className="speciality-prod-img overflow-hidden" src="/assets/Group 157.png" />
                            <label className="speciality-product-text">NCM 100</label>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={6} md={3} lg={3} className="overflow-hidden" >
                            <img className="speciality-prod-img overflow-hidden" src="/assets/Group 161.png" />
                            <label className="speciality-product-text">HCM 100</label>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                       <br/>
                    <ReactBootStrap.Row className="mobile-row">
                        <ReactBootStrap.Col xs={6} md={3} lg={3} className="overflow-hidden" >
                            <img className="speciality-prod-img overflow-hidden" src="/assets/Group 165.png" />
                            <label className="speciality-product-text">NAG 100</label>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={6} md={3} lg={3} className="overflow-hidden" >
                            <img className="speciality-prod-img overflow-hidden" src="/assets/Group 169.png" />
                            <label className="speciality-product-text">HAG 100</label>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                        
                    </ReactBootStrap.Row>
                </div>
            </div>
            <div className="speciality-prod-content-section" >
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <div className="content-container">
                            <span className="title-text green">CUSTOMER REVIEWS</span>
                            <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                            <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                            <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                            <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                            <br />
                            <br />
                            <div className="pat-cert-line"></div>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>
            <div className="speciality-prod-content-section" >
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <div className="content-container">
                            <span className="title-text green">EXPERT REVIEWS</span>
                            <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                            <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                            <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                            <span className="default-text grey align-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimminim veniam, quis nostrud exerci tation ullamcorper. - <strong>Lorem ipsum</strong></span>
                            <br />
                            <br />
                            <div className="pat-cert-line"></div>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>
            <div className="speciality-prod-content-section" >
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <div className="content-container">
                            <span className="title-text green">PATENTS</span>
                            <span className="default-text grey align-left"><strong>Patent 1:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                            <span className="default-text grey align-left"><strong>Patent 2:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                            <span className="default-text grey align-left"><strong>Patent 3:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                            <br />
                            <br />
                            <div className="pat-cert-line"></div>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>
            <div className="speciality-prod-content-section" >
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <div className="content-container">
                            <span className="title-text green">CERTIFICATES</span>
                            <br />
                            <br />
                            <ReactBootStrap.Row className="desktop">
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/Rectangle 62.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/Rectangle 65.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/Group 149.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/Group 148.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/Rectangle 63.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/Rectangle 64.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/Group 151.png" className="certif-img" /></ReactBootStrap.Col>
                            </ReactBootStrap.Row>

                            <ReactBootStrap.Row className="mobile">
                                <ReactBootStrap.Row>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/Rectangle 62.png" className="certif-img" /></ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/Rectangle 65.png" className="certif-img" /></ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/Group 149.png" className="certif-img" /></ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <br/>
                                <ReactBootStrap.Row>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/Group 148.png" className="certif-img" /></ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/Rectangle 63.png" className="certif-img" /></ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/Rectangle 64.png" className="certif-img" /></ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <br/>
                                <ReactBootStrap.Row>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/Group 151.png" className="certif-img" /></ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                            </ReactBootStrap.Row>
                            <br />
                            <br />
                            <a href="/actionable" class="default-button green">ASK FOR SAMPLE</a>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>

        </>
    );
}

export default SpecialityProductPage;