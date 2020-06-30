import React from 'react';
import Circles from './Circles';
import '../../Pages/App/App.css';
import ParticlesBg from 'particles-bg';

function AnimationDivider(props) {
	return (
        <section className="animation-divider">
            <div className="col d-xl-flex justify-content-center align-content-center align-self-center justify-content-xl-center align-items-xl-center animation-container">
                <p className="d-inline-flex align-items-center justify-content-xl-center animation-text"><strong>{props.text}</strong></p>
                {/* <Circles /> */}
                <ParticlesBg type="circle" bg={true} />
            </div>
        </section>
	);
}

export default AnimationDivider;