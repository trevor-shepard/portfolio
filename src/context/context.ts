import React from 'react'

interface ContextShape {
	hero: {
		title: string
		name: string
		subtitle: string
		cta: string
	}
	about: {
		img: string
		paragraphOne: string
		paragraphTwo: string
		paragraphThree: string
		resume: string
	}
	projects: {
		id: string
		img: string
		title: string
		info: string
		info2: string
		url: string
		repo: string
	}[]
}

// @ts-ignore
const initalState: ContextShape = {}

const PortfolioContext = React.createContext(initalState)

export const PortfolioProvider = PortfolioContext.Provider
export const PortfolioConsumer = PortfolioContext.Consumer

export default PortfolioContext
