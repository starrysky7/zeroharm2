import './sectionNine.css';
import * as ReactBootStrap from "react-bootstrap";

function sectionNine() {
  return (
    <div className="section section9">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={8}>
        </ReactBootStrap.Col >

        <ReactBootStrap.Col xs={12} md={4}>
          <div className="content-container section9-content-container">
            <span class="title-text white align-right">NANO TO BE BIOAVAILABLE.</span>
            <span class="default-text white align-right">The next step in creating the formulation is no less.
The formulation unit harnesses proprietary nano technology
for higher saturation solubility, swift dissolution,
100% bioavailability and quicker therapeutic action. <br/><br/>
For instance, the particle size is below 50 nanometers in as 
part of our patented technology. This ensures that it is
retained despite body metabolism and nano sized particles 
evade the digestive enzymes and enter the blood stream
reaching parts of the body that need it.</span>
            <a href="/nano" class="default-button white float-right">KNOW MORE</a>
          </div>
        </ReactBootStrap.Col >

      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionNine;

