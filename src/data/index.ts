import { nanoid } from 'nanoid'
import * as Images from 'images'
// HEAD DATA
export const headData = {
	title: 'Trevor | Developer', // e.g: 'Name | Developer'
	lang: 'en', // e.g: en, es, fr, jp
	description: 'Welcome Friend', // e.g: Welcome to my website
}

// HERO DATA
export const heroData = {
	title: 'Trevor Shepard',
	name: 'Developer',
	subtitle: 'looking for new opportunities',
	cta: '',
}

// ABOUT DATA
export const aboutData = {
	img: Images.AboutImage,
	paragraphOne:
		'I am a full stack software engineer who came from a healthcare background with a passion for building tools to help people solve real problems.',
	paragraphTwo:
		'I am experienced with React, React-Native, Redux, Firebase, Serverless APIs, Node.js, Express, Django',
	paragraphThree:
		"When I'm not coding you can usually find me either on my bike or in front of a chess board.",
	resume:
		'https://docs.google.com/document/d/1k5CexnzFCwYeYIiF1LhVB3AVV2570W10iZWD-4d4iQQ/edit?usp=sharing', // if no resume, the button will not show up
}

// PROJECTS DATA
export const projectsData = [
	{
		id: nanoid(),
		img: Images.SoSoGif,
		title: 'Southern Solidarity Maps Project',
		info:
			'Platform for Southern Solidarity members to track interactions with Community Members',
		info2: '',
		url: 'https://soso-maps.vercel.app/',
		repo: 'https://github.com/trevor-shepard/stf-web', // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: Images.STFGif,
		title: 'Shame to Fame',
		info: 'Gamified Habit Tracking Social Platform ',
		info2:
			'Track your healthy and not so healthy habits along with friends to see who ends up on top',
		url: 'https://stf-web.vercel.app/',
		repo: 'https://github.com/trevor-shepard/soso-maps', // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: Images.incubateMe,
		title: 'IncubateMe',
		info: 'We help micro-entrepreneurs launch and run businesses.',
		info2:
			'We offer business concierge service channeling cutting edge tech tools, thought leadership, and business strategy and operational help to micro-entrepreneurs.',
		url: 'https://incubate-me-web.vercel.app/',
		repo: 'https://github.com/trevor-shepard/incubate-me-web', // if no repo, the button will not show up
	},
]

// CONTACT DATA
export const contactData = {
	cta: '',
	btn: '',
	email: '',
}

// FOOTER DATA
export const footerData = {
	networks: [
		{
			id: nanoid(),
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/trevor-shepard-3a9b92a2/',
		},
		{
			id: nanoid(),
			name: 'github',
			url: 'https://github.com/trevor-shepard',
		},
	],
}

// Github start/fork buttons
export const githubButtons = {
	isEnabled: true, // set to false to disable the GitHub stars/fork buttons
}
