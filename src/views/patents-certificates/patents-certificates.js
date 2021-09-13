import './patents-certificates.css';
import * as ReactBootStrap from "react-bootstrap";

function PatentsCertificatesPage() {
    return (
        <div className="section green-bg cert-section" >
            <div class="patents-certificates-container">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <div className="content-container">
                            <span className="title-text green pat-cert-heading">PATENTS & CERTIFICATES</span>
                            <span className="default-text grey align-left"><strong>Patent 1:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                            <span className="default-text grey align-left"><strong>Patent 2:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                            <span className="default-text grey align-left"><strong>Patent 3:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                            <br />
                            <div className="pat-cert-line"></div>
                            <br />
                            <ReactBootStrap.Row className="desktop">
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                <ReactBootStrap.Col xs={12} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                            </ReactBootStrap.Row>

                            <ReactBootStrap.Row className="mobile">
                                <ReactBootStrap.Row>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <br/>
                                <ReactBootStrap.Row>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                                <br/>
                                <ReactBootStrap.Row>
                                    <ReactBootStrap.Col xs={4} md={2} lg={1}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                                </ReactBootStrap.Row>
                            </ReactBootStrap.Row>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>


        </div>
    );
}

export default PatentsCertificatesPage;