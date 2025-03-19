import {
  Button,
  HomeSection,
  Subtitle,
  TechItem,
  TechList,
  Title,
  TypingText
} from './styles'
import { useState, useEffect } from 'react'

const Home = () => {
  const texts = [
    'Desenvolvedor Full Stack Java',
    'Desenvolvendo tecnologia que faz a diferença.',
    'Código limpo, eficiente e focado em resolver problemas de verdade.'
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <HomeSection id="home">
      <Title>Oi, eu sou o Thiago!</Title>
      <Subtitle>
        Desenvolvedor Full Stack | Java, Spring Boot, React, MongoDB
      </Subtitle>
      <TypingText>{texts[index]}</TypingText>
      <TechList>
        <TechItem>Java</TechItem>
        <TechItem>Spring Boot</TechItem>
        <TechItem>React</TechItem>
        <TechItem>MongoDB</TechItem>
        <TechItem>Docker</TechItem>
      </TechList>
      <Button href="sobre">Saiba mais</Button>
    </HomeSection>
  )
}

export default Home
