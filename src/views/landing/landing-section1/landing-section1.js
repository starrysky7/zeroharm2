import './landing-section1.css';
import * as ReactBootStrap from "react-bootstrap";
import {useState, useEffect} from 'react';

function LandingSection1(props) {
  useEffect(() =>{

    if(document.getElementById('1').getBoundingClientRect().y<0){
      props.setSection('begin')
    }

  }, [props.scrollValue])

  return (
    <div className="section section1" id="1">
      <ReactBootStrap.Row className="desktop">

        <ReactBootStrap.Col sm={3} md={3} xs={12}>
          <div>
            <span className="landing-section1-text1 title-text green">WHERE IT <br /> BEGINS.</span>
          </div>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col sm={6} md={6} xs={12}>
          <div className="leaf-anim-container">
            {/* <img className="leaf-static-img" src="leaf final.png" />
            <img className="leaf-anim-img" src="leaf final.png" /> */}
            <img className="leaf-img" src="Leaf.gif" />
          </div>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col sm={3} md={3}  >
          <div>
            <span className="landing-section1-text2 default-text grey align-right">Ensure lasting health and well-being of humanity by pre-empting diseases and offering preventive, precision, natural medication.</span>
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>


      <ReactBootStrap.Row className="mobile">

        <ReactBootStrap.Col sm={3} md={3} xs={12}>
          <div>
            <span className="landing-section1-text1 title-text green">WHERE IT <br /> BEGINS.</span>
          </div>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col sm={3} md={3}  >
          <div>
            <span className="landing-section1-text2 default-text grey align-right">Ensure lasting health and well-being of humanity by pre-empting diseases and offering preventive, precision, natural medication.</span>
          </div>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col sm={6} md={6} xs={12}>
          <div className="leaf-anim-container">
            {/* <img className="leaf-static-img" src="leaf final.png" />
            <img className="leaf-anim-img" src="leaf final.png" /> */}
            <img className="leaf-img" src="LEAFGIF2small.gif" />
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>


    </div>
  );
}

export default LandingSection1;