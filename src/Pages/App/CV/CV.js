import React, {useEffect} from 'react';
import {Container, Card, Row, Col, Button, ProgressBar} from 'react-bootstrap';
import NavBar from '../../../Components/NavBar/NavBar.js';
import Footer from '../../../Components/Footer/Footer.js';
import $ from 'jquery';
import '../App.css';
import website from '../../../website.json';

function CV() {

	useEffect(() => {
		window.scrollTo(0, 0)
	});

	const data = website;
	
	const scrollToResume = () => {
        $("#jump-down").click(function() {
			$('html,body').animate({
				scrollTop: $("#resume-links").offset().top - 50},
				2000);
		});
	}
	
	return (
		<div className="App">
			<NavBar />
			<section id="cv-page" style={{padding: '10px', 'padding-top': '50px', 'padding-bottom': '50px'}}>
				<Container className="text-center d-flex flex-wrap justify-content-center align-items-center">
					<div className="avatar">
						<img src="/Images/ajay.jpg" className="avatar wow zoomIn" alt="Ajay Sarjoo"></img>
					</div>
				</Container>
				<Container className="text-center d-flex flex-wrap justify-content-center align-items-center wow zoomIn">
					<p style={{fontSize: 'calc(1.2em + 1.4vw)'}}>
						<strong>
							Ajay Sarjoo
						</strong>
					</p>

					<p style={{fontSize: '15px', lineHeight: '33px'}}>
						Undergraduate computer science and applied math and statisics major with a passion for software engineering, machine learning, and all things Big Data
					</p>
				</Container>
				<br />
				<Container className="text-center d-flex flex-wrap justify-content-center align-items-center wow fadeInUp">
					<Card style={{ width: '23rem' }} className="contact-card">
						<Card.Body>
							<Card.Title>Contact Info</Card.Title>
							<Card.Text style={{textAlign: 'left'}}>
								<i class="fas fa-envelope contact-card-ico"></i>
								&nbsp; &nbsp;
								<a className="contact-card-text" href="mailto:ajay.sarjoo@outlook.com" target="_blank" rel="noopener noreferrer">
									ajay.sarjoo@outlook.com	
								</a>					

								<br />
								
								<i class="fas fa-phone contact-card-ico"></i>
								&nbsp; &nbsp;
								<a className="contact-card-text" style={{pointerEvents: "none"}}>
									Available Upon Request
								</a>

								<br />

								<i class="fab fa-linkedin contact-card-ico"></i>
								&nbsp; &nbsp;
								<a className="contact-card-text" href="https://www.linkedin.com/in/ajaysarjoo/" target="_blank" rel="noopener noreferrer">
									https://www.linkedin.com/in/ajaysarjoo/
								</a>

								<br />

								<i class="fab fa-github contact-card-ico"></i>
								&nbsp; &nbsp;
								<a className="contact-card-text" href="https://www.github.com/asarj" target="_blank" rel="noopener noreferrer" >
									https://www.github.com/asarj
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
					
				</Container>
				<br />
				<div className="wow fadeInUp" data-wow-delay="0.5s">
					<h6>In a rush? Check out any of my Resume PDFs below!</h6>
					<Button id="jump-down" className="btn btn-dark shadow resume-btn" onClick={scrollToResume}>JUMP DOWN</Button>
				</div>
				<section id="education" style={{padding: '10px', 'padding-top': '50px', 'padding-bottom': '50px'}}>
				
				<Container className="flex-wrap justify-content-center align-items-center" style={{textAlign: 'center'}}>
					<hr />
					
					<br />
					<Row className="wow fadeInUp" data-wow-delay="0.5s">
						<Col className='text-center justify-content-center align-items-center align-content-center' style={{textAlign: 'center', display: 'inline-block', float: 'none'}}>
							<h2 class="text-center"><strong><u>EDUCATION</u><br /><br /></strong></h2> 
						</Col>
						<Col md={6} style={{textAlign: "left"}}>
							<h3>Stony Brook University</h3>
							<h5>Stony Brook, NY</h5> 
							<p>August 2017 - Present (Expected May 2021)</p>
							<p><i>Bachelor of Science in Computer Science and Applied Math and Statistics</i></p>
							
							<h6>Relevant Coursework</h6>
							<ul>
								<li>Data Structures - Spring 2018</li>
								<li>Analysis of Algorithms (Under Prof. Steven Skiena) - Fall 2018</li>
								<li>Systematic Program Design, Coding, and Testing - Fall 2018</li>
								<li>Principles of Database Systems - Spring 2019</li>
								<li>Systems Fundamentals I - Spring 2019</li>
								<li>Systems Fundamentals II - Fall 2019</li>
								<li>Technical Communications - Fall 2019</li>
								<li>Theory of Computation - Spring 2020</li>
								<li>Principles of Programming Languages - Spring 2020</li>
								<li>Machine Learning - Spring 2020</li>
								<li>Natural Language Processing - Spring 2020</li>
							</ul>
							

							<br /> <br />

							<h3>Bayside High School</h3>
							<h5>Bayside, NY</h5> 
							<p>July 2013 - June 2017</p>
							<p><i>Engineering CTE (Career & Technical Education)</i></p>
							
							<h6>Graduated in the top 5% of graduating class with an Advanced Regents Diploma</h6>
						</Col>
					</Row>
					
					<br /> 
					<hr />
					<br />
					<Row className="wow fadeInUp" data-wow-delay="0.5s">
						<Col className='text-center justify-content-center align-items-center align-content-center' style={{textAlign: 'center', display: 'inline-block', float: 'none'}}>
							<h3 class="text-center"><strong><u>EXPERIENCE</u><br /><br /></strong></h3> 
						</Col>
						<Col md={6} style={{textAlign: "left"}}>
							{
								
									data.experience && data.experience.map((exp, idx) => (
										<div>
											<h3>{exp.position}</h3>
											<h5>{exp.company} - {exp.location}</h5> 
											<p>{exp.duration}</p>
											<ul>
												{
													exp.details && exp.details.map((det, idx) => (
														<li>{det}</li>
													))
													}
											</ul>
											<br />
										</div>
									))
								
								
							}
						</Col>
					</Row>

					<br /> 
					<hr />
					<br />

					<Row className="wow fadeInUp" data-wow-delay="0.5s">
						<Col className='text-center justify-content-center align-items-center align-content-center' style={{textAlign: 'center', display: 'inline-block', float: 'none'}}>
							<h3 class="text-center"><strong><u>SKILLS</u><br /><br /></strong></h3> 
						</Col>
						<Col md={6} style={{textAlign: "left"}}>
							<h3>Programming Languages</h3>
							{
								
								data.skills.languages && data.skills.languages.map((skill, idx) => (
									<div>
										<h6>{skill.name}</h6>
										<div className="progress">
											<div role="progressbar" className="progress-bar progress-bar-animated progress-bar-striped progress-bar-theme" style={{width: skill.level + "%"}} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
												{skill.level + "%"}
											</div>
										</div>
										{/* <ProgressBar animated now={skill.level} label={skill.level + "%"}></ProgressBar> */}
										<br />
									</div>
									
								))
								
								
							}

							<br />
							<h3>Machine Learning Libraries (Python)</h3>
							{
								
								data.skills.data && data.skills.data.map((skill, idx) => (
									<div>
										<h6>{skill.name}</h6>
										<div className="progress">
											<div role="progressbar" className="progress-bar progress-bar-animated progress-bar-striped progress-bar-theme" style={{width: skill.level + "%"}} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
												{"" + skill.level + "%"}
											</div>
										</div>
										<br />
									</div>
									
								))
								
								
							}

							<br />
							<h3>Web Development</h3>
							{
								
								data.skills["web_dev"] && data.skills["web_dev"].map((skill, idx) => (
									<div>
										<h6>{skill.name}</h6>
										<div className="progress">
											<div role="progressbar" className="progress-bar progress-bar-animated progress-bar-striped progress-bar-theme" style={{width: skill.level + "%"}} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
												{"" + skill.level + "%"}
											</div>
										</div>
										<br />
									</div>
									
								))
								
								
							}
						</Col>
					</Row>

					<br /> 
					<hr />
					<br />

					<h3 id="resume-links" class="text-center wow fadeInUp" data-wow-delay="0.5s"><strong><u>RESUME LINKS</u><br /><br /></strong></h3>
					<Container className="wow fadeInUp" data-wow-delay="0.5s">
						<Button style={{margin: '5px 10px'}} className="btn btn-dark shadow resume-btn" href="Resumes/AjaySarjooResume.pdf" target="_blank">PDF (1 PAGE)</Button>
						<Button style={{margin: '5px 10px'}} className="btn btn-dark shadow resume-btn" href="Resumes/AjaySarjooCV.pdf" target="_blank">PDF (CV)</Button>
						<Button style={{margin: '5px 10px'}} className="btn btn-dark shadow resume-btn" href="Resumes/AjaySarjooResume.txt" target="_blank">TXT</Button>
					</Container>
					<br /> 
					<hr />
				</Container>
				</section>
			</section>
			<Footer />
		</div>
	);
}

export default CV;