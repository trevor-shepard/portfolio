import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Title from './Title'
import Fade from 'components/Shared/Fade'
import PortfolioContext from 'context/context'
import {
	CardContainer,
	ResumeBtn,
} from 'components/Shared/styled'
const About = () => {
	const { about } = useContext(PortfolioContext)
	const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about

	return (
		<AboutContainer>
			<Title title="ABOUT ME" />
			<RowCentered>
				<ColumnCenteredLeft>
					<Fade direction="right" distance={60} duration={600} delay={300}>
						<Img src={img} alt='me' />
					</Fade>
				</ColumnCenteredLeft>
				<ColumnCenteredRight>
					<Fade direction="up" distance={100} duration={600} delay={900}>
						<Paragraph>
							{paragraphOne}
						</Paragraph>
						<Paragraph>
							{paragraphTwo}
						</Paragraph>
						<Paragraph>
							{paragraphThree}
						</Paragraph>
					
						<ResumeBtn href={resume}>resume</ResumeBtn>
					</Fade>
				</ColumnCenteredRight>
			</RowCentered>
		</AboutContainer>
	)
}

const AboutContainer = styled(CardContainer)`
	${(props) => props.theme.colors.primary};
	background-image: linear-gradient(
		135deg,
		${(props) => props.theme.colors.primary} 0%,
		${(props) => props.theme.colors.secondary} 100%
	);
`

export const RowCentered = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const ColumnCenteredLeft = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 100%;
`
export const ColumnCenteredRight = styled.div`
	display: flex;
	padding-right: 43px;
	padding-left: 43px;
	height: 100%;
`

const Img = styled.img`
	object-fit: cover;
	width: 350px;
	height: auto;
`

const Paragraph = styled.p`
	margin-top: 0;
	color: ${(props) => props.theme.colors.whitcolor};
	

`

export default About
