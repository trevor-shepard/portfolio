import React from 'react'
import { SectionTitle, TitleRow } from 'components/Shared/styled'
import Fade from 'components/Shared/Fade'
interface Props {
	title: string
}
const Title = ({ title }: Props) => {
	return (
		<TitleRow>
			<Fade direction="down" distance={40} duration={600} delay={100}>
				<SectionTitle>{title}</SectionTitle>
			</Fade>
		</TitleRow>
	)
}

export default Title
