import Head from 'next/head'
import styled from "@emotion/styled"

import { FiInstagram, FiTwitter, FiGithub } from 'react-icons/fi'
import { FaTwitch, FaLinkedin } from 'react-icons/fa'

const data = require("../data/cv-data.json")

const Main = styled.main`
    width:100%;
    max-width: 1240px;
    height: 100%;
    max-height: 1754px;
    margin:0 auto;
    margin-top:32px;
    padding:32px;

    @media(max-width:768px) {
        padding:8px;
    }
`

const Tread = styled.div`
    height: 32px;
    width: 100%;
    opacity: 0.08;
    position: absolute;
    left:0;
    top:-4;
    z-index:9;
    border-radius:3px;
    border:1px solid #222222;
`

const Header = styled.header`
    height:240px;
    width: 100%;
    text-transform: uppercase;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const HeaderCircle = styled.div`
    height: 700px;
    width: 700px;
    position: absolute;
    top:-260px;
    border-radius:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ExpImage = styled.div`
    min-width: 86px;
    width: 86px;
    height: 86px;
    margin-right:8px;
    border-radius:5px;
    overflow:hidden;
`

const PortImage = styled.div`
    min-width: 75px;
    width: 75px;
    height: 75px;
    margin-right:8px;
    border-radius:5px;
    overflow:hidden;
`

const LeftText = styled.div`
    transform: rotate(-15deg) skew(-18deg);
    width: 450px;
    color: #ff5294;
    font-size:2rem;
`

const HeaderDivider = styled.div`
    height:8px;
    width:450px;
    transform: rotate(-15deg) skew(-18deg);
`

const LargeText = styled.div`
    transform: rotate(-15deg) skew(-18deg);
    width: 600px;
    font-size:3rem;
    text-align: center;
    font-weight:bold;
`

const RightText = styled.div`
    transform: rotate(-15deg) skew(-18deg);
    width: 450px;
    color: #45d4de;
    font-size:2rem;
    text-align: right;
`

