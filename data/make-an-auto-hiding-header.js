export const data = [
  `const Header = () => {
  return (
    <HeaderWrapper>
      <Section>
        <SiteName href="#">Awesome Site</SiteName>
        <Navigation>
          <NavLink href="#">Twitter</NavLink>
          <NavLink href="#">Twitch</NavLink>
          <NavLink href="#">Instagram</NavLink>
        </Navigation>
      </Section>
    </HeaderWrapper>
  )
}

export default Header
`,
  `import styled from "@emotion/styled" 

const HeaderWrapper = styled.header\`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
\`
`,
  `const Section = styled.section\`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
\`

const SiteName = styled.a\`
  text-decoration: none;
  font-size: 1.5rem;
  color: #000000;
\`

const Navigation = styled.nav\`
  display: flex;
  align-items: center;
\`

const NavLink = styled.a\`
  padding: 0.25rem;
  margin: 0 0.5rem;
  text-decoration: none;
  color: #000000;

  &: hover {
    city: 0.7;
  }
\`
`,
  `import { useState, useEffect } from "react"`,
  `const Header = () => {
  const [show, setShow] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)

  ...
}`,
  `const handleScroll = () => {
  if(document.body.getBoundingClientRect().top === 0) {
    setShow(true)
    setScrollPos(0)
  } else {
    setScrollPos(document.body.getBoundingClientRect().top)
    setShow(document.body.getBoundingClientRect().top > scrollPos)
  }
}`,
  `useEffect(() => {
  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
})`,
  `<HeaderWrapper show={show}>
  ...
</HeaderWrapper>`,
  `const HeaderWrapper = styled.header\`
  ...
  transform: $\{props => props.show ? "translate3d(0px, 0px, 0px)" : "translate3d(0px -60px, 0px)"};
  transition: all 0.3s ease;
\`
`,
  `const HeaderWrapper = styled.header\`
  ...
  backdrop - filter: blur(5px);
\`
`,
  `
import { useState, useEffect } from "react"
import styled from "@emotion/styled"

const HeaderWrapper = styled.header\`
  background: rgba(0, 0, 0, 0.5);
  width: 100 %;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transform: $\{props => props.show ? "translate3d(0px, 0px, 0px)" : "translate3d(0px, -60px, 0px)"};
  transition: all 0.3s ease;
  backdrop - filter: blur(5px);
\`

const Section = styled.section\`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
\`

const SiteName = styled.a\`
  text-decoration: none;
  font-size: 1.5rem;
  color: #FFFFFF;
\`

const Navigation = styled.nav\`
  display: flex;
  align-items: center;
\`

const NavLink = styled.a\`
  padding: 0.25rem;
  margin: 0 0.5rem;
  text-decoration: none;
  color: #FFFFFF;

  &: hover {
    opacity: 0.7;
  }
\`

const Header = () => {
  const [show, setShow] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScroll = () => {
    if (document.body.getBoundingClientRect().top === 0) {
      setShow(true)
      setScrollPos(0)
    } else {
      setScrollPos(document.body.getBoundingClientRect().top)
      setShow(document.body.getBoundingClientRect().top > scrollPos)
    }
  }
  return (
    <HeaderWrapper show={show}>
      <Section>
        <SiteName href="#">Awesome Site</SiteName>
        <Navigation>
          <NavLink href="#">Twitter</NavLink>
          <NavLink href="#">Twitch</NavLink>
          <NavLink href="#">Instagram</NavLink>
        </Navigation>
      </Section>
    </HeaderWrapper>
  )
}

export default Header
`
]