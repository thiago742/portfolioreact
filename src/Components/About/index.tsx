import Footer from '../Footer'
import { AboutSection, Title, Text, Highlight, ImageContainer } from './styles'

const About = () => {
  return (
    <AboutSection id="about">
      <div>
        <Title>Quem sou eu?</Title>
        <Text>
          Sou <Highlight>Thiago Martins</Highlight>, um Desenvolvedor Full Stack
          Java, brasileiro com 19 anos, técnico em administração formado pela
          ETEC, e cursando o terceiro semestre de
          <Highlight> Análise e Desenvolvimento de Sistemas</Highlight> na FIAP.
          e Sempre busco aprimorar minhas habilidades para entregar soluções bem
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
      <Footer />
    </AboutSection>
  )
}

export default About
