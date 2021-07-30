import './sectionFive.css';
import * as ReactBootStrap from "react-bootstrap";
//import  image from ".image_02.png"

function sectionFive() {
  return (
    <div className="section">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={6} >
          <img className="globeimage" src="globe.gif" />
        </ReactBootStrap.Col>
      <ReactBootStrap.Col xs={0} md={1} >
    </ReactBootStrap.Col>
        
        <ReactBootStrap.Col xs={12} md={5}>
          <div className="content-container section5-content-container">
            <span className="title-text green align-right">ACTIONABLE AND SUSTAINABLE</span>
            <span className="default-text grey align-right">Sustainability begins where we stand<br />We own the farms and work with the carefully selected farmer<br />partner who our long-term perspective.<br />The produce is superior, safe, traceable, and grown in an<br />ethical, consistent and sustained manner.</span>
            <button class="default-button green float-right">KNOW MORE</button>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionFive;




