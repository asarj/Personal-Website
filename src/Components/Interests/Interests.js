import React from 'react';
import {Container, Card, Row, Col} from 'react-bootstrap';
import '../../Pages/App/App.css';

function Interests(props) {
	return (
		<section id="interests" style={{padding: '10px', 'padding-top': '50px', 'padding-bottom': '50px', alignItems: 'center', alignContent: 'center'}}>
            <h2 class="text-center"><strong>INTERESTS</strong></h2>
            <br />
            <Container>
                <Row mt-5>
                    {props.interests && props.interests.map((interest, index) => (
                        <Col lg={4} mb={4} sm={20} grid-margin>
                            <Card mx-auto className="description-card wow fadeInUp" data-wow-delay="0.5s">
                                <Card.Header><i className={`${interest.faicon} faicon`}></i></Card.Header>
                                <Card.Body className="align-item-center justify-content-center ">
                                    
                                    <br />
                                    <Card.Title>{interest.title}</Card.Title>
                                    <Card.Text>
                                        <br />
                                        {interest.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
	);
}

export default Interests;