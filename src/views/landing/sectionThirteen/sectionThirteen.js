import './sectionThirteen.css';
import * as ReactBootStrap from "react-bootstrap";

function sectionThirteen() {
    return (
        <div class="section13" id="13">
            <ReactBootStrap.Row>

                <ReactBootStrap.Col xs={6} md={8} >
                    <div className="content-container">
                    <span className="title-text grey">Primum non nocere</span>
                    <span className="default-text grey">The Latin words for medical slogan <b>"First do no harm”</b>,<br /> a fundamental medical precept of Hippocrates (ca. 460-ca.377 B.C.)</span>
                    </div>
                </ReactBootStrap.Col>

                <ReactBootStrap.Col xs={6} md={4} >
                        <img className="dna-tree-image" src="dna tree.png" />
                </ReactBootStrap.Col>

            </ReactBootStrap.Row>

        </div>
    );
}

export default sectionThirteen;