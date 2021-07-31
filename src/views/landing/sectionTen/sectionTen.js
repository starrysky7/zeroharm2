import './sectionTen.css';
import * as ReactBootStrap from "react-bootstrap";

function sectionTen() {
  return (
    <div className="section10">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col sm={12} md={5} >
            <span className="title-text green">PORTFOLIO BRANDS</span>
        </ReactBootStrap.Col>
        
        <ReactBootStrap.Col sm={12} md={7}>
            <span className="default-text grey">The portfolio spans both <b>speciality</b> and <b>generic</b> offerings.<br/>
What makes this distinct is the depth of expertise in both.</span>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionTen;



