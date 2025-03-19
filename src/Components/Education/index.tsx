import {
  EducationSection,
  CourseTitle,
  Description,
  EducationCard,
  Institution,
  Period,
  Title
} from './styles'

const Education = () => {
  return (
    <EducationSection id="education">
      <Title>Experiência Acadêmica</Title>

      <EducationCard>
        <CourseTitle>Análise e Desenvolvimento de Sistemas</CourseTitle>
        <Institution>FIAP</Institution>
        <Period>2024 - 2025</Period>
        <Description>
          Curso voltado para desenvolvimento de software, incluindo Java, Spring
          Boot, microsserviços e banco de dados.
        </Description>
      </EducationCard>

      <EducationCard>
        <CourseTitle>Desenvolvimento Full Stack em Java</CourseTitle>
        <Institution>EBAC</Institution>
        <Period>Concluído em 2024</Period>
        <Description>
          Formação completa em desenvolvimento web e backend, cobrindo Java,
          React, bancos de dados e deploy.
        </Description>
      </EducationCard>
    </EducationSection>
  )
}

export default Education
