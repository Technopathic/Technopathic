import styled from '@emotion/styled'
import MicroPost from '../components/MicroPost'
import { getMemes } from '../actions'

const Masonry = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: masonry;
    width: 100%;
    gap:2rem;
`

const Micro = (props) => {
    return (
        <main className="mt-32">
            <Masonry>
                {props.memes.map((i, meme) => (
                    <MicroPost />
                ))}
            </Masonry>
        </main>
    )
}

export async function getServerSideProps() {
    const memes = await getMemes()
    console.log(memes);
    return { props: { memes } }
}

export default Micro