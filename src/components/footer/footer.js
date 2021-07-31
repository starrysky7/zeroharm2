import './footer.css';
import * as ReactBootStrap from "react-bootstrap";

function Footer() {
    return (
        <div>
            <ReactBootStrap.Row>

                <ReactBootStrap.Col xs={12} md={5} className="section14-left">
                    <div className="content-container">
                        <span className="title-text white">CONTACT US</span>
                        <span className="default-text white">Zeroharm Sciences Private Limited<br />Unit B23, Phase II, Technocrats Industrial Estate,<br />Balanagar, Hyderabad - 500 037. India</span>
                    </div>
                </ReactBootStrap.Col>

                <ReactBootStrap.Col xs={12} md={7} >
                    <div className="form-container">
                        <input className="form-field" type="text" placeholder="Your Name(required)" />
                        <input className="form-field" type="text" placeholder="Your Email(required)" />
                        <input className="form-field" type="text" placeholder="Subject" />
                        <input className="form-field" type="text" placeholder="Your Message" />
                        <button className="default-button green">SUBMIT</button>
                    </div>
                </ReactBootStrap.Col>

            </ReactBootStrap.Row>

        </div>
    );
}

export default Footer;