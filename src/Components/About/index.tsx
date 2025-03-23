import Footer from '../Footer'
import { AboutSection, Title, Text, Highlight, ImageContainer } from './styles'

const About = () => {
  return (
    <AboutSection id="about">
      <div>
        <Title>Quem sou eu?</Title>
        <Text>
          Sou <Highlight>Thiago Martins</Highlight>, um Desenvolvedor Full Stack
          Java, brasileiro com 19 anos, técnico em{' '}
          <Highlight>Administração</Highlight> formado pela ETEC, e cursando o
          terceiro semestre de
          <Highlight> Análise e Desenvolvimento de Sistemas</Highlight> na FIAP.
        </Text>
        <Text>
          No geral, tenho experiência com{' '}
          <Highlight>React e Spring Boot</Highlight>, conhecendo todo o processo
          desde o planejamento de arquitetura até a produção com o cliente
          final. Meu foco é criar aplicações de alta qualidade que resolvem
          problemas reais.
        </Text>
      </div>
      <ImageContainer />
      <Footer />
    </AboutSection>
  )
}

export default About
