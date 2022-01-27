import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Avatar from './Avatar'
import Logout from './Logout'

function NavigationBar({ user }) {

	

	return (
		<Navbar expand="lg" bg="dark" variant="dark" className="my-3 border">
			<Navbar.Brand as={Link} to="/"><h2 data-testid="app-title">Employee Poll</h2></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={NavLink} to="/add">New Poll</Nav.Link>
					<Nav.Link as={NavLink} to="/leaderboard">Leaderboard</Nav.Link>
				</Nav>
				<Nav className="align-items-start">
					<Navbar.Text>{user.name}</Navbar.Text>
					<Avatar avatarURL={user.avatarURL} />
					<Logout />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	}
}

export default connect(mapStateToProps)(NavigationBar)
