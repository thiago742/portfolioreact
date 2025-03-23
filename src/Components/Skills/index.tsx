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
          <SkillItem>JPA</SkillItem>
          <SkillItem>RabbitMQ</SkillItem>
          <SkillItem>Kafka</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Frontend</CategoryTitle>
        <SkillList>
          <SkillItem>React</SkillItem>
          <SkillItem>TypeScript</SkillItem>
          <SkillItem>Styled Components</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Banco de Dados</CategoryTitle>
        <SkillList>
          <SkillItem>MongoDB</SkillItem>
          <SkillItem>PostgreSQL</SkillItem>
          <SkillItem>MySQL</SkillItem>
        </SkillList>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>DevOps</CategoryTitle>
        <SkillList>
          <SkillItem>Docker</SkillItem>
          <SkillItem>Kubernetes</SkillItem>
          <SkillItem>CI/CD</SkillItem>
        </SkillList>
      </SkillCategory>
      <Footer />
    </SkillsSection>
  )
}

export default Skills
