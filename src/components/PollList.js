import React from 'react'
import PollDetail from './PollDetail'
import { Link } from 'react-router-dom'

export default function PollList({ idsList }) {

	return (
		<>
			{idsList.length
				? idsList.map((id) => <PollDetail key={id} id={id} />)
				: <p className="text-center">No Polls. <Link to="/add">Click here to add a poll.</Link></p>
			}
		</>
	)
}
