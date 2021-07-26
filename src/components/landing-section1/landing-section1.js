import './landing-section1.css';
import * as ReactBootStrap from "react-bootstrap";

function LandingSection1() {
  return (
    <div className="section section1">
      <ReactBootStrap.Row>
        
        <ReactBootStrap.Col xs={6} md={4}>
          <span className="landing-section1-text1 title-text green">WHERE IT <br /> BEGINS.</span>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col xs={6} md={5}>
          <div className="leaf-anim-container">
            <img className="leaf-static-img" src="leaf final.png" />
            <img className="leaf-anim-img" src="leaf final.png" />
          </div>
        </ReactBootStrap.Col>
        
        <ReactBootStrap.Col xs={6} md={3}>
          <span className="landing-section1-text2 default-text grey align-right">Ensure lasting health and well-being of humanity by pre-empting diseases and offering preventive, precision, natural medication.</span>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

    </div>
  );
}

export default LandingSection1;