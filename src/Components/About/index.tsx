import { AboutSection, Title, Text, Highlight, ImageContainer } from './styles'

const About = () => {
  return (
    <AboutSection id="about">
      <div>
        <Title>Quem sou eu?</Title>
        <Text>
          Sou <Highlight>Thiago Martins</Highlight>, um Desenvolvedor Full Stack
          Java, brasileiro com 19 anos, com experiência em construção de
          sistemas escaláveis e eficientes. Minha stack inclui{' '}
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
      </div>
      <ImageContainer />
    </AboutSection>
  )
}

export default About
