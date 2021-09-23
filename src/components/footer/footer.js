import './footer.css';
import * as ReactBootStrap from "react-bootstrap";
import { useState } from 'react';

function Footer() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function onSubmit() {

        var validated = 1;
        if (!name) {
            validated = 0;
            document.getElementById("name-empty").style.display="block";
        }

        if (!name.match(/^[A-Za-z]+$/)) {
            validated = 0;
            document.getElementById("name-alpha").style.display="block";
        }

        if (!email) {
            validated = 0;
            document.getElementById("email-empty").style.display="block";
        }
        if (!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            validated = 0;
            document.getElementById("email-invalid").style.display="block";
        }

        if (!subject) {
            validated = 0;
            document.getElementById("subject-empty").style.display="block";
        }
     
        if (!message) {
            validated = 0;
            document.getElementById("message-empty").style.display="block";
        }


        if (validated == 1) {
            window.emailjs.send(
                'service_qnho4q5', 'template_sgayh4k',
                {
                    subject: subject,
                    from_name: name,
                    from_email: email,
                    message: message,
                    reply_to: email
                }
            ).then(res => {
                console.log('Email successfully sent!')
                alert('message submitted')
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
            })
                // Handle errors here however you like, or use a React error boundary
                .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
        }
       
    }

    return (
        <div className="footer">
            <ReactBootStrap.Row>

                <ReactBootStrap.Col xs={12} md={5} className="footer-left">
                    <div className="content-container">
                        <span className="title-text white">CONTACT US</span>
                        <span className="default-text white">Zeroharm Sciences Private Limited<br />Unit B23, Phase II, Technocrats Industrial Estate,<br />Balanagar, Hyderabad - 500 037. India</span>
                        <div className="social-links">
                            <a href="#" className="social-links-item"><img src="/icons/facebook-icon.png" /></a>
                            <a href="#" className="social-links-item"><img src="/icons/instagram-icon.png" /></a>
                            <a href="#" className="social-links-item"><img src="/icons/linkedin-icon.png" /></a>
                        </div>
                    </div>
                </ReactBootStrap.Col>

                <ReactBootStrap.Col xs={12} md={7} >
                    <div className="form-container">
                        <input className="form-field" type="text" placeholder="Your Name(required)" value={name} onChange={e => { e.preventDefault(); setName(e.target.value) }} />
                        <div className="form-field-validation" id="name-empty">Name field cannot be empty</div>
                        <div className="form-field-validation" id="name-alpha">Names can contain only alphabets </div>
                        <input className="form-field" type="text" placeholder="Your Email(required)" value={email} onChange={e => { e.preventDefault(); setEmail(e.target.value) }} />
                        <div className="form-field-validation" id="email-empty">Email field cannot be empty</div>
                        <div className="form-field-validation" id="email-invalid">Enter Valid Email</div>
                        <input className="form-field" type="text" placeholder="Subject" value={subject} onChange={e => { e.preventDefault(); setSubject(e.target.value) }} />
                        <div className="form-field-validation" id="subject-empty">Subject field cannot be empty</div>
                        <input className="form-field" type="text" placeholder="Your Message" value={message} onChange={e => { e.preventDefault(); setMessage(e.target.value) }} />
                        <div className="form-field-validation" id="message-empty">Message field cannot be empty</div>
                        <button className="default-button green" onClick={e => { e.preventDefault(); onSubmit() }}>SUBMIT</button>
                    </div>
                </ReactBootStrap.Col>

            </ReactBootStrap.Row>

        </div>
    );
}

export default Footer;