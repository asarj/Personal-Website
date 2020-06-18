import React from 'react';
import { useLocation } from 'react-router-dom'
import {Container, Button} from 'react-bootstrap';
import $ from 'jquery';
import './Footer.css';

function Footer(props) {
    let location = useLocation();

    const scrollToTop = () => {
        if (location.pathname === "/") {
            $("#go-back-home").click(function() {
            
                $('html,body').animate({
                    scrollTop: $("#home").offset().top},
                    2000);
            });
        } else if (location.pathname === "/projects") {
            $("#go-back-home").click(function() {
            
                $('html,body').animate({
                    scrollTop: $("#projects-preview").offset().top - 50},
                    2000);
            });
        } else if (location.pathname === "/cv") {
            $("#go-back-home").click(function() {
            
                $('html,body').animate({
                    scrollTop: $("#cv-page").offset().top - 50},
                    2000);
            });
        }
    }
    const currYear = new Date().getFullYear();
	return (
		<footer id="footer" style={{padding: '10px', 'padding-top': '50px', 'padding-bottom': '10px'}}>
            <Container>
                <div className="">
                    <Button id="go-back-home" className="back-to-home" onClick={scrollToTop}>
                        <i className="fas fa-rocket"></i>
                    </Button>
                </div>
            </Container>
            <br />
            <Container>

                <Button className="ico" href="mailto:ajay.sarjoo@outlook.com">
                    <i className="fas fa-envelope"></i>
                </Button>
                <Button className="ico" href="https://www.linkedin.com/in/ajaysarjoo/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </Button>
                <Button className="ico" href="https://www.github.com/asarj" target="_blank">
                    <i className="fab fa-github"></i>
                </Button>
                <br />
                <br />
                <br />
                <div>
                    <p>Copyright © {currYear} Ajay Sarjoo </p>
                    <p>Remastered with <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a></p>
                </div>
            </Container>
        </footer>
	);
}

export default Footer;