const CV = () => (
    <Main>
        <Head>
            <link rel='stylesheet' type='text/css' media='print' href='../globals.css' />
        </Head>
        <div className="flex flex-row w-full fixed top-0 left-0 right-0">
            <div className="w-1/5 h-1.5 bg-redBrand shadow-redShadow"></div>
            <div className="w-1/5 h-1.5 bg-pinkBrand shadow-pinkShadow"></div>
            <div className="w-1/5 h-1.5 bg-greenBrand shadow-greenShadow"></div>
            <div className="w-1/5 h-1.5 bg-blueBrand shadow-blueShadow"></div>
            <div className="w-1/5 h-1.5 bg-purpleBrand shadow-purpleShadow"></div>
        </div>
        <Header>
            <HeaderCircle>
                <LeftText>{data.sloganOne}</LeftText>
                <HeaderDivider className="bg-darkGrayBrand dark:bg-whiteBrand" />
                <LargeText className="text-gray-700 dark:text-gray-50">{data.name}</LargeText>
                <HeaderDivider className="bg-darkGrayBrand dark:bg-whiteBrand" />
                <RightText>{data.sloganTwo}</RightText>
            </HeaderCircle>
        </Header>
        <div className="w-full flex flex-col justify-between mb-6 md:flex-row">
            <div className="flex flex-col w-full md:w-7/12 mr-2">
                <div className="flex items-center relative mb-4">
                    <span className="text-xl px-1 uppercase font-bold">Profile</span>
                    <Tread className="bg-cvDividerLight dark:bg-cvDividerDark" />
                </div>
                <p className="leading-snug m-0">{data.profile}</p>
            </div>
            <div className="flex flex-col w-full md:w-4/12">
                <div className="flex items-center relative mb-4">
                    <span className="text-xl px-1 uppercase font-bold">Personal</span>
                    <Tread className="bg-cvDividerLight dark:bg-cvDividerDark" />
                </div>
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold w-3/6">Birthday</span>
                    <span className="w-3/6">{data.personal.birthday}</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold w-3/6">Nationality</span>
                    <span className="w-3/6">{data.personal.nationality}</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold w-3/6">Languages</span>
                    <span className="w-3/6">{data.personal.languages}</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold w-3/6">Mobile</span>
                    <span className="w-3/6">{data.personal.mobile}</span>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold w-3/6">E-mail</span>
                    <span className="w-3/6">{data.personal.email}</span>
                </div>
            </div>

        </div>
        <div className="w-full flex flex-col mb-6">
            <div className="flex items-center relative mb-6">
                <span className="text-xl px-1 uppercase font-bold">Experience</span>
                <Tread className="bg-cvDividerLight dark:bg-cvDividerDark" />
            </div>
            <div className="flex flex-col flex-wrap md:flex-row">
                {data.experience.map((exp, i) => (
                    <div className="flex flex-row w-full md:w-3/6 mb-4" key={i}>
                        <ExpImage>
                            <img src={exp.image} />
                        </ExpImage>
                        <div className="flex flex-col">
                            <span className="font-semibold">{exp.title}</span>
                            <span>{exp.company} • {exp.position}</span>
                            <span className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate} • {exp.length}</span>
                            <span className="text-gray-500 text-sm">{exp.location}</span>
                            <p className="text-sm m-0 uppercase">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full flex flex-col mb-6">
            <div className="flex items-center relative mb-6">
                <span className="text-xl px-1 uppercase font-bold">Portfolio</span>
                <Tread className="bg-cvDividerLight dark:bg-cvDividerDark" />
            </div>
            <div className="flex flex-col md:flex-row flex-wrap">
                {data.portfolio.map((port, i) => (
                    <div className="flex flex-row w-full md:w-3/6 mb-4" key={i}>
                        <PortImage>
                            <img src={port.image} />
                        </PortImage>
                        <div className="flex flex-col">
                            <span className="font-semibold">{port.title}</span>
                            <div className="flex">
                                {port.skills.map((skill, j) => (
                                    <div className="bg-grayBrand px-1 py-0.5 mr-1 rounded text-sm dark:bg-darkGrayBrand" key={j}>{skill}</div>
                                ))}
                            </div>
                            <p className="text-sm uppercase">{port.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full flex flex-col mb-6">
            <div className="flex items-center relative mb-6">
                <span className="text-xl px-1 uppercase font-bold">Writings</span>
                <Tread className="bg-cvDividerLight dark:bg-cvDividerDark" />
            </div>
            <div className="flex flex-col md:flex-row flex-wrap">
                {data.writings.map((writ, i) => (
                    <div className="flex flex-row w-full md:w-3/6 mb-4" key={i}>
                        <div className="flex flex-col">
                            <span className="font-semibold">{writ.title}</span>
                            <span className="text-gray-500 text-sm">{writ.date}</span>
                            <p className="text-sm uppercase">{writ.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full flex flex-col mb-6">
            <div className="flex items-center relative mb-6">
                <span className="text-xl px-1 uppercase font-bold">Social</span>
                <Tread className="bg-cvDividerLight dark:bg-cvDividerDark" />
            </div>
            <div className="flex flex-col md:flex-row flex-wrap">
                <div className="flex flex-row w-full md:w-1/5 items-center mb-4">
                    <FiGithub size={36} color="#333333" />
                    <div className="flex flex-col ml-2">
                        <span className="font-semibold">Github</span>
                        <div>{data.social.github.name}</div>
                    </div>
                </div>
                <div className="flex flex-row w-full md:w-1/5 items-center mb-4">
                    <FaLinkedin size={36} color="#0077b5" />
                    <div className="flex flex-col ml-2">
                        <span className="font-semibold">LinkedIn</span>
                        <div>{data.social.linkedin.name}</div>
                    </div>
                </div>
                <div className="flex flex-row w-full md:w-1/5 items-center mb-4">
                    <FiTwitter size={36} color="#1da1f2" />
                    <div className="flex flex-col ml-2">
                        <span className="font-semibold">Twitter</span>
                        <div>{data.social.twitter.name}</div>
                    </div>
                </div>
                <div className="flex flex-row w-full md:w-1/5 items-center mb-4">
                    <FaTwitch size={36} color="#9146ff" />
                    <div className="flex flex-col ml-2">
                        <span className="font-semibold">Twitch</span>
                        <div>{data.social.twitch.name}</div>
                    </div>
                </div>
                <div className="flex flex-row w-full md:w-1/5 items-center mb-4">
                    <FiInstagram size={36} color="#e1306c" />
                    <div className="flex flex-col ml-2">
                        <span className="font-semibold">Instagram</span>
                        <div>{data.social.instagram.name}</div>
                    </div>
                </div>
            </div>
        </div>

    </Main>
)
export default CV