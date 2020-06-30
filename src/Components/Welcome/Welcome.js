import React from 'react';
import {Container, Button} from 'react-bootstrap';
import Circles from '../Animations/Circles';
import ParticlesBg from 'particles-bg';
import '../../Pages/App/App.css';
import $ from 'jquery';

function Welcome() {

    const scrollToAboutMe = () => {
        $(".explore-about-me").click(function() {
            $('html,body').animate({
                scrollTop: $("#about-me").offset().top - 50},
                2000);
        });
    }

	return (
		<section id="home">
            <Container>
                <div col d-xl-flex justify-content-center align-content-center align-self-center justify-content-xl-center align-items-xl-center>
                    <p className="home-title-text wow fadeInUp">Ajay Sarjoo</p>
                    <p className="home-caption-text wow fadeInUp">Software Engineer based in NYC</p>
                    <Button className="btn btn-dark shadow explore-about-me wow fadeInUp" onClick={scrollToAboutMe}>
                        Explore
                    </Button>
                    <ParticlesBg type="circle" bg={true} />
                    {/* <Circles /> */}
                </div>
                
            </Container>
            
        </section>
	);
}

export default Welcome;