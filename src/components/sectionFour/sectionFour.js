import './sectionFour.css';
import * as ReactBootStrap from "react-bootstrap";

function sectionFour() {
  return (
    <div className="section section4">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={6} md={6}>
          <div className="content-container section4-content-container">
            <span class="title-text white">RIGHT FROM SOURCE</span>
            <span class="default-text white">Where does it all begin? Wherever it takes.<br />The North Eastern Hills of India,<br />a naturally organic region, offers the finest<br />direct farming sourcing. Here, sustainable<br />agricultural practices blend state of the art<br />solutions with natural processes. This ensures<br />we have high yield crop cycles and high<br />genetic purity. To this we place emphasis on<br />traceablity and transparency at all steps.</span>
            <button class="default-button white">KNOW MORE</button>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionFour;

