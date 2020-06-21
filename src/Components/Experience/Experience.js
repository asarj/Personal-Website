import React from 'react';
import { NavLink } from "react-router-dom";
import {Container, Card, Row, Col, Button} from 'react-bootstrap';
import '../../Pages/App/App.css';

function Experience(props) {
	return (
		<section id="experience" style={{padding: '75px', 'padding-top': '50px', 'padding-bottom': '50px',}}>
            <h2 className="text-center"><strong>EXPERIENCE</strong></h2>
            <br />
            <Container>
                <Row mt-5>
                    {props.experience && props.experience.map((exp, index) => (
                        <Col lg={4} mb={4} sm={20} grid-margin>
                            <Card mx-auto className="exp-card wow fadeInUp" data-wow-delay="0.5s">
                                <Card.Header>
                                    <img src={exp.image_url} className="company-ico" alt={exp.position} />
                                </Card.Header>
                                <Card.Body className="align-item-center justify-content-center ">
                                    <Card.Title  className="exp-card-title">{exp.company}</Card.Title>
                                    <Card.Text>
                                        <br />
                                        {exp.summary}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                        </Col>
                    ))}
                </Row>
                <Row className="align-item-center justify-content-center ">
					<Button as={NavLink} id="see-more-projects" className="btn btn-dark shadow wow zoomIn" data-wow-delay="0.5s" to="/cv">
						View CV
					</Button>
				</Row>
            </Container>
        </section>
	);
}

export default Experience;