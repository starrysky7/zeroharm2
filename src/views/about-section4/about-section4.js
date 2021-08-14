import './about-section4.css';
import * as ReactBootStrap from "react-bootstrap";
//import  image from ".image_02.png"

function AboutSection4() {
  return (
    <div className="section" >
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={6}>
          <div className="content-container about-section4-content-container">
            <span className="default-text grey">
              <b>How different is this from the
conventional method?</b><br /><br />
The existing solution defeats its reason for
existence as it evaporates some of the more potent
but volatile compounds and leaves behind harmful
chemical residues.<br /><br />
Aqueous extraction involves a higher outlay
which results in the purest and safest extracts.
The potent compounds remain
ensuring a higher efcacy, and there are
no chemical residues. </span>
          </div>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col xs={12} md={6} >
          <div >
            <img className="about-section6-image" src="machine.jpg" />
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

    </div>
  );
}

export default AboutSection4;





