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
        <Institution>
          FIAP - Faculdade de Informática e Administração Paulista
        </Institution>
        <Period>2024 - 2025</Period>
        <Description>
          A FIAP oferece o curso de Tecnologia em Análise e Desenvolvimento de
          Sistemas, com duração de 2 anos, no momento estou no segundo ano da
          faculdade. O curso adota uma abordagem prática, permitindo que os
          alunos desenvolvam habilidades em modelagem de sistemas, bancos de
          dados e desenvolvimento web. Além disso, os estudantes têm a
          oportunidade de integrar tecnologias emergentes, como Big Data,
          Internet das Coisas e Inteligência Artificial, preparando-os para os
          desafios do mercado de trabalho.
        </Description>
        <Institution>Certificações Obtidas no Curso: </Institution>
        <Description>
          Qualificação Profissional em Análise de Sistemas e Prototipagem Web
        </Description>
        <Description>
          Qualificação Profissional em Análise e Design Web 2.0
        </Description>
      </EducationCard>

      <EducationCard>
        <CourseTitle>Desenvolvimento Full Stack Java</CourseTitle>
        <Institution>
          EBAC - Escola Britânica de Artes Criativas e Tecnologia
        </Institution>
        <Period>Concluído em 2025</Period>
        <Description>
          A EBAC (Escola Britânica de Artes Criativas e Tecnologia) oferece o
          curso online Profissão: Desenvolvedor Full Stack Java, com duração de
          15 meses e carga horária de 89 horas. O curso abrange desde o
          desenvolvimento de interfaces (Front-end) até estruturas internas e
          bancos de dados (Back-end), utilizando a linguagem Java para criar
          soluções complexas.
        </Description>
        <Institution>Certificações Obtidas no Curso: </Institution>
        <Description>
          Qualificação Profissional em Análise de Sistemas e Prototipagem Web
        </Description>
      </EducationCard>
    </EducationSection>
  )
}

export default Education
