import React, { useState, useEffect } from 'react';
import NavBar from '../../../Components/NavBar/NavBar.js';
import Footer from '../../../Components/Footer/Footer.js';
import ProjectsCard from '../../../Components/ProjectsCard/ProjectsCard.js';
import {Container, Row} from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './Projects.css';
import website from '../../../website.json';

function Projects() {
	const data = website;
	const animatedComponents = makeAnimated();
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [selectedLangs, setSelectedLangs] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0)
	});

	const styles = {
		container: base => ({
		  ...base,
		  flex: 1
		})
	  };

	let tagOptions = [
		{ value: 'web-dev', label: 'Web Development' },
		{ value: 'machine-learning', label: 'Machine Learning' },
		{ value: 'databases', label: 'Databases' },
		{ value: 'full-stack-dev', label: 'Full-Stack Development' },
		{ value: 'front-end-dev', label: 'Front-End Development' },
		{ value: 'back-end-dev', label: 'Back-End Development' },
		{ value: 'app-dev', label: 'Mobile App Development' }
	];

	tagOptions = tagOptions.sort((a, b) => {
		return a.label.localeCompare(b.label)
	});

	let langOptions = [
		{ value: 'Java', label: 'Java' },
		{ value: 'JavaFX', label: 'JavaFX' },
		{ value: 'Python', label: 'Python' },
		{ value: 'MySQL', label: 'MySQL' },
		{ value: 'C', label: 'C' },
		{ value: 'Node.js', label: 'Node.js' },
		{ value: 'React.js', label: 'React.js' },
		{ value: 'MongoDB', label: 'MongoDB' },
		{ value: 'Express.js', label: 'Express.js' },
		{ value: 'HTML', label: 'HTML' },
		{ value: 'CSS', label: 'CSS' },
		{ value: 'JavaScript', label: 'JavaScript' },
		{ value: 'Flask', label: 'Flask' },
		{ value: 'Django', label: 'Django' },
		{ value: 'Vue.js', label: 'Vue.js' },
		{ value: 'SQLite3', label: 'SQLite3' },
		{ value: 'C++', label: 'C++' },
	];

	langOptions = langOptions.sort((a, b) => {
		return a.label.localeCompare(b.label)
	});

	const determineIfRenderByTag = (project) => {
		let newKeys = [];

		if (selectedOptions){
			selectedOptions.forEach((key) => {
				var value = key.value;
				newKeys.push(value);
			});
		}
		
		let foundTag = false;

		if (newKeys && newKeys.length > 0){
			project.tags.forEach((tag) => {
				if (newKeys.includes(tag)) {
					foundTag = true;
				}
			});
		} else {
			foundTag = true;
		}
		
		return foundTag;
	}

	const determineIfRenderByLang = (project) => {
		let newLangs = [];

		if (selectedLangs){
			selectedLangs.forEach((key) => {
				var value = key.value;
				newLangs.push(value);
			});
		}
		
		let foundLang = false;

		if (newLangs && newLangs.length > 0) {
			project.languages.forEach((lang) => {
				if (newLangs.includes(lang)) {
					foundLang = true;
				}
			});
		} else {
			foundLang = true;
		}

		return foundLang
	}

	return (
		<div className="App">
			<NavBar />
            <section id="projects-preview" style={{padding: '10px', 'padding-top': '50px', 'padding-bottom': '50px'}}>
            <h2 className="text-center"><strong>PROJECT GALLERY</strong></h2>
			<br />

			<div className="filter-div">
				<label class="cat-label">Category:</label> &nbsp; &nbsp;

				<Select 
					isMulti
					name="Categories"
					options={tagOptions}
					onChange={(e) => setSelectedOptions(e)}
					className="basic-multi-select"
					classNamePrefix="select"
					onSelectResetsInput={true} onBlurResetsInput={false}
					styles={styles}
					components={animatedComponents}
					// style={{width: '50px'}}
				/>
				&nbsp; &nbsp; &nbsp; &nbsp;
				<br />
				<label className="cat-label">Language/Framework:</label>  &nbsp; &nbsp;
				<Select 
					isMulti
					name="Programming Languages/Frameworks"
					options={langOptions}
					onChange={(e) => setSelectedLangs(e)}
					className="basic-multi-select"
					classNamePrefix="select"
					onSelectResetsInput={false} onBlurResetsInput={false}
					styles={styles}
					components={animatedComponents}
					// style={{width: '50%'}}
				/>
			</div>
			<br></br>
			<Container>
                {
					(selectedOptions !== null && selectedOptions.length !== 0) || 
					(selectedLangs !== null && selectedLangs.length !== 0) ? (
						<Row mt-5>
							{data.projects.map((project, idx) => (
								 determineIfRenderByTag(project) === true && determineIfRenderByLang(project) === true ? (
									<ProjectsCard project={project} />
								 ) : ""
							))}
						</Row>
						) 
						:
						(
							<Row mt-5>
								{data.projects && data.projects.map((project, index) => (
									<ProjectsCard project={project} />
								))}
							</Row>
						)
				}
            </Container>
        </section>
			<Footer />
		</div>
	);
}

export default Projects;