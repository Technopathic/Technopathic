import Link from 'next/link'
import { FiInstagram, FiTwitter, FiGithub } from 'react-icons/fi'
import { FaTwitch } from 'react-icons/fa'

import { jsx, css, keyframes } from '@emotion/react'

const Header = ( props ) => {

    const animFlash = keyframes`
        50% {
            opacity: 0.0;
        }
    `

    const animatedCursor = css`
        background:#e44884;
        height:22px;
        width:10px;
        margin-left:3px;
        animation: ${animFlash} 0.7s infinite;
        animation-duration: 0.7s;
        animation-timing-function: ease;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: none;
        animation-play-state: running;
    `

    return (
        <header 
            className="h-16 w-full flex flex-row justify-center items-center fixed top-0 left-0 right-0 z-50 box-border bg-white bg-opacity-20 border-solid border-b border-gray-100 filter-blur"
        >
            <div className="flex flex-row w-full fixed top-0 left-0 right-0">
                <div className="w-1/5 h-1.5 bg-redBrand shadow-redShadow"></div>
                <div className="w-1/5 h-1.5 bg-pinkBrand shadow-pinkShadow"></div>
                <div className="w-1/5 h-1.5 bg-greenBrand shadow-greenShadow"></div>
                <div className="w-1/5 h-1.5 bg-blueBrand shadow-blueShadow"></div>
                <div className="w-1/5 h-1.5 bg-purpleBrand shadow-purpleShadow"></div>
            </div>
            <section className="w-full max-w-screen-lg flex justify-between items-center mx-4">
                <section className="flex items-center">
                    <Link href="/">
                        <a href="/" className="flex flex-row items-center no-underline text-gray-700 text-xl cursor-pointer select-none">
                            <span className="text-pink-500 mr-1">$</span>
                            <span className="font-bold">NowNano</span>
                            <div css={animatedCursor} />
                        </a>
                    </Link>
                </section>
                <section className="flex items-center">
                    <a target="_blank" href={process.env.GITHUB}><div className="py-1 mx-2 text-gray-600 hover:opacity-70"><FiGithub size={26} /></div></a>         
                    <a target="_blank" href={process.env.TWITTER}><div className="py-1 mx-2 text-gray-600 hover:opacity-70"><FiTwitter size={26} /></div></a>                       
                    <a target="_blank" href={process.env.TWITCH}><div className="py-1 mx-2 text-gray-600 hover:opacity-70"><FaTwitch size={26} /></div></a>
                    <a target="_blank" href={process.env.INSTAGRAM}><div className="py-1 mx-2 text-gray-600 hover:opacity-70"><FiInstagram size={26} /></div></a>                                 
                </section>    
            </section>
        </header>
    )
}

export default Header
