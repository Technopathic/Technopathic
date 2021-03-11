import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { FiInstagram, FiTwitter, FiGithub } from 'react-icons/fi'
import { FaTwitch } from 'react-icons/fa'
import { SiDiscord } from "react-icons/si"

const HeaderWrapper = styled.header`
    transition: all 0.3s ease 0s;
    transform: ${(props) => !props.show ? "translate3d(0px, -80px, 0px)" : "translate3d(0px, 0px, 0px)"};
    background-color: ${(props) => props.scrollPos === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.4)'};  
    backdrop-filter: ${(props) => props.scrollPos === 0 ? 'blur(0px);' : 'blur(5px);'};
`;


const Header = () => {
    const [showHeader, setHeader] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const handleScroll = () => {
        if (document.body.getBoundingClientRect().top === 0) {
            setHeader(true);
            setScrollPos(0);
        } else {
            setScrollPos(document.body.getBoundingClientRect().top);
            setHeader(document.body.getBoundingClientRect().top > scrollPos);
        }
    };

    return (
        <HeaderWrapper
            transparent={showHeader && scrollPos === 0}
            show={showHeader}
            scrollPos={scrollPos}
            className="h-20 pt-3 w-full flex flex-row justify-center items-center fixed top-0 left-0 right-0 z-10 box-border"
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
                        <a href="/" className="flex flex-row items-center no-underline text-gray-700 text-2xl cursor-pointer select-none">
                            <h3 className="m-0 text-gray-700">NowNano</h3>
                            <div className="animatedCursor" />
                        </a>
                    </Link>
                </section>
                <section className="flex items-center">
                    <a target="_blank" rel="noopener noreferrer" href={process.env.DISCORD}><div className="py-1 mx-2 text-gray-600 hover:opacity-70"><SiDiscord size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.GITHUB}><div className="py-1 mx-2 text-gray-600 hover:opacity-70"><FiGithub size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.TWITTER}><div className="py-1 mx-2 text-gray-600 hover:opacity-70"><FiTwitter size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.TWITCH}><div className="py-1 mx-2 text-gray-600 hover:opacity-70"><FaTwitch size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.INSTAGRAM}><div className="py-1 mx-2 text-gray-600 hover:opacity-70"><FiInstagram size={26} /></div></a>
                </section>
            </section>
        </HeaderWrapper>
    )
}

export default Header
