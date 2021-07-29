import './sectionEight.css';
import * as ReactBootStrap from "react-bootstrap";
//import  image from ".image_02.png"

function sectionEight() {
  return (
    <div className="section" >
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={5}>
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

        <ReactBootStrap.Col xs={12} md={7} >
          <div >
            <img className="machineImage" src="in test we trust.png" />
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionEight;





