import React, { useState, useEffect } from 'react';
import AboutSection1 from '../../components/about-section1/about-section1';
import AboutSection2 from '../../components/about-section2/about-section2';
import AboutSection3 from '../../components/about-section3/about-section3';
import AboutSection4 from '../../components/about-section4/about-section4';
import AboutSection5 from '../../components/about-section5/about-section5';
import AboutSection6 from '../../components/about-section6/about-section6';
import './home.css';

function AboutPage() {

  return (
    <div className="about-page">
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
    </div>
  );
}

export default AboutPage;