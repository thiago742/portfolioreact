import Footer from '../Footer'
import {
  ProjectsSection,
  ProjectCard,
  ProjectDescription,
  ProjectTitle,
  TechItem,
  TechList,
  Title,
  RepoLink
} from './styles'

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Title>Meus Projetos</Title>

      <ProjectCard>
        <ProjectTitle>Memelandia (Em desenvolvimento)</ProjectTitle>
        <ProjectDescription>
          Desmembramento de um monólito em microsserviços, implementando
          comunicação assíncrona e API Gateway. (Futuro app Full Stack de
          stickers para Whatsapp)
        </ProjectDescription>
        <TechList>
          <TechItem>Java</TechItem>
          <TechItem>Spring Boot</TechItem>
          <TechItem>JPA</TechItem>
          <TechItem>RabbitMQ</TechItem>
          <TechItem>Kafka</TechItem>
          <TechItem>Docker</TechItem>
          <TechItem>API Gateway</TechItem>
          <TechItem>MongoDB</TechItem>
          <TechItem>PostgreSQL</TechItem>
        </TechList>
        <RepoLink
          href="https://github.com/thiago742/memelandia"
          target="_blank"
        >
          🔗 Ver Repositório
        </RepoLink>
      </ProjectCard>

      <ProjectCard>
        <ProjectTitle>eFood Restaurantes</ProjectTitle>
        <ProjectDescription>
          Plataforma de e-commerce desenvolvida com React e com conteúdo
          consumido por API.
        </ProjectDescription>
        <TechList>
          <TechItem>React</TechItem>
          <TechItem>TypeScript</TechItem>
          <TechItem>Styled Components</TechItem>
          <TechItem>Node.js</TechItem>
          <TechItem>Redux</TechItem>
          <TechItem>Redux ToolKit Query</TechItem>
        </TechList>
        <RepoLink href="https://github.com/thiago742/efood-app" target="_blank">
          🔗Ver Repositório /{' '}
        </RepoLink>
        <RepoLink href="https://efood-app.vercel.app" target="_blank">
          🔗Acessar o site
        </RepoLink>
      </ProjectCard>

      <ProjectCard>
        <ProjectTitle>Ex Services</ProjectTitle>
        <ProjectDescription>
          Aplicativo mobile para troca de serviços comunitários, com integração
          de API para busca de serviços.
        </ProjectDescription>
        <TechList>
          <TechItem>Kotlin</TechItem>
          <TechItem>Jetpack Compose</TechItem>
          <TechItem>Retrofit</TechItem>
          <TechItem>Room</TechItem>
          <TechItem>Firebase Authentication</TechItem>
        </TechList>
        <RepoLink href="#" target="_blank">
          🔗 Ver Repositório
        </RepoLink>
      </ProjectCard>
      <Footer />
    </ProjectsSection>
  )
}

export default Projects
