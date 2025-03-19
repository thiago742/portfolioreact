import { Nav, NavLink } from './styles'

const Navigation = () => {
  return (
    <Nav>
      <NavLink href="/">Início</NavLink>
      <NavLink href="sobre">Sobre</NavLink>
      <NavLink href="habilidades">Habilidades</NavLink>
      <NavLink href="projetos">Projetos</NavLink>
      <NavLink href="conhecimentos">Formação</NavLink>
      <NavLink href="contato">Contato</NavLink>
    </Nav>
  )
}

export default Navigation
