import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Fade from 'components/Shared/Fade'
import PortfolioContext from 'context/context'
import { CardContainer, CtaBtn } from 'components/Shared/styled'
function About({ projects }: { projects: () => void }) {
	const { about } = useContext(PortfolioContext)
	const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about

	return (
		<AboutContainer>
			<TitleRow>
				<Fade direction="down" distance={40} duration={600} delay={100}>
					<Title>About</Title>
				</Fade>
			</TitleRow>

			<RowCentered>
				<ColumnCenteredLeft>
					<Fade direction="right" distance={100} duration={600} delay={300}>
						<Img src={img} alt="me" />
					</Fade>
				</ColumnCenteredLeft>
				<ColumnCenteredRight>
					<Fade direction="right" distance={50} duration={600} delay={600}>
						<Paragraph>{paragraphOne}</Paragraph>
						<Paragraph>{paragraphTwo}</Paragraph>
						<Paragraph>{paragraphThree}</Paragraph>

						<ProjectBtn onClick={projects}>projects</ProjectBtn>
						<ResumeBtn onClick={() => window.open(resume)}>resume</ResumeBtn>
					</Fade>
				</ColumnCenteredRight>
			</RowCentered>
		</AboutContainer>
	)
}

const TitleRow = styled.div`
	height: 35%;
	width: 100%;
	display: flex;
`

const Title = styled.div`
	font-size: ${(props) => props.theme.fontSize.bigfontsize};
	font-weight: 700;
	margin-left: 100px;
	margin-top: 50px;
	color: ${(props) => props.theme.colors.darkBlueText};
`

const AboutContainer = styled(CardContainer)`
	transform: rotate(-180deg) scale(-1, 1);
	background-color: ${(props) => props.theme.colors.whitecolor};
	/* background-image: linear-gradient(
		135deg,
		${(props) => props.theme.colors.primary} 0%,
		${(props) => props.theme.colors.secondary} 100%
	); */
`

export const RowCentered = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const ColumnCenteredLeft = styled.div`
	display: flex;
	flex-direction: column;
`
export const ColumnCenteredRight = styled.div`
	display: flex;
`

const Img = styled.img`
	object-fit: cover;
	width: 350px;
	height: auto;
`

const Paragraph = styled.p`
	margin-top: 0;
	font-weight: 500;
	color: ${(props) => props.theme.colors.darkBlueText};
`

export const ResumeBtn = styled(CtaBtn)`
	color: ${(props) => props.theme.colors.darkBlueText};
	border: 2px solid ${(props) => props.theme.colors.darkBlueText};
	&::after {
		background: ${(props) => props.theme.colors.darkgrey};
	}

	&:hover {
		color: ${(props) => props.theme.colors.secondary};
		text-decoration: none;

		&::after {
			width: 100%;
		}
	}
	margin-right: 10px;
`
export const ProjectBtn = styled(CtaBtn)`
	color: ${(props) => props.theme.colors.darkBlueText};
	border: 2px solid ${(props) => props.theme.colors.darkBlueText};
	&::after {
		background: ${(props) => props.theme.colors.darkgrey};
	}

	&:hover {
		color: ${(props) => props.theme.colors.aboutprimary};
		text-decoration: none;

		&::after {
			width: 100%;
		}
	}
	margin-right: 10px;
`

export default About
