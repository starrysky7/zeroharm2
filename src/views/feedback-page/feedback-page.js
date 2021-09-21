import './feedback-page.css';
import * as ReactBootStrap from "react-bootstrap";

function FeedbackPage() {
    return (
        <div className="section green-bg" >
            <div class="popup-section white-bg">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <span className="title-text green align-center">FEEDBACK</span>
                        <span className="default-text grey align-center">How would you rate your experience?</span>
                        <ReactBootStrap.Row xs={12} md={12} className="star-container">
                            <img src="/icons/icons8-star-60.png" className="star-img" />
                            <img src="/icons/icons8-star-60.png" className="star-img" />
                            <img src="/icons/icons8-star-60.png" className="star-img" />
                            <img src="/icons/icons8-star-60.png" className="star-img" />
                            <img src="/icons/icons8-star-60.png" className="star-img" />
                        </ReactBootStrap.Row>
                        <br />
                        <span className="default-styled-text grey align-left"><strong>Send us your feedback!</strong></span>
                        <br />
                        <span className="default-styled-text  grey align-left">Do you have a suggestion? Let us know in the field below</span>
                        <br />
                        <br />
                        <textarea className="feedback-text-area"></textarea>
                        <a class="default-button green margin-auto" href="#">KNOW MORE </a>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </div>
        </div>
    );
}

export default FeedbackPage;