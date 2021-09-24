import './sectionThree.css';
import * as ReactBootStrap from "react-bootstrap";
import {useEffect} from 'react'
//import  image from ".image_02.png"

function SectionTwo(props) {
  
  useEffect(() =>{

    if(document.getElementById('3').getBoundingClientRect().y<0){
      props.setSection('genomics')
    }

  }, [props.scrollValue])

  return (
    <div className="section" id="3">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={7} >
          <img className="section3-image" src="circle-anim.gif" />
        </ReactBootStrap.Col>
        
        <ReactBootStrap.Col xs={12} md={5}>
          <div className="content-container section3-content-container">
            <span className="title-text green align-right">GENOMICS</span>
            <span className="default-text grey align-right">Precision medicine has always been the goal. It is now possible with the ability to sequence the human genome. Science has now made it possible to sequence around 20,000 genes that make up the blueprint of thehuman body. A major step forward that has both informed and transformed how we can create personalised medicine.</span>
            <a class="default-button green float-right" href="/genomics">KNOW MORE </a>
          </div>
        </ReactBootStrap.Col>
      
      </ReactBootStrap.Row>

    </div>
  );
}

export default SectionTwo;



