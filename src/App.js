import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import Login from './components/Login'
import Private from './components/Private'
import { handleInitialData } from './actions/shared'

function App({ authedUser, loadingBar, dispatch }) {

	useEffect(() => {
		dispatch(handleInitialData())
	}, [dispatch]);

	return (loadingBar.default === undefined)
		? <div className="d-flex justify-content-center">
			<Spinner animation="border" role="status" variant="secondary" className="my-5">
				<span className="sr-only">Loading...</span>
			</Spinner>
		</div>
		: <>{!authedUser ? <Login /> : <Private />}</>
}

function mapStateToProps({ authedUser, loadingBar }) {
	return { authedUser, loadingBar }
}

export default connect(mapStateToProps)(App)
