import './sectionSeven.css';
import * as ReactBootStrap from "react-bootstrap";


//import  image from ".image_02.png"

function sectionSeven() {
  return (
    <div className="section" >
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={7} >
          <div> <img className="flowerImage" src="flower.jpg" /> </div>
        </ReactBootStrap.Col>
        
        <ReactBootStrap.Col xs={12} md={5}>
          <div className="content-container section7-content-container">
            <span className="title-text green align-right">EXTRACT WITHOUT HARM.</span>
            <span className="default-text grey align-right">The naturally pure produce must be taken<br />forward with a pure, natural extraction<br />process. We have a unique and proprietary<br />aqueous extraction process. This allows the<br />high levels of purity to be maintained and<br />is designed to global standards</span>
            <button class="default-button green float-right">KNOW MORE</button>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionSeven;





