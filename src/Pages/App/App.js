import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home.js';
import Projects from './Projects/Projects.js';
import CV from './CV/CV.js';
import './App.css';
import {WOW} from 'wowjs/dist/wow';

function App() {	
	const wow =new WOW().init();
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/projects" component={Projects} />
			<Route path="/cv" component={CV} />
		</Switch>
	);
}

export default App;
 