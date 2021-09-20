import './sectionEleven.css';
import Carousel from 'react-bootstrap/Carousel'
import { useEffect, useState } from 'react';
import * as ReactBootStrap from "react-bootstrap";

function SectionEleven() {


    return (
        <div className="section">

            <Carousel>
                <Carousel.Item>
                    <div className="section11-carousel-item">
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col xs={12} md={6}>
                                <div >
                                    <img className="bottleImage" src="bottles/bottle04.png" />
                                </div>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={6} className="solid-bg-purple">
                                <div className="content-container">
                                    <span className="default-text white">Speciality formulations address life threatening
                                    conditions like Cancer. The holistic approach,
                        focus and depth is reflected even in the name. <br /><b>Holo Oncolis</b></span>
                                </div>
                            </ReactBootStrap.Col>

                        </ReactBootStrap.Row>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="section11-carousel-item">
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col xs={12} md={6}>
                                <div >
                                    <img className="bottleImage bottle-image-small" src="bottles/bottle01.png" />
                                </div>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col xs={12} md={6} className="solid-bg-purple">
                                <div className="content-container">
                                    <span className="default-text white"><b>Holo Oncolis Sublingual range</b><br />for higher efficacy.</span>
                                </div>
                            </ReactBootStrap.Col>

                        </ReactBootStrap.Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="section11-carousel-item">
                        <ReactBootStrap.Row>

                            <ReactBootStrap.Col xs={12} md={6}>
                                <div >
                                    <img className="bottleImage" src="bottles/bottle03.png" />
                                </div>
                            </ReactBootStrap.Col>

                            <ReactBootStrap.Col xs={12} md={6} className="solid-bg-blue">
                                <div className="content-container">
                                    <span className="default-text white">In the generic range, the promise is
                                    anything but generic!
                                    Each offering amongst the highest purity,
                            100% bio-availability, precision and higher efficacy.<br /><br />
                                        <b>Holistic Curcumin</b></span>
                                </div>
                            </ReactBootStrap.Col>

                        </ReactBootStrap.Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="section11-carousel-item">
                        <ReactBootStrap.Row>

                            <ReactBootStrap.Col xs={12} md={6}>
                                <div >
                                    <img className="bottleImage" src="bottles/bottle02.png" />
                                </div>
                            </ReactBootStrap.Col>

                            <ReactBootStrap.Col xs={12} md={6} className="solid-bg-blue">
                                <div className="content-container">
                                    <span className="default-text white">In the generic range, the promise is
                                    anything but generic!
                                    Each offering amongst the highest purity,
                            100% bio-availability, precision and higher efficacy.<br /><br />
                                        <b>Holistic Ashwagandha</b></span>
                                </div>
                            </ReactBootStrap.Col>

                        </ReactBootStrap.Row>
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default SectionEleven;




// <img className="section11-left-arrow" src="left.png" onClick={e=>{e.preventDefault();carouselPrev()}}/>
//            <img className="section11-right-arrow" src="right.png" onClick={e=>{e.preventDefault();carouselNext()}}/>
//            <div className="section11-carousel-item">
//                <ReactBootStrap.Row>
//
//                    <ReactBootStrap.Col xs={12} md={6}>
//                        <div >
//                            <img className="bottleImage" src="bottles/bottle04.png" />
//                        </div>
//                    </ReactBootStrap.Col>
//
//                    <ReactBootStrap.Col xs={12} md={6} className="solid-bg-purple">
//                        <div className="content-container">
//                            <span className="default-text white">Speciality formulations address life threatening
//                            conditions like Cancer. The holistic approach,
//                        focus and depth is reflected even in the name. <br/><b>Holo Oncolis</b></span>
//                        </div>
//                    </ReactBootStrap.Col>
//
//                </ReactBootStrap.Row>
//            </div>
//
//            <div className="section11-carousel-item">
//                <ReactBootStrap.Row>
//
//                    <ReactBootStrap.Col xs={12} md={6}>
//                        <div >
//                            <img className="bottleImage bottle-image-small" src="bottles/bottle01.png" />
//                        </div>
//                    </ReactBootStrap.Col>
//
//                    <ReactBootStrap.Col xs={12} md={6} className="solid-bg-purple">
//                        <div className="content-container">
//                            <span className="default-text white"><b>Holo Oncolis Sublingual range</b><br />for higher efficacy.</span>
//                        </div>
//                    </ReactBootStrap.Col>
//
//                </ReactBootStrap.Row>
//            </div>
//
//            <div className="section11-carousel-item">
//                <ReactBootStrap.Row>
//
//                    <ReactBootStrap.Col xs={12} md={6}>
//                        <div >
//                            <img className="bottleImage" src="bottles/bottle03.png" />
//                        </div>
//                    </ReactBootStrap.Col>
//
//                    <ReactBootStrap.Col xs={12} md={6} className="solid-bg-blue">
//                        <div className="content-container">
//                            <span className="default-text white">In the generic range, the promise is
//                            anything but generic!
//                            Each offering amongst the highest purity,
//                            100% bio-availability, precision and higher efficacy.<br /><br />
//                                <b>Holistic Curcumin</b></span>
//                        </div>
//                    </ReactBootStrap.Col>
//
//                </ReactBootStrap.Row>
//            </div>
//
//            <div className="section11-carousel-item">
//                <ReactBootStrap.Row>
//
//                    <ReactBootStrap.Col xs={12} md={6}>
//                        <div >
//                            <img className="bottleImage" src="bottles/bottle02.png" />
//                        </div>
//                    </ReactBootStrap.Col>
//
//                    <ReactBootStrap.Col xs={12} md={6} className="solid-bg-blue">
//                        <div className="content-container">
//                            <span className="default-text white">In the generic range, the promise is
//                            anything but generic!
//                            Each offering amongst the highest purity,
//                            100% bio-availability, precision and higher efficacy.<br /><br />
//                                <b>Holistic Ashwagandha</b></span>
//                        </div>
//                    </ReactBootStrap.Col>
//
//                </ReactBootStrap.Row>
//            </div>
//const [selected, setSelected] = useState(0)
//
//    function carouselNext(){
//        for(var i=0; i<document.getElementsByClassName('section11-carousel-item').length; i++){
//            document.getElementsByClassName('section11-carousel-item')[i].style.display="none"
//        }
//
//        if(selected==document.getElementsByClassName('section11-carousel-item').length-1){
//            document.getElementsByClassName('section11-carousel-item')[0].style.display="block"
//            setSelected(0)
//        }
//        else{
//            document.getElementsByClassName('section11-carousel-item')[selected+1].style.display="block"
//            setSelected(selected+1)
//        }
//    }
//
//    function carouselPrev(){
//        for(var i=0; i<document.getElementsByClassName('section11-carousel-item').length; i++){
//            document.getElementsByClassName('section11-carousel-item')[i].style.display="none"
//        }
//
//        if(selected==0){
//            document.getElementsByClassName('section11-carousel-item')[document.getElementsByClassName('section11-carousel-item').length-1].style.display="block"
//            setSelected(document.getElementsByClassName('section11-carousel-item').length-1)
//        }
//        else{
//            document.getElementsByClassName('section11-carousel-item')[selected-1].style.display="block"
//            setSelected(selected-1)
//        }
//
//    }