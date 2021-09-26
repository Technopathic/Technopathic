import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { FiMoon, FiSun } from 'react-icons/fi'
const HeaderWrapper = styled.header`
    transition: all 0.3s ease 0s;
    transform: ${(props) => !props.show ? "translate3d(0px, -80px, 0px)" : "translate3d(0px, 0px, 0px)"};
    backdrop-filter: ${(props) => props.scrollPos === 0 ? 'blur(0px);' : 'blur(5px);'};
    background-color: ${(props) => props.scrollPos === 0 ? 'transparent' : props.theme === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(34, 34, 34, 0.4)'};
`

const Header = (props) => {
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
            show={showHeader}
            scrollPos={scrollPos}
            theme={props.theme}
            className="h-20 pt-3 w-full flex flex-row justify-center items-center fixed top-0 left-0 right-0 z-10 box-border"
        >
            <div className="flex flex-row w-full fixed top-0 left-0 right-0">
                <div className="w-1/5 h-1.5 bg-redBrand shadow-redShadow"></div>
                <div className="w-1/5 h-1.5 bg-pinkBrand shadow-pinkShadow"></div>
                <div className="w-1/5 h-1.5 bg-greenBrand shadow-greenShadow"></div>
                <div className="w-1/5 h-1.5 bg-blueBrand shadow-blueShadow"></div>
                <div className="w-1/5 h-1.5 bg-purpleBrand shadow-purpleShadow"></div>
            </div>
            <section className="w-full max-w-screen-xl flex justify-between items-center mx-4">
                <section className="flex items-center">
                    <Link href="/">
                        <a href="/" className="flex flex-row items-center no-underline text-2xl cursor-pointer select-none">
                            <h3 className="m-0 text-gray-700 dark:text-gray-50">NowNano</h3>
                            <div className="animatedCursor" />
                        </a>
                    </Link>
                </section>
                <section className="flex items-center">
                    <Link href="/about">
                        <a href="/about" className="py-1 mx-2 text-gray-600 no-underline hover:opacity-70 dark:text-gray-200">About</a>
                    </Link>
                    {props.theme === 'light' ?
                        <div className="py-1 mx-2 text-gray-600 hover:opacity-70 cursor-pointer dark:text-gray-200" onClick={() => props.handleTheme('dark')}><FiMoon size={26} /></div>
                        :
                        <div className="py-1 mx-2 text-gray-600 hover:opacity-70 cursor-pointer dark:text-gray-200" onClick={() => props.handleTheme('light')}><FiSun size={26} /></div>
                    }
                </section>
            </section>
        </HeaderWrapper>
    )
}

export default Header
