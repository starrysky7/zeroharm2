import React from 'react';
import Nav from './components/nav/nav'
import { Route, Switch, Redirect } from 'react-router-dom';
import Landing from './views/landing/landing';
import AboutSection1 from './views/about-section1/about-section1';
import AboutSection2 from './views/about-section2/about-section2';
import AboutSection3 from './views/about-section3/about-section3';
import AboutSection4 from './views/about-section4/about-section4';
import AboutSection5 from './views/about-section5/about-section5';
import AboutSection6 from './views/about-section6/about-section6';
import Footer from './components/footer/footer';
import FooterEnd from './components/footer-end/footer-end';

export const Routes = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/home">
          <Landing />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/genomics">
          <AboutSection1 />
        </Route>

        <Route exact path="/source">
          <AboutSection2 />
        </Route>

        <Route exact path="/actionable">
          <AboutSection3 />
        </Route>

        <Route exact path="/test">
          <AboutSection6 />
        </Route>

        <Route exact path="/nano">
          <AboutSection5 />
        </Route>

        <Route exact path="/extract">
          <AboutSection4 />
        </Route>

      </Switch>
      <Footer />
      <FooterEnd />
    </div>
  );
};