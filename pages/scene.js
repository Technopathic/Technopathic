import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const SCENE_TEXT = 'Scene'

const COLORS = {
    RED: '#c01919',
    BROWN: '#433324',
    WHITE: '#f9f4f8',
    YELLOW: '#f39019',
    LILAC: '#605e8c',
    BLUE: '#2472de',
    PEACH: '#fa7a71',
    GREEN: '#9cc142',
    PURPLE: '#821579'
}

const TEXT_COLORS = {
    BLACK: '#222222',
    WHITE: '#FFFFFF'
}

const LINE_SECTION_HEIGHT = 15
const LETTER_BOX_HEIGHT = 135

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
`

const Letterbox = styled.div`
    width: 100%;
    height: ${props => props.letterboxHeight}px;
    background: #000000;
    position: absolute;
    z-index: 9;
    ${props => props.top ? 'top: 0' : null};
    ${props => props.bottom ? 'bottom: 0' : null};
`

const Noise = styled.div`
    background: url('/noise.png');
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 14;
`

const Main = styled.main`
    width: 100%;
    flex-grow: 1;
    background: ${props => COLORS[props.color]};
    position: relative;
    z-index: 8;
`

const Scanlines = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

const Line = styled.div`
    width: 100%;
    height: ${LINE_SECTION_HEIGHT}px;

    .line {
        height: 2px;
        width: 100%;
        background: rgba(255, 255, 255, 0.0275);
    }
`

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 11;
`

const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    position: relative;
    z-index: 16;

    h1 {
        font-size: 8rem;
        text-transform: uppercase;
        color: ${props => TEXT_COLORS[props.textColor]};
        font-family: Market-Deco;
        text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.4);
        text-align: center;
        line-height: 8.5rem;
    }

    p {
        font-size: 1.8rem;
        margin: 0;
        color: ${props => TEXT_COLORS[props.textColor]};
        font-family: Butler;

        @media(max-width: 1080px) {
            font-size: 2.5rem;
        }
    }

    .italics {
        font-style: italic;
        margin-top: 32px;

        @media(max-width: 1080px) {
            font-size: 2.5rem;
        }
    }
`

const BottomText = styled.article`
    position: absolute;
    bottom: 150px;
    z-index: 16;

    h2 {
        font-family: Market-Deco;
        font-size: 2rem;
        color: ${props => TEXT_COLORS[props.textColor]};
        font-family: Butler;

        @media(max-width: 1080px) {
            font-size: 2.8rem;
        }
    }
`

const Shadow = styled.div`
    height: calc(100vh - ${LETTER_BOX_HEIGHT * 2}px);
    width: 100%;
    box-shadow: inset 0 0 200px 50px rgba(0, 0, 0, 0.4);
    position: absolute;
    top: ${LETTER_BOX_HEIGHT}px;
    z-index: 14;
`

const Scene = () => {
    const router = useRouter()

    const title = router.query.title || ''
    const number =  router.query.number || '001'
    const bottom =  router.query.bottom || ''
    const color = router.query.color || 'RED'
    const textColor = router.query.textColor || 'WHITE'
    const width = router.query.width || 1920
    const height = router.query.height || 1080
    const letterboxHeight = router.query.letterboxHeight || 135
    const noise = router.query.noise || true
    const shadow = router.query.shaodw || true

    const generateLines = () => {
        let lineCount = height / LINE_SECTION_HEIGHT;
        let lines = [];

        for(let i = 0; i < lineCount; i++) {
            lines.push(
                <Line><div className="line" /></Line>
            )
        }

        return lines;
    }

    return (
        <Container>
            <Letterbox top={true} letterboxHeight={letterboxHeight} />
            
            <Main color={color}>
                {noise && <Noise />}
                {shadow && <Shadow />}
                <Scanlines>
                    {generateLines()}
                </Scanlines>
                <Content>
                    <Article textColor={textColor}>
                        <h1>{title}</h1>
                        <p className="italics">{SCENE_TEXT}</p>
                        <p>({number})</p>
                    </Article>
                    <BottomText textColor={textColor}>
                        <h2>{bottom}</h2>
                    </BottomText>
                </Content>
            </Main>
            <Letterbox bottom={true} letterboxHeight={letterboxHeight} />
        </Container>
    )
}

export default Scene