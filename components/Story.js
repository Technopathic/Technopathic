import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import { FiVolumeX, FiVolume2, FiPlay, FiPause, FiShare2, FiMail, FiMoreHorizontal, FiLink, FiX, FiRotateCcw } from 'react-icons/fi'
import { SiTwitter, SiLinkedin } from 'react-icons/si'

const TimerAnim = keyframes`
    0% { width: 0px; }
    100% { width: 100%; }
`

const TransitionIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const TransitionOut = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`

const Container = styled.div`
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter:blur(30px);
    height:100vh;
    width:100%;
    position: absolute;
    left:0;
    right:0;
    top:0;
    z-index:99;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    overflow:hidden;
    animation: ${props => props.animateOnRender ? TransitionIn : TransitionOut} 250ms linear forwards;
`

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    height:50px;
    padding: 0px 16px;
    align-items: center;

    @media(max-width: 425px) {
        display:none;
    }
`

const Options = styled.section`
    display: flex;
    flex-direction: row;
`

const Option = styled.span`
    cursor: pointer;
    margin-left:24px;
`

const Timer = styled.div`
    height:4px;
    width: calc(99% / ${props => props.count});
    background: ${props => props.full ? "#EEEEEE" : "#CCCCCC"};

    @media(max-width: 425px) {
        height: 3px;
    }
`

const TimerFill = styled.div`
    width: 100%;
    height:3px;
    background: #EEEEEE;
    animation: ${TimerAnim} ${props => props.time || 10000}ms linear forwards; 
    animation-play-state: ${props => props.play ? 'running' : 'paused'}; 
`

const Footer = styled.footer`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    height:60px;
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
    align-items: center;

    @media(max-width: 425px) {
        position: absolute;
        top: 6px;
        left: 0;
        right: 0;
        align-items: flex-start;
    }
`

const Main = styled.main`
    display: flex;
    flex-direction: row;
    flex-grow:1;
    position: relative;
    align-items: center;
`

const Item = styled.article`
    background: #555555;
    width: 540px;
    height: 960px;
    position: absolute;
    left: ${props => props.active ? `calc(50vw - 270px)` : props.index > props.activeIndex ? `calc((50vw - 270px) + (${props.index - props.activeIndex} * (540px + 64px)))` : `calc((50vw - 270px) + (${props.index - props.activeIndex} * (540px + 64px)))`};
    transition: all 250ms linear;
    opacity: ${props => props.active ? 1 : 0.6};

    @media(max-width: 425px) {
        width: 100%;
        height: 100%;
        left: ${props => props.active ? `0` : `calc(${props.index - props.activeIndex} * 100vw)`};
    }
`

const ShareDrawer = styled.section`
    position: absolute;
    width: 325px;
    height: 100vh;
    top:0;
    right: ${props => props.show ? '0px' : '-325px'};
    background: #222222;
    z-index:9;
    transition: all 250ms linear;
    overflow:hidden;

    @media(max-width: 425px) {
        width: 100%;
        height:140px;
        top: auto;
        right: auto;
        bottom: ${props => props.show ? '0px' : '-150px'};
    }
`

const ShareHeader = styled.section`
    height:40px;
    color: #FFFFFF;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #444444;
`

const ShareGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 16px;
    padding:16px;

    @media(max-width: 425px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        height: 110px;
        overflow-x: auto;
        gap: 8px;
        padding: 8px;
    }
`

const ShareItem = styled.span`
    background: #444444;
    width: 82px;
    height:82px;
    border-radius:5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor:pointer;
`
const ShareFooter = styled.div`
    height:40px;
    width:100%;
    color: #FFFFFF;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    background:#333333;
    position: absolute;
    bottom:${props => props.show ? '0' : '-40px'};
    right:0;
    z-index:10;
    padding: 0px 8px;
    transition: all 250ms ease-in;
`

const ShareBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
`

