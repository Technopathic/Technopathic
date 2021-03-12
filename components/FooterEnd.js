import styled from '@emotion/styled'
import { useEffect } from 'react'
import { FiCode, FiLayout, FiCoffee } from "react-icons/fi"

const FooterEnd = (props) => {

    useEffect(() => {
        let vw = document.documentElement.clientWidth / 100
        document.documentElement.style.setProperty('--vw', `${vw}px`)
    })

    const FooterContainer = styled.section`
        display:flex;
        flex-direction: column;
        width: calc((var(--vw, 1vw) * 100));
        position: relative;
        left: 50%;
        right: 50%;
        margin-top: 2rem;
        margin-left: calc((var(--vw, 1vw) * 100) / -2);
        overflow:hidden;
        background: #a37aff;
        min-height:300px;
        justify-content:center;
        align-items:center;
    `

    return (
        <FooterContainer>
            <section className="w-full max-w-screen-lg flex flex-col py-8 px-4">
                <h1 className="text-white text-4xl md:text-6xl text-center mb-4">{props.title}</h1>
                <p className="text-white text-xl">{props.message}</p>
                <div className="w-full flex flex-col lg:flex-row justify-between my-4">
                    {props.demo ?
                        <a target="_blank" rel="noopener noreferrer" href={props.demo} className="flex flex-row items-center w-full lg:w-1/4 text-xl bg-pinkBrand justify-center h-14 rounded-md hover:opacity-70 transition-opacity no-underline" style={{ color: "#FFFFFF" }}><FiLayout size={24} color="#FFFFFF" className="mr-2" />View Demo</a>
                        :
                        <div className="flex flex-row items-center w-full lg:w-1/4 text-xl bg-pinkBrand justify-center h-14 rounded-md cursor-pointer opacity-40 transition-opacity" style={{ color: "#FFFFFF" }}><FiLayout size={24} color="#FFFFFF" className="mr-2" />View Demo</div>
                    }
                    {props.source ?
                        <a target="_blank" rel="noopener noreferrer" href={props.source} className="mt-6 lg:mt-0 flex flex-row items-center w-full lg:w-1/4 text-xl bg-blueBrand justify-center h-14 rounded-md hover:opacity-70 transition-opacity no-underline" style={{ color: "#FFFFFF" }}><FiCode size={24} color="#FFFFFF" className="mr-2" />Source Code</a>
                        :
                        <div className="mt-6 lg:mt-0 flex flex-row items-center w-full lg:w-1/4 text-xl bg-blueBrand justify-center h-14 rounded-md cursor-pointer opacity-40 transition-opacity" style={{ color: "#FFFFFF" }}><FiCode size={24} color="#FFFFFF" className="mr-2" />Source Code</div>
                    }
                    <a target="_blank" rel="noopener noreferrer" href={process.env.KO_FI} className="mt-6 lg:mt-0 flex flex-row items-center w-full lg:w-1/4 text-xl bg-whiteBrand justify-center h-14 rounded-md hover:opacity-70 transition-opacity no-underline" style={{ color: "#e2026b" }}><FiCoffee size={24} color="#e2026b" className="mr-2" />Support NowNano</a>
                </div>
            </section>
        </FooterContainer>
    )
}

export default FooterEnd