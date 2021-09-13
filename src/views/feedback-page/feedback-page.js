import './feedback-page.css';
import * as ReactBootStrap from "react-bootstrap";

function FeedbackPage() {
    return (
        <div className="section green-bg feedback-section" >
            <div class="feedback-container">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <div className="content-container">
                            <span className="title-text green pat-cert-heading">FEEDBACK</span>
                            <span className="default-text grey align-center">How would you rate your experience?</span>
                            <div className="centered-container">
                                <div className="star-container">
                                    <img src="/icons/icons8-star-60.png" className="star-img"/>
                                    <img src="/icons/icons8-star-60.png" className="star-img"/>
                                    <img src="/icons/icons8-star-60.png" className="star-img"/>
                                    <img src="/icons/icons8-star-60.png" className="star-img"/>
                                    <img src="/icons/icons8-star-60.png" className="star-img"/>
                                </div>
                            </div>
                            <br/>
                            <span className="feedback-text grey align-left"><strong>Send us your feedback!</strong></span>
                            <br/>
                            <span className="feedback-text grey align-left">Do you have a suggestion? Let us know in the field below</span>
                            <br/>
                            <br/>
                            <textarea className="feedback-text-area"></textarea>
                            <div className="centered-container">
                            <a class="default-button green" href="/genomics">KNOW MORE </a>
                            </div>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>
        </div>
    );
}

export default FeedbackPage;