import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavigationBar from './NavigationBar'
import Home from './Home'
import PollCreation from './PollCreation'
import PollPage from './PollPage'
import LeaderBoard from './LeaderBoard'
import PageNotFound from './PageNotFound'

export default function Private() {
	return (
		<BrowserRouter>
			<Container>
				<NavigationBar />
				<main>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/questions/:id" component={PollPage} />
						<Route path="/add" component={PollCreation} />
						<Route path="/leaderboard" component={LeaderBoard} />
						<Route component={PageNotFound} />
					</Switch>
				</main>
			</Container>
		</BrowserRouter>
	)
}
