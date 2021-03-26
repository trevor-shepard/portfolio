import React  from 'react'
import styled from '@emotion/styled'
import { animated, 
	// useSpring 
} from 'react-spring'
import About from 'components/About/About'
// const calc = (x: number, y: number) => [
// 	-(y - window.innerHeight / 2) / 100,
// 	(x - window.innerWidth / 2) / 100,
// 	1.0001,
// ]
// const trans = (x: number, y: number, s: number) =>
// 	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card() {
	// const [screen, setScreen] = useState<
	// 	'hero' | 'about' | 'projects' | 'contact'
	// >('about')
	// const [props, set] = useSpring(() => ({
	// 	xys: [0, 0, 1],
	// 	config: { mass: 20, tension: 200, friction: 200 },
	// }))
	// const [toggle, setToggle] = useState(false)
	// const [toggling, setToggling] = useState(false)
	// const [isDesktop, setIsDesktop] = useState(false)
	// const [isMobile, setIsMobile] = useState(false)

	// useEffect(() => {
	// 	if (window.innerWidth > 769) {
	// 		setIsDesktop(true)
	// 		setIsMobile(false)
	// 	} else {
	// 		setIsMobile(true)
	// 		setIsDesktop(false)
	// 	}
	// }, [])

	// useEffect(() => {
	// 	setToggling(true)
	// 	switch (screen) {
	// 		case 'hero':
	// 			set({ xys: [180, 0, 1] })
	// 			break
	// 		case 'about':
	// 			set({ xys: [-180, 0, 1] })
	// 			break
	// 		case 'projects':
	// 			set({ xys: [0, 180, 1] })
	// 			break
	// 		case 'hero':
	// 			set({ xys: [, -180, 1] })
	// 			break
	// 		default:
	// 			break
	// 	}

	// 	setTimeout(() => setToggling(false), 5000)
	// }, [toggle])
	// useEffect(() => {
	// 	console.log('screen changed!')

	// }, [screen, set ])

	return (
		<CardContainer
			// onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
			// onMouseLeave={() => {
			// 	if (toggling) return null
			// 	set({ xys: [0, 0, 1] })
			// }}
			// @ts-ignore
			// style={{ transform: props.xys.interpolate(trans) }}
		>
			 <About />
		</CardContainer>
	)
}

const CardContainer = styled(animated.div)`
	width: 900px;
	height: 600px;
	background: grey;
	border-radius: 5px;
	background-size: cover;
	background-position: center center;
	box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
	transition: box-shadow 0.5s;
	will-change: transform;
	border: 15px solid white;
`

export default Card
