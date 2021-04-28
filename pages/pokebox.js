import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiSearch, FiFilter, FiBox } from 'react-icons/fi'

import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    margin: 100px auto;
    width: 100%;
`

const Header = styled.header`
    margin-bottom: 16px;
`

const BoxOptions = styled.section`
    display: flex;
    height: 40px;
    align-items: center;
    color: #222222;
    justify-content: flex-end;
    width: 100%;
`

const BoxOption = styled.div`
    background: #FFFFFF;
    cursor: pointer;
    transition: all 200ms ease-out;
    height: 40px;
    width: ${props => props.show ? '100%' : '60px'};
    display: flex;
    justify-content: ${props => props.show ? 'flex-start' : 'center'};
    align-items: center;
    box-sizing: border-box;

    span {
        width: 60px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:first-of-type {
        border-radius: 50px 0px 0px 50px;
    }

    &:last-of-type {
        border-radius: 0px 50px 50px 0px;
    }

    &:hover {
        opacity: 0.7;
    }
`

const SearchInput = styled.input`
    width: ${props => props.show ? '100%' : '0px'};
    border:none;
    outline:none;
    height: 40px;
`

const BoxName = styled.section`
    background: #FFFFFF;
    display: flex;
    justify-content: ${props => props.justifyContent > 1 ? 'space-between' : 'center'};
    align-items: center;
    height: 60px;
    margin-bottom: 42px;
    width: 100%;
    border-radius:50px;
`

const BoxNameOption = styled.div`
    padding: 0px 8px;
    cursor: pointer;
    transition: all 250ms ease-out;

    &:hover {
        opacity: 0.7;
    }
`

const BoxNameContent = styled.div`
    font-size: 2rem;
    color: #222222;
    font-weight:bold;
`

const BoxGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 32px;
`

const BoxItem = styled.article`
    height: 138px;
    width: 100%;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
`

const BoxDrawer = styled.section`
    width: 425px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(30px);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
`

const Pokebox = () => {
    const [boxes, setBoxes] = useState([{ id: 1, name: 'Box 1', pokemon: [] }])
    const [activeBox, setActiveBox] = useState(0)
    const [showSearch, setShowSearch] = useState(false)
    const [searchContent, setSearchContent] = useState("")
    const [showFilters, setShowFilters] = useState(false)
    const [filterOptions, setFilterOptions] = useState({})

    const shiftBox = (option) => {
        if (option > activeBox) {
            if (option <= boxes.length) {
                setActiveBox(option)
            } else {
                setActiveBox(0)
            }
        } else {
            if (option >= 0) {
                setActiveBox(option)
            } else {
                setActiveBox(boxes.length - 1)
            }
        }
    }

    return (
        <Container>
            <Header>
                <BoxOptions>
                    <BoxOption show={showSearch}>
                        <span onClick={() => setShowSearch(!showSearch)}><FiSearch size={28} /></span>
                        <SearchInput type="text" show={showSearch} value={searchContent} onChange={(e) => setSearchContent(e.target.value)} placeholder="Search for Twitch names or Pokemon..." />
                    </BoxOption>
                    <BoxOption show={showFilters}>
                        <span onClick={() => setShowFilters(!showFilters)}><FiFilter size={28} /></span>
                    </BoxOption>
                    <BoxOption>
                        <span><FiBox size={28} /></span>
                    </BoxOption>
                </BoxOptions>
            </Header>
            <BoxName justifyContent={boxes.length}>
                {boxes.length > 1 && <BoxNameOption onClick={() => shiftBox(activeBox - 1)}><FiChevronLeft color="#222222" size={42} /></BoxNameOption>}
                <BoxNameContent>{boxes[activeBox].name}</BoxNameContent>
                {boxes.length > 1 && <BoxNameOption onClick={() => shiftBox(activeBox + 1)}><FiChevronRight color="#222222" size={42} /></BoxNameOption>}
            </BoxName>
            <BoxGrid>
                {[...Array(30)].map((x, i) => <BoxItem key={i} />)}
            </BoxGrid>
            <BoxDrawer />
        </Container>
    )
}

export default Pokebox