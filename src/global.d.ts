import '@emotion/react'

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			primary: string
			secondary: string
			darkBlueText: string
			whitecolor: string
			darkgrey: string
			projectprimary: string
			projectsecondary: string
			aboutsecondary: string
			aboutprimary: string
		}

		fontSize: {
			defaultfontsize: string
			bigfontsize: string
			midfontsize: string
		}
		device: string
	}
}
