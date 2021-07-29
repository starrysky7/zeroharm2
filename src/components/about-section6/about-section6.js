import './about-section6.css';
import * as ReactBootStrap from "react-bootstrap";

function AboutSection6() {
  return (
    <div className="section" >
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={6}>
          <div className="content-container section8-content-container">
            <span className="title-text green">IN TEST WE TRUST.</span>
            <span className="default-text grey">We are at the intersection of nature and efcacy.
            The tests are at the highest levels at Laboratories
            of international repute. <br /><br />

            A promise that lives up even in the generics range.
            For instance the Laboratory testing showed
            serum levels by more than ve times with our
            nano-capsulated generics over conventional generics.</span>
            <button class="default-button green">KNOW MORE</button>
          </div>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col xs={12} md={6} >
          <div >
            <img className="about-section6-image" src="in test we trust02.png" />
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

    </div>
  );
}

export default AboutSection6;





