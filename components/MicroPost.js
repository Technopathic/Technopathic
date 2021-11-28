import styled from '@emotion/styled'

const Article = styled.article`
    min-height: 220px;
    max-height: 530px;
    display: flex;
    flex-direction: column;
    border-radius:8px;
    border:1px solid #222222;
    overflow:hidden;

    div {
        width: 100%;
        height: 150px;
        background: #333333;
    }

    span {
        color: #888888;
        font-size: 12px;
    }

    a {
        color: #2222222;
        font-size: 14px;
    }

    p {
        color: #666666;
        font-size: 14px;
    }
`

const MicroPost = () => (
    <Article>
        <div></div>
        <section className="flex flex-col p-4">
            <span>Ren S.</span>
            <a>Edge functions landing pages at vercel</a>
            <p>Built a fully-editable & deployable dev sandbox with error handling & log support.</p>
        </section>
    </Article>
)

export default MicroPost