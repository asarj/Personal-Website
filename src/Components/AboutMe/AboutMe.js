import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../Pages/App/App.css';

function AboutMe() {

	return (
		<section id="about-me" style={{padding: '75px'}}>
            <h2 className="text-center section-header"><strong>ABOUT ME</strong></h2>
            <h2 className="text-center" style={{'font-size': '50px', 'height': '30px;'}}>&nbsp;</h2>
            <br />
            <Container style={{padding: '0px'}}>
                <Row>
                    <Col md="6">
                        <Image id="profile" src="/Images/ajay.jpg" className="wow fadeInUp" responsive/>
                    </Col>
                    <Col md="6" sm="20" xs="20">
                        <br className="mobile-break"></br>
                        <p id="profile-caption" className="text-left wow fadeInUp" data-wow-delay="0.5s">
                            Hello there! My name is <strong>Ajay Sarjoo</strong>. I'm a software engineer, passionate developer, and avid learner.&nbsp;<br/><br/>I've been programming since I was 13 years old, where I was first exposed to web development.
                            Since then, I've been exposed to various programming languages and techniques, and applied them to technical projects that help people make smarter decisions, automate the difficult and tedious work, and gain deeper
                            insights into their data.<br/><br/>I've collaborated with brilliant people to design and develop applications that provide inviting user experiences and incorporate smooth functionality. I've created products to help
                            customers trade stocks and make informed decisions about their health and well-being. I've integrated clever algorithms to automate difficult tasks at one of the largest internship providers in New York City. I've trained
                            NLP models and built internal webapps at the largest financial data institution in the world.<br/><br/>I strive to be the best version of myself by educating as much as possible and applying what I've learned to pave
                            the way for new and interesting opportunities.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
	);
}

export default AboutMe;