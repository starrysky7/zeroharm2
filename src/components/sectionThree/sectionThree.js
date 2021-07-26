import './sectionThree.css';
import * as ReactBootStrap from "react-bootstrap";
//import  image from ".image_02.png"

function sectionTwo() {
  return (
    <div className="section">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={6} md={8} >
          <img className="image" src="image_02.png" />
        </ReactBootStrap.Col>
        
        <ReactBootStrap.Col xs={6} md={4}>
          <div className="content-container section3-content-container">
            <span className="title-text green align-right">GENOMICS</span>
            <span className="default-text grey align-right">Precision medicine has always been the goal. <br /> It is now possible with the ability to sequence the human<br /> genome. Science has now made it possible to sequence<br /> around 20,000 genes that make up the blueprint of the<br />human body. A major step forward that has both informed<br /> and transformed how we can create personalised medicine.</span>
            <button class="default-button green float-right">KNOW MORE</button>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default sectionTwo;



