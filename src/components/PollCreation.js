import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { handleAddQuestion } from '../actions/questions'

class PollCreation extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		toHome: false
	}

	handleInputChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (e) => {
		const { optionOne, optionTwo } = this.state

		e.preventDefault()

		this.setState(
			{ optionOne: '', optionTwo: '', toHome: true },
			() => this.props.dispatch(handleAddQuestion(optionOne, optionTwo))
		)
	}

	render() {
		const { optionOne, optionTwo, toHome } = this.state

		if (toHome) return <Redirect to="/" />

		return (
			<Row className="justify-content-center">
				<Col xs={12}><h2 className="text-center my-3">Would You Rather:</h2></Col>
				<Col xs={12}>
					<Card bg="light" className="m-3 text-center">
						<Card.Body>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group controlId="optionOne">
									<Form.Label>Option One</Form.Label>
									<Form.Control
										type="text"
										name="optionOne"
										value={optionOne}
										onChange={this.handleInputChange}
									/>
								</Form.Group>
								<Form.Group controlId="optionTwo">
									<Form.Label>Option Two</Form.Label>
									<Form.Control
										type="text"
										name="optionTwo"
										value={optionTwo}
										onChange={this.handleInputChange}
									/>
								</Form.Group>
								<Button type="submit" variant="primary" disabled={!optionOne || !optionTwo}>Save</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		)
	}
}

export default connect()(PollCreation)
