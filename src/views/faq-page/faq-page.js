import './faq-page.css';
import * as ReactBootStrap from "react-bootstrap";
import { Accordion } from "react-bootstrap";

function FAQPage() {
    return (
        <div className="section green-bg" >
            <div className="popup-section white-bg">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <div className="content-container">
                            <span className="title-text green align-center">FAQs</span>
                            <Accordion flush>
                                <Accordion.Item eventKey="0" bsPrefix="acc-item">
                                    <Accordion.Header bsPrefix="acc-text">Lorem ipsum dolor sit amet, consectetue?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" bsPrefix="acc-item">
                                    <Accordion.Header bsPrefix="acc-text">Lorem ipsum dolor sit amet, consectetue?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2" bsPrefix="acc-item">
                                    <Accordion.Header bsPrefix="acc-text">Lorem ipsum dolor sit amet, consectetue?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3" bsPrefix="acc-item">
                                    <Accordion.Header bsPrefix="acc-text">Lorem ipsum dolor sit amet, consectetue?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4" bsPrefix="acc-item">
                                    <Accordion.Header bsPrefix="acc-text">Lorem ipsum dolor sit amet, consectetue?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5" bsPrefix="acc-item">
                                    <Accordion.Header bsPrefix="acc-text">Lorem ipsum dolor sit amet, consectetue?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6" bsPrefix="acc-item">
                                    <Accordion.Header bsPrefix="acc-text">Lorem ipsum dolor sit amet, consectetue?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>


        </div>
    );
}

export default FAQPage;