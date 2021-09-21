import React, { useState, useEffect } from 'react';
import LandingSection1 from './landing-section1/landing-section1';
import LandingSection2 from './sectionTwo/sectionTwo';
import LandingSection3 from './sectionThree/sectionThree';
import LandingSection4 from './sectionFour/sectionFour';
import LandingSection5 from './sectionFive/sectionFive';
import LandingSection6 from './sectionSix/sectionSix';
import LandingSection7 from './sectionSeven/sectionSeven';
import LandingSection8 from './sectionEight/sectionEight';
import LandingSection9 from './sectionNine/sectionNine';
import LandingSection10 from './sectionTen/sectionTen';
import LandingSection11 from './sectionEleven/sectionEleven';
import LandingSection12 from './sectionTwelve/sectionTwelve';
import LandingSection13 from './sectionThirteen/sectionThirteen';
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
      <LandingSection1 />
      <LandingSection2 scrollValue={scrollValue} />
      <LandingSection4 />
      <LandingSection5 />
      <LandingSection6 />
      <LandingSection7 scrollValue={scrollValue} />
      <LandingSection9 />
      <LandingSection8 />
      <LandingSection3 />
      {/* <LandingSection10 /> */}
      {/* <LandingSection11 /> */}
      {/* <LandingSection12 /> */}
      <LandingSection13 />
    </div>
  );
}

export default Landing;
