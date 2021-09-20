import './about-section1.css';
import * as ReactBootStrap from "react-bootstrap";

function AboutSection1() {
  return (
    <div className="section">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col sm={12} md={8} >
          <img className="about-section1-image" src="GenomicsDNA.png" />
        </ReactBootStrap.Col>

        <ReactBootStrap.Col sm={12} md={4}>
          <div className="content-container section3-content-container">
            <span className="title-text green align-right">GENOMICS</span>
            <span className="default-text grey align-right">A complete human genome contains three billion
              base pairs of DNA, uniquely arranged to give individual
              characteristics and how each body works and what
              happens when illnesses occur. This has been the basis of a
              revolutionary move towards natural yet precision medicine.
              With this, we can detect disease long before any symptoms
              manifest and offer a solution that is without harm</span>
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

    </div>
  );
}

export default AboutSection1;