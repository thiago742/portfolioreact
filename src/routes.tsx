import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/habilidades" element={<Skills />} />
    <Route path="/projetos" element={<Projects />} />
    <Route path="/conhecimentos" element={<Education />} />
    <Route path="/contato" element={<Contact />} />
  </Routes>
)
