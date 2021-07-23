import LandingSection1 from '../../components/landing-section1/landing-section1';
import Nav from '../../components/nav/nav';
import './landing.css';

function Landing() {
  return (
    <div className="landing">
        <Nav />
        <LandingSection1 />
    </div>
  );
}

export default Landing;
