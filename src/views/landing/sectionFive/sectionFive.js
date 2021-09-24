import './sectionFive.css';
import * as ReactBootStrap from "react-bootstrap";
import {useEffect} from 'react';
//import  image from ".image_02.png"

function SectionFive(props) {

  useEffect(() =>{

    if(document.getElementById('5').getBoundingClientRect().y<0){
      props.setSection('actionable')
    }

  }, [props.scrollValue])

  return (
    <div className="section" id="5">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={6}>
          <img className="globeimage" src="globe.gif" />
        </ReactBootStrap.Col>
      <ReactBootStrap.Col xs={0} md={1} >
    </ReactBootStrap.Col>
        
        <ReactBootStrap.Col xs={12} md={5}>
          <div className="content-container section5-content-container">
            <span className="title-text green align-right">ACTIONABLE AND SUSTAINABLE</span>
            <span className="default-text grey align-right">Sustainability begins where we stand<br />We own the farms and work with the carefully selected farmer<br />partner who our long-term perspective.<br />The produce is superior, safe, traceable, and grown in an<br />ethical, consistent and sustained manner.</span>
            <a href="/actionable" class="default-button green float-right">KNOW MORE</a>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default SectionFive;




