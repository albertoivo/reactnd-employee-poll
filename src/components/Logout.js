import React from 'react'
import { connect } from 'react-redux'
import Image from 'react-bootstrap/Image'
import { reSetAuthedUser } from '../actions/authedUser'

function Logout({ dispatch }) {

	return (
		<Image
			src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9ImluZm8iLz48ZyBpZD0iaWNvbnMiPjxnIGlkPSJleGl0MiI+PHBhdGggZD0iTTEyLDEwYzEuMSwwLDItMC45LDItMlY0YzAtMS4xLTAuOS0yLTItMnMtMiwwLjktMiwydjRDMTAsOS4xLDEwLjksMTAsMTIsMTB6Ii8+PHBhdGggZD0iTTE5LjEsNC45TDE5LjEsNC45Yy0wLjMtMC4zLTAuNi0wLjQtMS4xLTAuNGMtMC44LDAtMS41LDAuNy0xLjUsMS41YzAsMC40LDAuMiwwLjgsMC40LDEuMWwwLDBjMCwwLDAsMCwwLDBjMCwwLDAsMCwwLDAgICAgYzEuMywxLjMsMiwzLDIsNC45YzAsMy45LTMuMSw3LTcsN3MtNy0zLjEtNy03YzAtMS45LDAuOC0zLjcsMi4xLTQuOWwwLDBDNy4zLDYuOCw3LjUsNi40LDcuNSw2YzAtMC44LTAuNy0xLjUtMS41LTEuNSAgICBjLTAuNCwwLTAuOCwwLjItMS4xLDAuNGwwLDBDMy4xLDYuNywyLDkuMiwyLDEyYzAsNS41LDQuNSwxMCwxMCwxMHMxMC00LjUsMTAtMTBDMjIsOS4yLDIwLjksNi43LDE5LjEsNC45eiIvPjwvZz48L2c+PC9zdmc+'
			width="40"
			height="40"
			onClick={() => dispatch(reSetAuthedUser())}
			
		/>
	)
}

export default connect()(Logout)