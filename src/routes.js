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
import PatentsCertificatesPage from './views/patents-certificates/patents-certificates';
import FAQPage from './views/faq-page/faq-page';
import TermsAndConditionsPage from './views/terms-and-conditions/terms-and-conditions';
import PartnersPage from './views/partners-page/partners-page';
import FeedbackPage from './views/feedback-page/feedback-page';
import BlogPage from './views/blog/blog';
import SpecialityProductPage from './views/speciality-products/speciality-product-page';
import Ncm100 from './views/ncm-100/ncm-100';
import StickyChat from './components/sticky-chat/sticky-chat';
import Ncm100About from './views/ncm-100/ncm-100-about';
import Ncm100PhysiochemicalProperties from './views/ncm-100/ncm-100-physiochemical-properties';
import Ncm100ProductForms from './views/ncm-100/ncm-100-product-forms';
import Ncm100KnowMore from './views/ncm-100/ncm-100-know-more';

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

        <Route exact path="/patents-and-certificates">
          <PatentsCertificatesPage/>
        </Route>

        <Route exact path="/faq">
          <FAQPage/>
        </Route>

        <Route exact path="/terms-and-conditions">
          <TermsAndConditionsPage/>
        </Route>

        <Route exact path="/retail-partners">
          <PartnersPage/>
        </Route>

        <Route exact path="/feedback">
          <FeedbackPage/>
        </Route>

        <Route exact path="/blog">
          <BlogPage/>
        </Route>

        <Route exact path="/speciality-ingredients">
          <SpecialityProductPage/>
        </Route> 

        <Route exact path="/ncm-100-in-test-we-trust">
          <Ncm100/>
        </Route>

        <Route exact path="/ncm-100-about">
          <Ncm100About/>
        </Route>

        <Route exact path="/ncm-100-physiochemical-properties">
          <Ncm100PhysiochemicalProperties />
        </Route>

        <Route exact path="/ncm-100-product-forms">
          <Ncm100ProductForms />
        </Route>

        <Route exact path="/ncm-100-know-more">
          <Ncm100KnowMore/>
        </Route>

      </Switch>
       <Footer />
      <FooterEnd />
      <StickyChat />
    </div>
  );
};