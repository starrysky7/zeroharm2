import './sectionEight.css';
import * as ReactBootStrap from "react-bootstrap";
//import  image from ".image_02.png"

function sectionEight() {
  return (
    <div className="section" >
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={6}>
          <div className="content-container section8-content-container">
            <span className="title-text green">EXTRACT WITHOUT HARM.</span>
            <span className="default-text grey">The naturally pure produce must be taken<br />forward with a pure, natural extraction<br />process. We have a unique and proprietary<br />aqueous extraction process. This allows the<br />high levels of purity to be maintained and<br />is designed to global standards</span>
            <button class="default-button green">KNOW MORE</button>
          </div>
        </ReactBootStrap.Col>
        
        <ReactBootStrap.Col xs={12} md={6} >
          <div >
            <img className="machineImage" src="machine.jpg" />
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionEight;





