import React from 'react';
import { NavLink } from "react-router-dom";
import {Container, Card, Row, Col, Button} from 'react-bootstrap';
import '../../Pages/App/App.css';

function ProjectsPreview(props) {
	return (
		<section id="projects-preview" style={{padding: '10px', 'padding-top': '50px', 'padding-bottom': '50px'}}>
            <h2 className="text-center"><strong>PROJECTS</strong></h2>
			<br />
			<Container>
                <Row mt-5>
                    {props.projects && props.projects.map((project, index) => (
                        <Col lg={4} mb={4} grid-margin>
                            <Card mx-auto className="project-card wow fadeInUp" data-wow-delay="0.5s">
								<Card.Header className="project-card-header project-card-img-top text-center d-xl-flex flex-shrink-1 flex-wrap justify-content-xl-center align-items-xl-center">
									<Card.Img variant="top" src={project.image_url} />
								</Card.Header>
								
                                <Card.Body className="align-item-center justify-content-center">
                                    <Card.Title>{project.name}</Card.Title>
									<Card.Subtitle className=" project-card-subheading text-center d-xl-flex flex-shrink-1 flex-wrap justify-content-xl-center align-items-xl-center"
													style={{height: '57px', 'line-height': '28px'}}>
										{project.languages && project.languages.map((lang, idx) => (
											<Button className="btn-dark text-center d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center lang-btn">
												<strong>{lang}</strong>
											</Button>
										))}
									</Card.Subtitle>
                                    <Card.Text className="project-card-body">
                                        <br />
                                        {project.summary}
                                    </Card.Text>
									<br />
									<Button className="visit-github" href={project.link} target="_blank">GITHUB</Button>
                                </Card.Body>
                            </Card>
                            <br />
                        </Col>
                    ))}
                </Row>
				<Row className="align-item-center justify-content-center ">
					<Button as={NavLink} id="see-more-projects" className="btn btn-dark shadow wow zoomIn" data-wow-delay="0.5s" to="/projects">
						View More
					</Button>
				</Row>
            </Container>
        </section>
	);
}

export default ProjectsPreview;