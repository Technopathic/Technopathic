import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { AiFillStar } from 'react-icons/ai'

const spinLeftAnim = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const spinRightAnim = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
`

const centerScale = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`

const circleSpreadAnim = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(5);
    }
`

const Main = styled.main`
    width:100vw;
    height:100vh;
    background:url(/intro-bg.jpg) no-repeat no-repeat center / cover;
    overflow:hidden;
    margin: 0px -16px;
`

const Section = styled.section`
    width:100%;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:repeating-linear-gradient(-65deg, rgba(238, 238, 238, 0.6), rgba(238, 238, 238, 0.6) 200px, rgba(254, 254, 254, 0.6) 200px, rgba(254, 254, 254, 0.6) 400px);
`

const CenterContainer = styled.div`
    width: 920px;
    height: 920px;
    border-radius:50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${centerScale} 1.5s linear infinite;
    animation-fill-mode: both;
`

const CircleOne = styled.div`
    height:900px;
    width:900px;
    border-radius: 50%;
    box-sizing: border-box;
    border:10px solid #e2026b;
    border-bottom-color: transparent;
    animation: ${spinLeftAnim} 8s linear .2s infinite;
    position:fixed;
    left: 10px;
    top: 10px;
`

const CircleTwo = styled.div`
    height:870px;
    width:870px;
    border-radius: 50%;
    box-sizing: border-box;
    border:10px solid #ff5294;
    border-bottom-color: transparent;
    animation: ${spinLeftAnim} 7s linear .2s infinite;
    position:fixed;
    left: 25px;
    top: 25px;
`

const CircleThree = styled.div`
    height:840px;
    width:840px;
    border-radius: 50%;
    box-sizing: border-box;
    border:10px solid #5cef72;
    border-bottom-color: transparent;
    animation: ${spinRightAnim} 9s linear .2s infinite;
    position:fixed;
    top: 40px;
    left: 40px;
`

const CircleFour = styled.div`
    height:810px;
    width:810px;
    border-radius: 50%;
    box-sizing: border-box;
    border:10px solid #45d4de;
    border-bottom-color: transparent;
    animation: ${spinRightAnim} 6s linear .2s infinite;
    position:fixed;
    top: 55px;
    left: 55px;
`

const CircleFive = styled.div`
    height:780px;
    width:780px;
    border-radius: 50%;
    box-sizing: border-box;
    border:10px solid #a37aff;
    border-bottom-color: transparent;
    animation: ${spinLeftAnim} 5s linear .2s infinite;
    position:fixed;
    top: 70px;
    left: 70px;
`

const LeftText = styled.div`
    font-family:Pathway Gothic One;
    color: #222222;
    text-transform:uppercase;
    font-size: 6em;
    transform: rotate(-15deg) skew(-18deg);
    width:550px;   
    line-height:100px;
`

const LargeText = styled.div`
    font-family:Pathway Gothic One;
    color: #222222;
    text-transform:uppercase;
    transform: rotate(-15deg) skew(-18deg);
    width:550px;
    font-size:10em;
    text-align:center;
    line-height:175px;
`

const RightText = styled.div`
    font-family:Pathway Gothic One;
    color: #222222;
    text-transform:uppercase;
    font-size: 6em;
    transform: rotate(-15deg) skew(-18deg);
    width:550px;
    text-align:right;
    line-height:100px;
`

const DividerLine = styled.div`
    height:8px;
    width:550px;
    background: #222222;
    transform: rotate(-15deg) skew(-18deg);
`

const CircleSpread = styled.div`
    height:900px;
    width:900px;
    border-radius: 50%;
    box-sizing: border-box;
    border:30px solid rgba(255, 255, 255, 0.2);
    animation: ${circleSpreadAnim} 1.5s linear 0.75s infinite;
    position:fixed;
`

const Outro = () => (
    <Main>
        <div className="flex flex-row w-full fixed top-0 left-0 right-0">
            <div className="w-1/5 h-1.5 bg-redBrand shadow-redShadow"></div>
            <div className="w-1/5 h-1.5 bg-pinkBrand shadow-pinkShadow"></div>
            <div className="w-1/5 h-1.5 bg-greenBrand shadow-greenShadow"></div>
            <div className="w-1/5 h-1.5 bg-blueBrand shadow-blueShadow"></div>
            <div className="w-1/5 h-1.5 bg-purpleBrand shadow-purpleShadow"></div>
        </div>
        <Section>
            <CenterContainer>
                <CircleOne />
                <CircleTwo />
                <CircleThree />
                <CircleFour />
                <CircleFive />
                <CircleSpread />
                <div className="flex fixed top-28">
                    <AiFillStar size={32} color="#222222" style={{ marginTop: '20px', marginRight: '5px', transform: "rotate(45deg)" }} />
                    <AiFillStar size={32} color="#222222" style={{ marginTop: '5px', marginRight: '5px', transform: "rotate(45deg)" }} />
                    <AiFillStar size={32} color="#222222" style={{ transform: "rotate(360deg)" }} />
                    <AiFillStar size={32} color="#222222" style={{ marginTop: '5px', marginLeft: '5px', transform: "rotate(-55deg)" }} />
                    <AiFillStar size={32} color="#222222" style={{ marginTop: '20px', marginLeft: '5px', transform: "rotate(-45deg)" }} />
                </div>
                <LeftText>Stream</LeftText>
                <DividerLine />
                <LargeText>Ending</LargeText>
                <DividerLine />
                <RightText>Thank you!</RightText>
                <div className="flex fixed bottom-28">
                    <AiFillStar size={32} color="#222222" style={{ marginRight: '5px', transform: "rotate(55deg)" }} />
                    <AiFillStar size={32} color="#222222" style={{ marginTop: '15px', marginRight: '5px', transform: "rotate(48deg)" }} />
                    <AiFillStar size={32} color="#222222" style={{ marginTop: '20px', transform: "rotate(36deg)" }} />
                    <AiFillStar size={32} color="#222222" style={{ marginTop: '15px', marginLeft: '5px', transform: "rotate(-48deg)" }} />
                    <AiFillStar size={32} color="#222222" style={{ marginLeft: '5px', transform: "rotate(-55deg)" }} />
                </div>

            </CenterContainer>
        </Section>
        <div className="flex flex-row w-full fixed bottom-0 left-0 right-0">
            <div className="w-1/5 h-1.5 bg-redBrand shadow-redShadow"></div>
            <div className="w-1/5 h-1.5 bg-pinkBrand shadow-pinkShadow"></div>
            <div className="w-1/5 h-1.5 bg-greenBrand shadow-greenShadow"></div>
            <div className="w-1/5 h-1.5 bg-blueBrand shadow-blueShadow"></div>
            <div className="w-1/5 h-1.5 bg-purpleBrand shadow-purpleShadow"></div>
        </div>
    </Main>
)

export default Outro