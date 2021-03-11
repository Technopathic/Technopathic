import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const colors = [{ bg: '#e2026b', color: '#FFFFFF' }, { bg: '#ff5294', color: '#FFFFFF' }, { bg: '#5cef72', color: '#333333' }, { bg: '#45d4de', color: '#333333' }, { bg: '#a37aff', color: '#FFFFFF' }]

const ContentContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: 300ms ease-in-out all;
    position:fixed;
    height: 100vh;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    z-index: ${props => props.show ? 3 : -1};
    opacity: ${props => props.show ? 1 : 0};
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
    padding: 0rem 1rem;
 `

const BackDrop = styled.div`
    width: 100vw;
    height:100%;
    position:fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
`

const ContentItem = styled.a`
    border-left: 4px solid ${props => props.index < 4 ? colors[props.index].bg : colors[props.index % colors.length].bg};
    transition: all 250ms ease-in-out;
    color: #333333;

    &:hover {
        background: ${props => props.index < 4 ? colors[props.index].bg : colors[props.index % colors.length].bg};
        color: ${props => props.index < 4 ? colors[props.index].color : colors[props.index % colors.length].color};
    }
    
`

const Info = (props) => {
    const router = useRouter()
    const [showContent, setShowContent] = useState(false)

    const toggleContent = (show) => {
        setShowContent(show)
        if (show) {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        } else {
            document.getElementsByTagName("body")[0].style.overflow = "auto";
        }
    }

    const nextPage = (page) => {
        router.push(page.url)
    }

    return (
        <section className="w-full flex flex-col">
            <section className="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row mb-4 items-center justify-between">
                <section className="flex flex-row w-full items-center">
                    <img className="w-12 h-12 rounded-full m-0" src="/me.jpg" />
                    <section className="w-full flex flex-col ml-4 ">
                        <span>Ren</span>
                        <span className="text-sm text-gray-500">{props.date} · {props.time} min read</span>
                    </section>
                </section>
                <section className="flex flex-row mt-4 w-full md:w-auto lg:w-auto xl:w-auto">
                    {props.index === 0 ?
                        <div className="bg-blueBrand px-2 mr-1 py-2 cursor-pointer text-white rounded-md select-none opacity-30 transition-opacity"><FiChevronLeft size={24} color="#FFFFFF" /></div>
                        :
                        <div onClick={() => nextPage(props.content[props.index - 1])} className="bg-blueBrand px-2 mr-1 py-2 cursor-pointer text-white rounded-md select-none hover:opacity-70 transition-opacity"><FiChevronLeft size={24} color="#FFFFFF" /></div>
                    }
                    <div className="w-full text-center bg-blueBrand px-6 py-2 cursor-pointer text-white rounded-md select-none hover:opacity-70 transition-opacity" onClick={() => toggleContent(!showContent)}>Contents</div>
                    {props.index + 1 === props.content.length ?
                        <div className="bg-blueBrand px-2 ml-1 py-2 cursor-pointer text-white rounded-md select-none opacity-30 transition-opacity"><FiChevronRight size={24} color="#FFFFFF" /></div>
                        :
                        <div onClick={() => nextPage(props.content[props.index + 1])} className="bg-blueBrand px-2 ml-1 py-2 cursor-pointer text-white rounded-md select-none hover:opacity-70 transition-opacity"><FiChevronRight size={24} color="#FFFFFF" /></div>
                    }
                </section>
            </section>
            <ContentContainer show={showContent} className="no-scroll-bar">
                <BackDrop onClick={() => toggleContent(!showContent)} />
                <div className="relative w-full max-w-screen-lg z-10 flex flex-col mt-28">
                    {props.content.map((item, i) => (
                        <div className="w-full flex flex-col items-end" key={i}>
                            <Link href={item.url}>
                                <ContentItem index={i} href={item.url} onClick={() => toggleContent(false)} className="bg-whiteBrand w-full py-3 px-3 mb-6 no-underline select-none shadow-md">
                                    <span className="text-2xl">{item.chapter}</span>
                                </ContentItem>
                            </Link>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </section>
    )
}

export default Info