import React from 'react';
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
//import Nav from '../../components/nav/nav';
//import './landing.css';

function Landing() {
  return (
    <div className="landing">
      <LandingSection1/>
      <LandingSection2/>
      <LandingSection3/>
      <LandingSection4/>
      <LandingSection5/>
      <LandingSection6/>
      <LandingSection7/>
      <LandingSection8/>
      <LandingSection9/>
      
    </div>
  );
}

export default Landing;