import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Fade from 'components/Shared/Fade'
import PortfolioContext from 'context/context'
import { CardContainer, CtaBtn } from 'components/Shared/styled'
function Hero({ flip }: { flip: () => void }) {
	const { hero } = useContext(PortfolioContext)
	const { title, name, subtitle } = hero

	return (
		<HeroContainer>
			<Fade distance={100} duration={500} delay={0} direction="right">
				<TitleRow>
					<Title>{title}</Title>
					<Name>{name}</Name>
				</TitleRow>
				<Title>{subtitle}</Title>
			</Fade>
			<Fade distance={100} duration={500} delay={600} direction="right">
				<HeroBtn onClick={flip}>learn more</HeroBtn>
			</Fade>
		</HeroContainer>
	)
}

const HeroContainer = styled(CardContainer)`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.whitecolor};
`

export const HeroBtn = styled(CtaBtn)`
	margin-top: 50px;
	color: ${(props) => props.theme.colors.darkgrey};
	border: 2px solid ${(props) => props.theme.colors.darkgrey};
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
`

const TitleRow = styled.div`
	display: flex;
	flex-direction: row;
`

const Title = styled.div`
	font-size: ${(props) => props.theme.fontSize.bigfontsize};
	font-weight: 700;
`

const Name = styled.div`
	font-size: ${(props) => props.theme.fontSize.bigfontsize};
	font-weight: 700;
	margin-left: 10px;
	color: ${(props) => props.theme.colors.primary};
`

export default Hero
