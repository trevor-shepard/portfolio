import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { animated, useSpring } from 'react-spring'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import About from 'components/About/About'
import Hero from 'components/Hero/Hero'
import Projects from 'components/Projects/Projects'
import Back from 'components/Shared/Back'
// const calc = (x: number, y: number) => [
// 	-(y - window.innerHeight / 2) / 100,
// 	(x - window.innerWidth / 2) / 100,
// 	1.0001,
// ]
const trans = (x: number, y: number, s: number) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card() {
	const [screen, setScreen] = useState<
		'hero' | 'about' | 'projects' | 'contact'
	>('hero')
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 20, tension: 200, friction: 200, duration: 500 },
	}))

	useEffect(() => {
		switch (screen) {
			case 'hero':
				set({ xys: [0, 0, 1] })
				break
			case 'about':
				set({ xys: [-180, 0, 1] })
				break
			case 'projects':
				set({ xys: [0, 180, 1] })
				break
			default:
				break
		}
	}, [screen, set])

	const getScreen = () => {
		switch (screen) {
			case 'hero':
				return <Hero flip={() => setScreen('about')} />
			case 'about':
				return <About projects={() => setScreen('projects')} />
			case 'projects':
				return <Projects flip={() => setScreen('projects')} />
			default:
				return <Hero flip={() => setScreen('about')} />
		}
	}

	return (
		<Screen screen={screen}>
			
			<Icons>
				<AiFillGithub
					size="25px"
					style={{
						cursor: 'pointer',
						margin: '10px'
					}}
					onClick={() => window.open('https://github.com/trevor-shepard')}
				/>
				<AiFillLinkedin
					size="25px"
					style={{
						cursor: 'pointer',
						margin: '10px'
					}}
					onClick={() => window.open('https://www.linkedin.com/in/trevor-shepard-3a9b92a2/')}
				/>
			</Icons>
			<CardContainer
				// onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
				// onMouseLeave={() => {
				// 	if (toggling) return null
				// 	set({ xys: [0, 0, 1] })
				// }}
				// @ts-ignore
				style={{ transform: props.xys.interpolate(trans) }}
				screen={screen}
			>
				<Back current={screen} handleClick={setScreen} />
				{getScreen()}
			</CardContainer>
		</Screen>
	)
}

const Screen = styled.div<{ screen: string }>`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-image 0.5s;
	background-image: ${(props) => {
		if (props.screen === 'about')
			return `linear-gradient( 135deg,
				${props.theme.colors.aboutprimary} 10%,
			${props.theme.colors.aboutsecondary} 100%
		);`
		if (props.screen === 'projects')
			return `linear-gradient( 135deg,
				${props.theme.colors.projectsecondary} 40%,
			${props.theme.colors.projectprimary} 60%
		);`
	}};
`

const CardContainer = styled(animated.div)<{ screen: string }>`
	position: relative;
	width: 1000px;
	height: 600px;
	background: grey;
	border-radius: 5px;
	background-size: cover;
	background-position: center center;
	box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
	transition: box-shadow 0.5s;
	will-change: transform;
	border: 5px solid
		${(props) => {
			switch (props.screen) {
				case 'about':
					return props.theme.colors.whitecolor
				case 'projects':
					return props.theme.colors.darkBlueText

				default:
					return props.theme.colors.whitecolor
			}
		}};
`

const Icons = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	right: 0;
	top: 0;
	padding: 20px;
`

export default Card
