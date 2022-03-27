import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const CELL_WIDTH = 60;
const CELL_HEIGHT = 60;
const GRID_WIDTH = 32;
const GRID_HEIGHT = 18;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

const Pixel = styled.div`
    height: ${CELL_HEIGHT}px;
    width: ${CELL_WIDTH}px;
    background: ${props => props.background};
    border:1px solid black;
`


const Poxel = () => {
    const [grid, setGrid] = useState([])

    useEffect(() => {
        createGrid()
    })

    const createGrid = () => {
        const gridElements = [];

        for(let x = 0; x < GRID_WIDTH; x++) {
            const column = [];
            for(let y = 0; y < GRID_HEIGHT; y++) {
                column.push({
                    background: '#222222'
                })
            }

            gridElements.push({
                [x]: column
            })
        }

        setGrid(gridElements)
    }
    
    return (
        <Container>       
        {grid.map((column, x) => (
            <div key={x}>
                {column[x].map((element, y) => (
                    <Pixel background={element.background} key={y}/>
                ))}
            </div>
        ))}
        </Container>
    )
}

export default Poxel