import Footer from '../Footer'
import {
  SkillsSection,
  Title,
  SkillCategory,
  CategoryTitle,
  SkillItem,
  SkillList
} from './styles'

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Title>O que eu sei fazer?</Title>
      <SkillCategory>
        <CategoryTitle>Backend</CategoryTitle>
        <SkillList>
          <SkillItem>Java</SkillItem>
          <SkillItem>Spring Boot</SkillItem>
          <SkillItem>Hibernate/JPA</SkillItem>
          <SkillItem>Jakarta EE</SkillItem>
          <SkillItem>POO</SkillItem>
          <SkillItem>Lambda</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Frontend Avançado</CategoryTitle>
        <SkillList>
          <SkillItem>React</SkillItem>
          <SkillItem>TypeScript</SkillItem>
          <SkillItem>Styled Components</SkillItem>
          <SkillItem>Redux</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Banco de Dados</CategoryTitle>
        <SkillList>
          <SkillItem>MongoDB</SkillItem>
          <SkillItem>PostgreSQL</SkillItem>
          <SkillItem>MySQL</SkillItem>
          <SkillItem>Oracle</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Arquitetura e Boas práticas</CategoryTitle>
        <SkillList>
          <SkillItem>JUnit</SkillItem>
          <SkillItem>Singleton, Factory, Repository, DTO, Service</SkillItem>
          <SkillItem>API Gateway, Service Discovery</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>DevOps</CategoryTitle>
        <SkillList>
          <SkillItem>Docker</SkillItem>
        </SkillList>
      </SkillCategory>
      <Footer />
    </SkillsSection>
  )
}

export default Skills
