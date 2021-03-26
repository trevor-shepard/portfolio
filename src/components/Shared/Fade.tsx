import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { animated, useSpring } from 'react-spring'

interface Props {
	direction: 'left' | 'right' | 'up' | 'down'
	distance: number
	duration: number
	delay: number
}

const directions = {
	right: 'marginLeft',
	left: 'marginRight',
	down: 'marginTop',
	up: 'marginBottom'
}

export default function Fade({
	children,
	direction,
	distance,
	duration,
	delay
}: React.PropsWithChildren<Props>) {
	const margin = directions[direction]
	console.log(margin)
	const [props, set] = useSpring(() => ({
		opacity: 0,
		[margin]: 0,
		config: { duration },
	}))

	useEffect(() => {
		setTimeout(() => set({ opacity: 1, [margin]: distance }), delay)
		
	}, [distance, margin, set])

	return <Fader style={props}>{children}</Fader>
}

const Fader = styled(animated.div)`
	height: auto;
	width: auto;
`
