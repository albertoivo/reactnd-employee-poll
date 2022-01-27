import React from 'react'
import { connect } from 'react-redux'
import UserStats from './UserStats'

function LeaderBoard({userIDs}) {
	return (
		<>
			<h2 className="text-center my-3">Leaderboard</h2>
			{userIDs.map((id) => <UserStats key={id} id={id} />)}
		</>
	)
}

function mapStateToProps({ users }) {
	const sortedUserIDs = Object.keys(users).sort((idA, idB) => {
		const scoreA =
			Object.keys(users[idA].answers).length + users[idA].questions.length
		const scoreB =
			Object.keys(users[idB].answers).length + users[idB].questions.length

		return scoreB - scoreA
	})

	return {
		userIDs: sortedUserIDs
	}
}

export default connect(mapStateToProps)(LeaderBoard)
