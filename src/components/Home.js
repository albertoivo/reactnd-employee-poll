import React, { useState } from 'react'
import { connect } from 'react-redux'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import PollList from './PollList'

function Home({ unansweredPollIds, answeredPollIds }) {

	const [key, setKey] = useState('unanswered');

	return (
		<Tabs activeKey={key} onSelect={(k) => setKey(k)}>
			<Tab eventKey="unanswered" title="Unanswered Polls">
				<PollList idsList={unansweredPollIds} />
			</Tab>
			<Tab eventKey="answered" title="Answered Polls">
				<PollList idsList={answeredPollIds} />
			</Tab>
		</Tabs>
	)

}

function mapStateToProps({ authedUser, questions, users }) {
	const answeredPollIds = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp)

	const unansweredPollIds = Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp)

	return {
		unansweredPollIds, answeredPollIds
	}
}

export default connect(mapStateToProps)(Home)
