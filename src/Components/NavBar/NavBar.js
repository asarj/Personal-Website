import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import {Navbar, Nav, Button} from 'react-bootstrap';
import '../../Pages/App/App.css';
// import $ from 'jquery';

function NavBar() {
	// const [ stylePath, setStylePath ] = useState("../../Pages/App/");
	// const handleButtonClick = () => {
	// 	setStylePath({stylePath: '../../Pages/App/Light.css'});
	//   }

	//   useEffect(() => {
	// 	var head = document.head;
	// 	var link = document.createElement("link");
	
	// 	link.type = "text/css";
	// 	link.rel = "stylesheet";
	// 	console.log(stylePath)
	// 	link.href = stylePath;
	
	// 	head.appendChild(link);
	// 	console.log(String(link))
	// 	return () => { head.removeChild(link); }
	//   }, [stylePath]);

	return (
		<Navbar collapseOnSelect expand="lg" sticky="top" bg='dark' variant="dark">
			<Navbar.Brand href="/" className="navbar-brand logo">Ajay Sarjoo</Navbar.Brand>
			{/* <Button id="but" onClick={handleButtonClick}>Switch</Button> */}
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto" align="left">
					<Nav.Link as={NavLink} to="/" exact isActive={false}>
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} to="/projects" exact isActive={false}>
						Project Gallery
						</Nav.Link>
					<Nav.Link as={NavLink} to="/cv" exact isActive={false}>
						CV
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;