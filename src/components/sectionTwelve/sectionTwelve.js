import './sectionTwelve.css';
import * as ReactBootStrap from "react-bootstrap";

function sectionTwelve() {
  return (
    <div className="section12">
        <img className="section12-leaf" src="leaf final.png" />
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={6} md={5} >
            <span className="title-text green">CERTIFICATIONS.</span>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

      <ReactBootStrap.Row>

        <ReactBootStrap.Col sm={1} md={2} >
            <span className="default-text">GFSI [FSSC 2200, V 5.0]</span>
            <img className="cert-icon-small" src="certification/fssc.png" />
        </ReactBootStrap.Col>
        <ReactBootStrap.Col sm={1} md={3} >
            <span className="default-text">NSFCGMP [CFR111] &amp; FSMA [CFR117]</span>
            <img className="cert-icon" src="certification/nsf.png" />
            <img className="cert-icon" src="certification/fda.png" />
        </ReactBootStrap.Col>
        <ReactBootStrap.Col sm={12} md={4} >
            <span className="default-text">ORGANIC CERTIFICATIONS [NOP Organic, NPOP Organic, EU Organic]</span>
            <img className="cert-icon" src="certification/usda.jpg" />
            <img className="cert-icon" src="certification/india organic.png" />
            <img className="cert-icon" src="certification/star leaf.png" />
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>
     
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={2} md={1} >
            <span className="default-text">KOSHER</span>
            <img className="cert-icon" src="certification/k star.png" />
        </ReactBootStrap.Col>
        <ReactBootStrap.Col xs={2} md={1} >
            <span className="default-text">HALAL</span>
            <img className="cert-icon" src="certification/halal india.png" />
        </ReactBootStrap.Col>
        <ReactBootStrap.Col xs={2} md={1} >
            <span className="default-text">HACCP</span>
            <img className="cert-icon" src="certification/haccp.png" />
        </ReactBootStrap.Col>
        <ReactBootStrap.Col xs={4} md={2} >
            <span className="default-text">ISO 9001:2015</span>
            <img className="cert-icon" src="certification/iso.png" />
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionTwelve;