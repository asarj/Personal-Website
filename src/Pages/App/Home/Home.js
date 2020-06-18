import React from 'react';
import NavBar from '../../../Components/NavBar/NavBar.js';
import Welcome from '../../../Components/Welcome/Welcome.js';
import AboutMe from '../../../Components/AboutMe/AboutMe.js';
import AnimationDivider from '../../../Components/Animations/AnimationDivider.js';
import Interests from '../../../Components/Interests/Interests.js';
import ProjectsPreview from '../../../Components/ProjectsPreview/ProjectsPreview.js';
import Experience from '../../../Components/Experience/Experience.js';
import Contact from '../../../Components/Contact/Contact.js';
import Footer from '../../../Components/Footer/Footer.js';
import './Home.css';
import website from '../../../website.json';

function Home() {
    const data = website;
	return (
		<div className="App">
			<NavBar />
			<Welcome />
			<AboutMe />
			<AnimationDivider text="I've learned a thing or two"/>
			<Interests interests={data['interests']}/>
			<AnimationDivider text="I've built a few things along the way"/>
			<ProjectsPreview projects={data['projects'].slice(0, 3)} />
			<AnimationDivider text="I've worked at a few places too"/>
			<Experience experience={data['experience'].filter((e) => {return e.summary !== ""})} />
			<Contact />
			<Footer />
		</div>
	);
}

export default Home;