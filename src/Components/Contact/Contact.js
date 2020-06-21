import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import '../../Pages/App/App.css';

function Contact(props) {
	return (
		<section id="contact" style={{padding: '75px', alignItems: 'center', alignContent: 'center'}}>
            <Container className="d-flex d-xl-flex justify-content-center justify-content-xl-center">
                <Row>
                    <Col>
                        <p className="d-flex justify-content-center like-what-you-saw wow fadeInUp" data-wow-delay="0.5s">Liked what you saw? Want to get in touch?</p>
                        <p className="contact-me wow fadeInUp" data-wow-delay="0.5s">Contact me!</p>
                        <p className="contact-me wow fadeInUp" data-wow-delay="0.5s">I'll be in touch with you soon <span role="img" aria-label="cool">😎</span></p>
                        <Button id="emailBtn" href="mailto:ajay.sarjoo@outlook.com" className="btn btn-primary border-light wow zoomIn" data-wow-delay="0.5s">Reach Out</Button>
                    </Col>
                </Row>
                
            </Container>
        </section>
	);
}

export default Contact;