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
            <span class="title-text white align-right">RIGHT FROM SOURCE</span>
            <span class="default-text white align-right">Where does it all begin? Wherever it takes.<br />The North Eastern Hills of India,<br />a naturally organic region, offers the finest<br />direct farming sourcing. Here, sustainable<br />agricultural practices blend state of the art<br />solutions with natural processes. This ensures<br />we have high yield crop cycles and high<br />genetic purity. To this we place emphasis on<br />traceablity and transparency at all steps.</span>
            <button class="default-button white float-right">KNOW MORE</button>
          </div>
        </ReactBootStrap.Col >

      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionNine;

