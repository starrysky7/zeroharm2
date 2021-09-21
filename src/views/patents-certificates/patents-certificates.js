import './patents-certificates.css';
import * as ReactBootStrap from "react-bootstrap";

function PatentsCertificatesPage() {
    return (
        <div className="green-bg" >
            <div class="popup-section white-bg">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                            <span className="title-text green align-center">PATENTS &amp; CERTIFICATES</span>
                            <span className="default-text grey align-left margin-left-20"><strong>Patent 1:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                            <span className="default-text grey align-left margin-left-20"><strong>Patent 2:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                            <span className="default-text grey align-left margin-left-20"><strong>Patent 3:</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim minim veniam, quis nostrud exerci tation ullamcorper</span>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={4} md={2}><img src="/certification/iso.png" className="certif-img" /></ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={4} md={2}><img src="/certification/Rectangle 65.png" className="certif-img" /></ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={4} md={2}><img src="/certification/Group 149.png" className="certif-img" /></ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={4} md={2}><img src="/certification/Group 148.png" className="certif-img" /></ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={4} md={2}><img src="/certification/Rectangle 63.png" className="certif-img" /></ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={4} md={2}><img src="/certification/Rectangle 64.png" className="certif-img" /></ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={4} md={2}><img src="/certification/Group 151.png" className="certif-img" /></ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>


        </div>
    );
}

export default PatentsCertificatesPage;