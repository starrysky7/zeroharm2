import './about-section3.css';
import * as ReactBootStrap from "react-bootstrap";
//import  image from ".image_02.png"

function AboutSection3() {
  return (
    <div className="section">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col sm={12} md={7} >
          <img className="about-section3-image" src="sustainable.png" />
        </ReactBootStrap.Col>
        
        <ReactBootStrap.Col sm={12} md={5}>
          <div className="content-container section5-content-container">
            <span className="title-text green align-right">ACTIONABLE AND SUSTAINABLE</span>
            <span className="default-text grey align-right">Nature keeps changing and so do we. We innovate with
new age and precision farming methods for higher yields
in shorter crop cycles, eco-friendly techniques that
ensure a zero harm environment and are consistently
output ready for extraction through the year. <br/><br/>
The disruptive non-solvent extraction is chemical 
residue-free. This ensures a better commercial realization for 
the farmer &amp; their families and a smile from Mother Earth.<br/><br/> 
The sustainability story continues. 50% of the packaging is
bio-degradable and the rest is either reusable or recyclable.
The packs are tamper-evident, child-proof and shelf life 
protected, assuring total safety.</span>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default AboutSection3;




