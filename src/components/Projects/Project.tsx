import React from 'react'
import styled from '@emotion/styled'
import Fade from 'components/Shared/Fade'
import { CardContainer, CtaBtn } from 'components/Shared/styled'
function Project({
	project,
}: {
	project: {
		id: string
		img: string
		title: string
		info: string
		info2: string
		url: string
		repo: string
	}
}) {
	const { id, img, title, info, info2, url, repo } = project

	return (
		<ProjectContainer id={id}>
			<ColumnCenteredLeft>
				<Fade direction="right" distance={100} duration={600} delay={300}>
					<Title>{title}</Title>
					<SubTitle>{info}</SubTitle>
					<SubTitle>{info2}</SubTitle>
					<LiveBtn onClick={() => window.open(url)}>live</LiveBtn>
					<SourceBtn onClick={() => window.open(repo)}>code</SourceBtn>
				</Fade>
			</ColumnCenteredLeft>
			<ColumnCenteredRight>
				<Fade direction="right" distance={50} duration={600} delay={600}>
					<Img key={img} src={img} alt="me" />
				</Fade>
			</ColumnCenteredRight>
		</ProjectContainer>
	)
}

const ProjectContainer = styled(CardContainer)`
	display: flex;
	flex-direction: row;
`

export const ColumnCenteredLeft = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`
export const ColumnCenteredRight = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
`

const Title = styled.div`
	font-size: ${(props) => props.theme.fontSize.midfontsize};
	font-weight: 700;
	color: ${(props) => props.theme.colors.darkBlueText};
`
const SubTitle = styled.div`
	font-size: ${(props) => props.theme.fontSize.defaultfontsize};
	font-weight: 400;
	margin-top: 50px;
	color: ${(props) => props.theme.colors.darkBlueText};
`

const SourceBtn = styled(CtaBtn)`
	margin-top: 50px;
	color: ${(props) => props.theme.colors.darkgrey};
	border: 2px solid ${(props) => props.theme.colors.darkgrey};
	&::after {
		background: ${(props) => props.theme.colors.darkgrey};
	}
	&:hover {
		color: ${(props) => props.theme.colors.aboutsecondary};
		text-decoration: none;

		&::after {
			width: 100%;
		}
	}
	margin-right: 10px;
`
const LiveBtn = styled(CtaBtn)`
	margin-top: 50px;
	color: ${(props) => props.theme.colors.darkgrey};
	border: 2px solid ${(props) => props.theme.colors.darkgrey};
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

const Img = styled.img`
	object-fit: cover;
	height: 375px;
	width: auto;
`

export default Project
