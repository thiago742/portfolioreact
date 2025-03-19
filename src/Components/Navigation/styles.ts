import { NavLink } from 'react-router-dom'
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

  @media (max-width: 768px) {
    display: none;
  }
`

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #facc15;
  }

  &.active {
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const StyledMobileNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #facc15;
  }

  &.active {
    color: white;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const SlidingBackground = styled.div`
  position: absolute;
  bottom: 1; // Corrigido de 'bottom: 1' para 'bottom: 0'
  left: 0;
  height: 40px;
  width: 100px;
  background: #facc15;
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: -1;

  @media (max-width: 768px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed; // Adicionado para melhor posicionamento
    top: 20px;
    right: 20px;
    color: white;
    font-size: 24px;
    cursor: pointer;
    z-index: 1001; // Garante que fique acima de outros elementos
  }
`

export const MobileNav = styled.nav<{ isOpen: boolean }>`
  display: none;
  gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    position: fixed; // Alterado de absolute para fixed
    top: 70px; // Ajuste conforme necessidade
    right: 10px;
    background: rgba(26, 26, 26, 0.95);
    flex-direction: column;
    width: 200px;
    padding: 15px;
    border-radius: 8px;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0)' : 'translateY(-20px)'};
    transition: all 0.3s ease;
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
    z-index: 1000; // Garante que fique acima do conteúdo
  }
`
