import '@emotion/react'

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			primary: string
			secondary: string
			darkBlueText: string
			whitcolor: string
			darkgrey: string
		}

		fontSize: {
			defaultfontsize: string
			bigfontsize: string
			midfontsize: string
		}
		device: string
	}
}
