import React, { useState, useEffect } from 'react';
//

import LandingSection1 from '../../components/landing-section1/landing-section1';
import LandingSection2 from '../../components/sectionTwo/sectionTwo';
import LandingSection3 from '../../components/sectionThree/sectionThree';
import LandingSection4 from '../../components/sectionFour/sectionFour';
import LandingSection5 from '../../components/sectionFive/sectionFive';
import LandingSection6 from '../../components/sectionSix/sectionSix';
import LandingSection7 from '../../components/sectionSeven/sectionSeven';
import LandingSection8 from '../../components/sectionEight/sectionEight';
import LandingSection9 from '../../components/sectionNine/sectionNine';
import LandingSection10 from '../../components/sectionTen/sectionTen';
import LandingSection11 from '../../components/sectionEleven/sectionEleven';
import LandingSection12 from '../../components/sectionTwelve/sectionTwelve';
import LandingSection13 from '../../components/sectionThirteen/sectionThirteen';
import LandingSection14 from '../../components/sectionFourteen/sectionFourteen';
//import Nav from '../../components/nav/nav';
import './landing.css';

function Landing() {

  const [scrollValue, setScrollValue] = useState(0)

  function getScrollPercent() {
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScrollValue(getScrollPercent())
    })
  })
  return (
    <div className="landing">
      <LandingSection1/>
      <LandingSection2 scrollValue={scrollValue}/>
      <LandingSection3/>
      <LandingSection4/>
      <LandingSection5/>
      <LandingSection6/>
      <LandingSection7 scrollValue={scrollValue}/>
      <LandingSection9/>
    <LandingSection8/>
    <LandingSection10/>
    <LandingSection11/>
    <LandingSection12/>
    <LandingSection13/>
    <LandingSection14/>
    
   
    
 
    </div>
  );
}

export default Landing;
//       <LandingSection8/>
//      <LandingSection9/>
//      <LandingSection10/>
//      <LandingSection11/>
//         <LandingSection12/>
//        <LandingSection13/>
//      <LandingSection6/>
//      <LandingSection7 scrollValue={scrollValue}/>
//      <LandingSection9/>      
//      <LandingSection8/>
//      <LandingSection10/>
//      <LandingSection11/>
//      <LandingSection12/>
//      <LandingSection13/>
//      <LandingSection14/>