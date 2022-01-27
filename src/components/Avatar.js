import React from 'react'
import Image from 'react-bootstrap/Image'

export default function Avatar({avatarURL}) {
	return (
		<Image
			src={avatarURL}
			roundedCircle
			fluid
			width="55"
			height="55"
			className="mx-3"
		/>
	)
}
