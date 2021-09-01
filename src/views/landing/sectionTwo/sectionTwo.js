import './sectionTwo.css';
import * as ReactBootStrap from "react-bootstrap";
import { useState, useEffect, useRef } from 'react'
import anime from "animejs";

function SectionTwo(props) {

  const [anim, setAnim] = useState()
  const s2 = useRef();

  useEffect(() => {
    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) >= 425)
      setAnim(
        anime({
          targets: '.section2',
          'background-position-x': '80%',
          'background-position-y': '15%',
          easing: 'linear',
          autoplay: false
        })
      )

    else
      setAnim(
        anime({
          targets: '.section2',
          'background-position-x': '80%',
          'background-position-y': '15%',
          easing: 'linear',
          autoplay: false
        })
      )
  }, [setAnim]);

  useEffect(() => {
    if (!anim) return;

    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) >= 425)
      anim.seek(anim.duration * (props.scrollValue * 0.01));
    else
      anim.seek(anim.duration * (props.scrollValue * 0.01));
  }, [props.scrollValue, anim]);

  return (

    <div className="section section2" ref={s2} id="2">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={6} md={6}>
          <div className="content-container section2-content-container">
            <span class="section2-text default-text grey">CAN A CRAB CHOKE OVER A PLANT? <br /> YES, IF THE CRAB IS THE BIG C- CANCER.<br /> AND YES, IF THE CRAB IS DRIVEN BY NUTRIGENOMICS,<br /> BIG C AND D, DIABETES,<br /> HOW? <br /> NANOTECHNOLOGY AND BIOAVAILABILITY <br />PRE-EMPT. PREVENT, AND YES, CURE.<br />PROVEN EFFICACY IN CLINICAL TRIALS.<br /> IN VITRO, IN VIVO.<br />NATURE AS EFFECTIVE AS PHARMA.<br />SWALLOW THAT.<br />OPEN, TRANSPARENT,<br />TEST IT WE DID.<br /> IT'S NOT HOW IT WAS DONE. IT'S HOW IT WILL BE DONE.<br />THE GENETIC CODE OF NATURE.<br />UNLOCKED, WITH PRECISION.<br />DISTILLED IN ONE WORD.<br />ZEROHARM<br /><span className="section2-small-text">primium non nocere</span></span>
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

    </div>
  );
}

export default SectionTwo;

