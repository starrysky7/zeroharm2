import './about-section2.css';
import * as ReactBootStrap from "react-bootstrap";

function AboutSection2() {
  return (
    <div className="section about-section2">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={6} md={6}>
          <div className="content-container section4-content-container">
            <span class="title-text white">RIGHT FROM SOURCE</span>
            <span class="default-text white">Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit, sed diam nonummy nibh euismod 
tincidunt ut laoreet dolore magna aliquam erat 
volutpat. Ut wisi enim ad minim veniam, quis 
nostrud exerci tation ullamcorper suscipit lobortis 
nisl ut aliquip ex ea commodo consequat. Duis 
autem vel eum iriure dolor in hendrerit in vulputate 
velit esse molestie consequat</span>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default AboutSection2;

