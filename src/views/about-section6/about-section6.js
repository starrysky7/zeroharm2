import './about-section6.css';
import * as ReactBootStrap from "react-bootstrap";

function AboutSection6() {
  return (
    <div className="section" >
      <ReactBootStrap.Row>

        <ReactBootStrap.Col xs={12} md={6}>
          <div className="content-container section8-content-container">
            <span className="title-text green">IN TEST WE TRUST.</span>
            <span className="default-text grey">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
sed diam nonummy nibh euismod tincidunt ut laoreet 
dolore magna aliquam erat volutpat. Ut wisi enim ad 
minim veniam, quis nostrud exerci tation ullamcorper. <br/><br/>
Consequat. Duis autem vel eum iriure dolor in hendrerit 
in vulputate velit esse molestie consequat, vel illum 
dolore eu feugiat nulla facilisis at vero eros et accumsan 
et iusto odio dignissim qui blandit praesent luptatum zzril 
delenit augue duis dolore te feugait nullaconsequat</span>
            <button class="default-button green">KNOW MORE</button>
          </div>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col xs={12} md={6} >
          <div >
            <img className="about-section6-image" src="in test we trust02.png" />
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

    </div>
  );
}

export default AboutSection6;





