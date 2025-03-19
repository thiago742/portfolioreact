import { useEffect, useRef, useState } from 'react'
import {
  StyledNavLink,
  Nav,
  SlidingBackground,
  MobileMenu,
  MobileNav,
  StyledMobileNavLink
} from './styles'

const links = [
  { path: '/', label: 'Início' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/habilidades', label: 'Habilidades' },
  { path: '/projetos', label: 'Projetos' },
  { path: '/conhecimentos', label: 'Formação' },
  { path: '/contato', label: 'Contato' }
]

const Navigation = () => {
  const [bgPosition, setBgPosition] = useState({ left: 0, width: 100 })
  const navRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false) // Estado do menu

  useEffect(() => {
    const activeLink = navRef.current?.querySelector('.active')
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink as HTMLElement
      setBgPosition({ left: offsetLeft, width: offsetWidth })
    }
  }, [])

  return (
    <>
      <Nav ref={navRef}>
        <SlidingBackground
          style={{ left: bgPosition.left, width: bgPosition.width }}
        />
        {links.map(({ path, label }) => (
          <StyledNavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={(e) => {
              const target = e.currentTarget as HTMLElement
              setBgPosition({
                left: target.offsetLeft,
                width: target.offsetWidth
              })
            }}
          >
            {label}
          </StyledNavLink>
        ))}
      </Nav>
      <MobileMenu onClick={() => setIsOpen(!isOpen)}>☰</MobileMenu>
      <MobileNav isOpen={isOpen}>
        {links.map(({ path, label }) => (
          <StyledMobileNavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={(e) => {
              const target = e.currentTarget as HTMLElement
              setBgPosition({
                left: target.offsetLeft,
                width: target.offsetWidth
              }),
                setIsOpen(!isOpen)
            }}
          >
            {label}
          </StyledMobileNavLink>
        ))}
      </MobileNav>
    </>
  )
}

export default Navigation
