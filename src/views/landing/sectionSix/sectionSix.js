import './sectionSix.css';
import * as ReactBootStrap from "react-bootstrap";

function sectionSix() {
  return (
    <div className="section section6">
      <ReactBootStrap.Row className="desktop">

        <ReactBootStrap.Col xs={6} md={6}>
          <div className="content-container section6-content-container">
            <span class="title-text white">OWNING TRACEABILITY</span>
            <span class="default-text white">With ownership of the entire valuechain<br />we document, record and identify the<br />product right through. From seed to<br />consumption, there is complete<br />traceability</span>
            <a href="#" class="default-button white">KNOW MORE</a>
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

      <ReactBootStrap.Row className="mobile">

        <ReactBootStrap.Col xs={6} md={6}>
          <div className="content-container section6-content-container">
            <span class="title-text white">OWNING TRACEABILITY</span>
            <span class="default-text white">With ownership of the entire valuechain<br />we document, record and identify the<br />product right through. From seed to<br />consumption, there is complete<br />traceability</span>
            <span class="default-button white">KNOW MORE</span>
          </div>
        </ReactBootStrap.Col>
        <ReactBootStrap.Col xs={6} md={6}>
          <div>
            <img src="/phone-min.gif" className="section6-image"/>
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionSix;





