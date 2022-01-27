import React, { useState } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { setAuthedUser } from '../actions/authedUser'

function Login({ dispatch, userNames, userID }) {

	const [errorMsg, setErrorMsg] = useState('')

	function handleSubmit(e) {
		const userId = userID.value

		e.preventDefault()

		if (userId !== '') {
			dispatch(setAuthedUser(userId))
		} else {
			setErrorMsg('Select a user')
		}
	}

	return (
		<Row className="justify-content-center align-items-center min-vh-100">
			<Col xs={12} md={4}>
				<Card bg="light" className="text-center">
					<Card.Header>User</Card.Header>
					<Card.Body>
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="formGridState">
								{errorMsg && <p data-testid="error-header" className="text-danger">{errorMsg}</p>}

								<Form.Control as="select" ref={(id) => (userID = id)} data-testid="user-select">
									<option value="">Select user</option>
									{userNames.map((item) => (
										<option value={item.value} key={item.value}>
											{item.label}
										</option>
									))}
								</Form.Control>
							</Form.Group>
							<Button type="submit" variant="outline-dark" data-testid="submit-button">Authenticate</Button>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)

}

function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	}
}

export default connect(mapStateToProps)(Login)
