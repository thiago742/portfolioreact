import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: #1a1a1a;
  position: sticky;
  top: 0;
  z-index: 1000;
`

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: #facc15;
  }
  text-align: center;
`
