import './partners-page.css';
import * as ReactBootStrap from "react-bootstrap";

function PartnersPage() {
    return (
        <div className="section green-bg" >
            <div className="popup-section white-bg">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <span className="title-text green align-center">RETAIL PARTNERS</span>
                        <span className="default-text grey align-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
                        <ReactBootStrap.Row className="align-center">
                            <ReactBootStrap.Col xs={6} md={3}><img src="/assets/Group 22.png" className="partner-img" /></ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={6} md={3}><img src="/assets/Group 22.png" className="partner-img" /></ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={6} md={3}><img src="/assets/Group 22.png" className="partner-img" /></ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={6} md={3}><img src="/assets/Group 22.png" className="partner-img" /></ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        <span className="default-text grey margin-left-20">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy hiu
                            Enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobor myg
                            nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in the
                            Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu nghmu
                            nulla facilisis at vero eros et accumsan.Et iusto odio dignissim qui blandit bhg
                            praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem
                            ipsum dolor sit amet, cons ectetuer. Duis autem vel eum iriure dolor in hendrerit
                            in vulputate velit esse molestie consequat, vel illum dolore eu feugiat. vel illum
                            dolore eu nghmu nulla facilisis at vero eros et accumsan.Et iusto odio dignissim
                            qui blandit bhg praesent luptatum zzril delenit augue duis dolore te feugait nulla
                            facilisi. Lorem ipsum dolor sit amet, cons ectetuer. Duis autem vel eum iriure
                            dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.

                        </span>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>
        </div>
    );
}

export default PartnersPage;