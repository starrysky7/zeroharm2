import './about-section5.css';
import * as ReactBootStrap from "react-bootstrap";

function AboutSection5() {
  return (
    <div className="section about-section5">
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={6} md={4}>
          <div className="content-container about-section5-content-container">
            <span class="title-text green align-right">NANO TO BE BIOAVAILABLE.</span>
            <span class="default-text grey align-right">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet
              dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper.<br /><br />
              Consequat. Duis autem vel eum iriure dolor in hendrerit
              in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan
              et iusto odio dignissim qui blandit praesent luptatum zzril
              delenit augue duis dolore te feugait nullaconsequat</span>
          </div>
        </ReactBootStrap.Col >

        <ReactBootStrap.Row>
          <ReactBootStrap.Col xs={12} md={0}>
            <img className="about-section5-image" src="machine.jpg" />
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Row>

    </div>
  );
}

export default AboutSection5;

