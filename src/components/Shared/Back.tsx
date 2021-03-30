import React from 'react'
import styled from '@emotion/styled'
import {BackIcon} from 'images'
interface Props {
	current: 'hero' | 'about' | 'projects' | 'contact'
    handleClick: (next: 'hero' | 'about' | 'projects' | 'contact') => void
}

export default function Back({
	current,
    handleClick
}: Props) {

    if (current === 'hero') return <></>
    return <Img current={current} id='back-button' src={BackIcon} onClick={ () => {
        switch (current) {
            case 'about':
                handleClick('hero')
                break;
            case 'projects':
                handleClick('about')
                break;
            case 'contact':
                handleClick('projects')
                break;
            default:
                break;
        }
    }} />
}

const Img = styled.img<{current: 'hero' | 'about' | 'projects' | 'contact'}>`
    position: absolute;
    ${(props) => {
        switch (props.current) {
            case 'about':
                return 'bottom: 10px; left: 10px;'
            case 'projects':
                return 'top: 10px; right: 10px; transform: scale(-1, 1);'
            default: 
                return ''
               
        }
    }}
	height: auto;
	width: auto;
    z-index: 10;
    cursor: pointer;
`
