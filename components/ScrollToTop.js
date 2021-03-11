import { useState, useEffect } from "react"
import { FiArrowUp } from "react-icons/fi"
import * as Scroll from "react-scroll"
import styled from "@emotion/styled"

const Arrow = styled.div`
    position: fixed;
    bottom: 2.5rem;
    right: 10rem;
    border: 8px solid #DDDDDD;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
    transition: all 0.3s ease 0s;
    transform: ${(props) => !props.show ? "translate3d(0px, 150px, 0px)" : "translate3d(0px, 0px, 0px)"};

    @media(max-width: 1440px) {
        right: 5rem;
    }

    @media(max-width: 1280px) {
        right: 2rem;
        bottom: 2rem;
    }

    @media(max-width: 1024px) {
        display:none;
    }
`

const ScrollToTop = (props) => {
    const [show, setShow] = useState(false)
    const [scrollPos, setScrollPos] = useState(0)
    const scroll = Scroll.animateScroll

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    const handleScroll = () => {
        if (document.body.getBoundingClientRect().top === 0) {
            setShow(false)
            setScrollPos(0)
        } else {
            setScrollPos(document.body.getBoundingClientRect().top)
            setShow(true)
        }
    }



    return (
        <Arrow show={show} onClick={scroll.scrollToTop}>
            <FiArrowUp size={64} color="#DDDDDD" />
        </Arrow>
    )
}

export default ScrollToTop