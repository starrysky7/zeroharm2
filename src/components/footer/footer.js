import './footer.css';
import * as ReactBootStrap from "react-bootstrap";
import { useState } from 'react';

function Footer() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function onSubmit() {

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
                        <input className="form-field" type="text" placeholder="Your Email(required)" value={email} onChange={e => { e.preventDefault(); setEmail(e.target.value) }} />
                        <input className="form-field" type="text" placeholder="Subject" value={subject} onChange={e => { e.preventDefault(); setSubject(e.target.value) }} />
                        <input className="form-field" type="text" placeholder="Your Message" value={message} onChange={e => { e.preventDefault(); setMessage(e.target.value) }} />
                        <button className="default-button green" onClick={e => { e.preventDefault(); onSubmit() }}>SUBMIT</button>
                    </div>
                </ReactBootStrap.Col>

            </ReactBootStrap.Row>

        </div>
    );
}

export default Footer;