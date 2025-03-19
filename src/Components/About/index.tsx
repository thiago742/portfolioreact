import { AboutSection, Title, Text, Highlight } from './styles'

const About = () => {
  return (
    <AboutSection id="about">
      <Title>Quem sou eu?</Title>
      <Text>
        Sou <Highlight>Thiago Martins</Highlight>, Desenvolvedor Full Stack Java
        com experiência em construção de sistemas escaláveis e eficientes. Minha
        stack inclui{' '}
        <Highlight>Java, Spring Boot, React, MongoDB e Docker</Highlight>.
        Sempre busco aprimorar minhas habilidades para entregar soluções bem
        estruturadas.
      </Text>
      <Text>
        Tenho experiência com{' '}
        <Highlight>
          arquitetura de microsserviços, mensageria assíncrona{' '}
        </Highlight>
        e desenvolvimento frontend e backend. Meu foco é criar aplicações de
        alta qualidade que resolvem problemas reais.
      </Text>
    </AboutSection>
  )
}

export default About
