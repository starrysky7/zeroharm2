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
            <span className="default-text grey align-right">Sustainability begins where we stand<br />We own the farms and work with the carefully selected farmer<br />partner who our long-term perspective.<br />The produce is superior, safe, traceable, and grown in an<br />ethical, consistent and sustained manner.</span>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default AboutSection3;




