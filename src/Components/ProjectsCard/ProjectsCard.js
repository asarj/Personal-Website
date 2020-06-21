import React, { useState } from 'react';
import {Card, Col, Button, Modal, ListGroup} from 'react-bootstrap';
import '../../Pages/App/App.css';

function ProjectsCard(props) {
	const [show, setShow] = useState(false);

	const handleClose = (e) => {
		setShow(false);
	}
	const handleShow = (e) => {
		setShow(true);
    }
    
    const handleProp = (e) => {
		e.preventDefault();
		e.stopPropagation();
	}

	return (
		<Col lg={4} mb={4} grid-margin>
            <div className="project-container">
                
                <Card mx-auto className="project-gallery-card wow fadeInUp" data-wow-delay="0.5s"  onClick={handleProp}>
                    
                    <Card.Header className="project-gallery-card-header card-img-top text-center d-xl-flex flex-shrink-1 flex-wrap justify-content-xl-center align-items-xl-center">
                        <Card.Img variant="top" src={props.project.image_url} />
                    </Card.Header>
                    
                    <Card.Body className="align-item-center justify-content-center">
                        <Card.Title>{props.project.name}</Card.Title>
                        <Card.Subtitle className=" project-gallery-card-subheading text-center d-xl-flex flex-shrink-1 flex-wrap justify-content-xl-center align-items-xl-center"
                                        style={{height: '57px', 'line-height': '28px'}}>
                            {props.project.languages && props.project.languages.map((lang, idx) => (
                                <Button className="btn-dark text-center d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center lang-btn">
                                    <strong>{lang}</strong>
                                </Button>
                            ))}
                        </Card.Subtitle>
                        <Card.Text className="project-gallery-card-body">
                            <br />
                            {props.project.summary}
                        </Card.Text>
                        {/* <br /> */}
                        {/* <Button className="visit" href={project.link} target="_blank">GITHUB</Button> */}
                    </Card.Body>
                </Card>
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                    <div>
                        <Card.Header className="project-gallery-card-header card-img-top text-center d-xl-flex flex-shrink-1 flex-wrap justify-content-xl-center align-items-xl-center">
                            <Card.Img variant="top" src={props.project.image_url} />
                        </Card.Header>
                        <Modal.Body>
                            <Card.Title>{props.project.name} - ({props.project.duration})</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <strong>What is it?</strong>
                                    <br />
                                    {props.project.summary}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>What did I do?</strong>
                                    <br />
                                    {
                                        props.project.details.map((detail, i) => (
                                            <li>{detail}</li>
                                        ))
                                    }
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>What technologies were used?</strong>
                                    <br />
                                    {props.project.languages && props.project.languages.map((lang, idx) => (
                                        <Button className="btn-dark lang-btn">
                                            <strong>{lang}</strong>
                                        </Button>
                                    ))}
                                </ListGroup.Item>
                            </ListGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="visit" onClick={handleClose}>CLOSE</Button>
                            <Button className="visit" href={props.project.link} target="_blank">GITHUB REPO</Button>
                        </Modal.Footer>
                    </div>
                </Modal>	
                <div className="over" >
                    <Button className="see-more" onClick={handleShow}>DETAILS</Button>
                    
                </div>
                
            </div>	
                    
            <br />
        </Col>					
	);
}

export default ProjectsCard;