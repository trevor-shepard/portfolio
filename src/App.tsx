import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import { PortfolioProvider } from 'context/context'
import { headData, heroData, aboutData, projectsData } from 'data'
import Card from 'components/Card/Card'
import ResponsiveThemeProvider from 'styles/ResponsiveThemeProvider'
function App() {
	const { title, lang, description } = headData

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{title || 'Gatsby Simplefolio'}</title>
				<html lang={lang || 'en'} />
				<meta
					name="description"
					content={description || 'Gatsby Simplefolio'}
				/>
			</Helmet>
			<PortfolioProvider
				value={{ hero: heroData, about: aboutData, projects: projectsData }}
			>
				<ResponsiveThemeProvider>
					<Container>
						<Card />
					</Container>
				</ResponsiveThemeProvider>
			</PortfolioProvider>
		</>
	)
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default App
