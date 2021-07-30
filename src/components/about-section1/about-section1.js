import './about-section1.css';
import * as ReactBootStrap from "react-bootstrap";

function AboutSection1() {
  return (
    <div className="section">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col sm={12} md={8} >
          <img className="about-section1-image" src="genomics DNA.png" />
        </ReactBootStrap.Col>
        
        <ReactBootStrap.Col sm={12} md={4}>
          <div className="content-container section3-content-container">
            <span className="title-text green align-right">GENOMICS</span>
            <span className="default-text grey align-right">Precision medicine has always been the goal.  It is now possible with the ability to sequence the human genome. Science has now made it possible to sequence around 20,000 genes that make up the blueprint of the human body. A major step forward that has both informed and transformed how we can create personalised medicine.</span>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default AboutSection1;