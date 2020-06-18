import React from 'react';
import { NavLink } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
	return (
		<Navbar collapseOnSelect expand="lg" sticky="top" bg='dark' variant="dark">
			<Navbar.Brand href="/" className="navbar-brand logo">Ajay Sarjoo</Navbar.Brand>
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