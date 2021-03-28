import styled from '@emotion/styled'

export const CardContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`

export const TitleRow = styled.div`
	height: 25%;
	display: flex;
	justify-content: center;
	margin-bottom: 5%;
`

export const SectionTitle = styled.h2`
	margin: 0px;
	margin-bottom: 4.5rem;
	font-size: ${(props) => props.theme.fontSize.bigfontsize};
	color: ${(props) => props.theme.colors.whitecolor};
	font-weight: bold;
	text-transform: uppercase;
`

export const CtaBtn = styled.a`
	cursor: pointer;
	display: inline-block;
	position: relative;
	padding: 0.8rem ${(props) => props.theme.fontSize.defaultfontsize};
	color: ${(props) => props.theme.colors.whitecolor};
	font-weight: bold;
	line-height: 1;
	z-index: 1;
	text-decoration: none;
	text-transform: uppercase;
	transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
	&::after {
		content: '';
		display: block;
		position: absolute;
		width: 0px;
		height: 100%;
		left: 0;
		bottom: 0;
		z-index: -1;
		transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
	}
`
