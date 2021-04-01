import React, { useContext, useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from '@emotion/styled'
import Project from './Project'
import Fade from 'components/Shared/Fade'
import PortfolioContext from 'context/context'
import { CardContainer } from 'components/Shared/styled'

const trans = (x: number) => `${x}px`

function Projects({ flip }: { flip: () => void }) {
	const { projects } = useContext(PortfolioContext)
	const [projIndex, setProjIndex] = useState(0)
	const [props, set] = useSpring(() => ({
		opacity: 0,
		x: 0,
		config: { mass: 20, tension: 200, friction: 200, duration: 1000 },
	}))

	useEffect(() => {
		set({ x: -100, opacity: 1 })
	})

	const ProjectComponents = projects.map(project => <Project project={project} />)

	return (
		<ProjectsContainer>
			<TitleRow>
				<Fade direction="down" distance={40} duration={600} delay={100}>
					<Title>Projects</Title>
				</Fade>
			</TitleRow>
			{ProjectComponents[projIndex]}
			<Dots
				// @ts-ignore
				style={{ bottom: props.x.interpolate(trans), opacity: props.opacity }}
			>
				{projects.map((_, i) => (
					<Dot onClick={() => setProjIndex(i)}></Dot>
				))}
			</Dots>
		</ProjectsContainer>
	)
}

const ProjectsContainer = styled(CardContainer)`
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: space-between;
	transform: scale(-1, 1);
	background-color: ${(props) => props.theme.colors.whitecolor};
	/* background-image: linear-gradient(
		135deg,
		${(props) => props.theme.colors.projectprimary} 0%,
		${(props) => props.theme.colors.projectsecondary} 100%
	); */
`

const TitleRow = styled.div`
	height: 40%;
	width: 100%;
	display: flex;
	margin-bottom: 20px;
`

const Title = styled.div`
	font-size: ${(props) => props.theme.fontSize.bigfontsize};
	font-weight: 700;
	margin-left: 100px;
	color: ${(props) => props.theme.colors.darkBlueText};
`
const Dots = styled(animated.div)`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100px;
	z-index: -10px;
`
const Dot = styled.div`
	height: 15px;
	width: 15px;
	border-radius: 50%;
	background-color: black;
	margin: 25px;
	font-size: 80px;
	cursor: pointer;
	transition: height 0.1s linear, width 0.1s linear,
		background-color 0.1s linear, border 0.1s linear, margin 0.1s linear;
	&:hover {
		margin: 10px;
		height: 30px;
		width: 30px;
		background-color: white;
		border: 2px solid black;
	}
`

export default Projects
