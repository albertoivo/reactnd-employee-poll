import React from 'react'
import { connect } from 'react-redux'
import UnansweredPoll from './UnansweredPoll'
import AnsweredPoll from './AnsweredPoll'

function PollPage({ autherUserAnswers, match }) {

	const id = match.params.id
	const answered = autherUserAnswers.hasOwnProperty(id)

	return (
		<>
			<h2 className="text-center my-3">Poll</h2>
			{answered
					? <AnsweredPoll id={id} />
					: <UnansweredPoll id={id} />
			}
		</>
	)

}

function mapStateToProps({ authedUser, users }) {
	const autherUserAnswers = users[authedUser].answers

	return {
		autherUserAnswers
	}
}

export default connect(mapStateToProps)(PollPage)