const StoryContainer = (props) => {
    const [data, setData] = useState([{ test: "TestData", time: 2000 }, { test: "testData2", time: 2000 }, { test: "testData3", time: 2000 }])
    const [sound, setSound] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const [play, setPlay] = useState(true)
    const [intervalState, setIntervalState] = useState(null)
    const [date, setDate] = useState(null)
    const [pauseTime, setPauseTime] = useState(0)
    const [shareDrawer, setShareDrawer] = useState(false)
    const [shareFooter, setShareFooter] = useState(false)
    const [allowShare, setAllowShare] = useState(true)
    const [shareTimeout, setShareTimeout] = useState(null)
    const [animateOnRender, setAnimateOnRender] = useState(true)

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (activeIndex + 1 < data.length && play) {
            setDate(Date.now())
            setIntervalState(setInterval(() => {
                setAllowShare(true)
                setActiveIndex(activeIndex + 1)
            }, data[activeIndex].time || 10000))
            return () => clearInterval(intervalState)
        } else {
            setDate(Date.now())
            if (activeIndex + 1 === data.length) {
                setShareTimeout(setTimeout(() => {
                    handleShare(true)
                }, data[activeIndex].time || 10000))
            }

            return () => clearInterval(intervalState)
        }
    }, [activeIndex])

    const closeDialog = () => {
        setAnimateOnRender(false)
        setTimeout(() => {
            props.setShowDialog(false)
        }, 250)
    }

    const shiftItem = (index, e) => {
        setAllowShare(false)
        clearInterval(intervalState)
        clearTimeout(shareTimeout)

        if (index > activeIndex) {
            if (activeIndex + 1 <= data.length) {
                setActiveIndex(activeIndex + 1)
            }
        } else if (index < activeIndex) {
            if (activeIndex - 1 >= 0) {
                setActiveIndex(activeIndex - 1)
            }
        } else if (index === activeIndex) {
            let rect = e.target.getBoundingClientRect()
            if (e.clientX - rect.left <= 1080 / 4) {
                if (activeIndex - 1 >= 0) {
                    setActiveIndex(activeIndex - 1)
                }
            } else {
                if (activeIndex + 1 < data.length) {
                    setActiveIndex(activeIndex + 1)
                }
            }
        }
    }

    const handlePlay = (option) => {
        clearInterval(intervalState)
        clearTimeout(shareTimeout)
        if (option === false) {
            setPlay(false)
            setPauseTime((date - Date.now()) * -1)
            setAllowShare(false)
        } else {
            setPlay(true)
            setAllowShare(true)
            if (activeIndex + 1 < data.length) {
                setTimeout(() => {
                    setActiveIndex(activeIndex + 1)
                }, pauseTime + 800)
            } else {
                setTimeout(() => {
                    handleShare(true, true)
                }, pauseTime + 800)
            }
        }
    }

    const handleShare = (option, fromClick = false) => {
        if (fromClick || allowShare) {
            if (option) {
                handlePlay(false)
                setShareDrawer(true)
            } else {
                setShareDrawer(false)
                if (activeIndex + 1 !== data.length) {
                    handlePlay(true)
                }
            }
        }
    }

    const shareLink = () => {
        setShareFooter(true)
        setTimeout(() => {
            setShareFooter(false)
        }, 3000)
    }

    const replayStory = () => {
        setActiveIndex(0)
        handleShare(false, true)
        setPlay(true)
    }

    return (
        <Container animateOnRender={animateOnRender}>
            <Header>
                <Options>
                    <Option onClick={() => setSound(!sound)}>{sound ? <FiVolume2 size={32} /> : <FiVolumeX size={32} />}</Option>
                    <Option onClick={() => handlePlay(!play)}>{play ? <FiPause size={32} /> : <FiPlay size={32} />}</Option>
                    <Option onClick={() => handleShare(!shareDrawer, true)}><FiShare2 size={32} /></Option>
                    {props.setShowDialog && <Option onClick={closeDialog}><FiX size={32} /></Option>}
                </Options>
            </Header>
            <Main>
                {data.map((d, i) => (
                    <Item active={activeIndex === i} activeIndex={activeIndex} index={i} onClick={(e) => shiftItem(i, e)} key={i}>{d.test}</Item>
                ))}
            </Main>
            <Footer>
                {data.map((d, i) => (
                    <Timer key={i} full={i < activeIndex} count={data.length} >{i === activeIndex ? <TimerFill time={d.time} play={play} /> : null}</Timer>
                ))}
            </Footer>
            {shareDrawer && <ShareBackground onClick={() => handleShare(false, true)} />}
            <ShareDrawer show={shareDrawer}>
                <ShareHeader>Share</ShareHeader>
                <ShareGrid>
                    <ShareItem onClick={replayStory}><FiRotateCcw color="#EEEEEE" size={30} /></ShareItem>
                    <ShareItem onClick={shareLink}><FiLink color="#EEEEEE" size={30} /></ShareItem>
                    <ShareItem><SiTwitter color="#EEEEEE" size={30} /></ShareItem>
                    <ShareItem><SiLinkedin color="#EEEEEE" size={30} /></ShareItem>
                    <ShareItem><FiMoreHorizontal color="#EEEEEE" size={30} /></ShareItem>
                </ShareGrid>
                <ShareFooter show={shareFooter}>
                    <span>Link copied!</span>
                    <span></span>
                </ShareFooter>
            </ShareDrawer>
        </Container>
    )
}

const StoryAbstract = styled.article`
    width: 200px;
    height: 300px;
    background: #222222;
    border-radius: 5px;
    cursor:pointer;
`

const Story = (props) => {
    const [showDialog, setShowDialog] = useState(false)

    return (
        <>
            <StoryAbstract onClick={() => setShowDialog(!showDialog)} />

            {showDialog && <StoryContainer setShowDialog={setShowDialog} />}
        </>
    )
}

export default Story