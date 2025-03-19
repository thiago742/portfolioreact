import styled from 'styled-components'

export const EducationSection = styled.section`
  padding: 80px 20px;
  background: #121212;
  color: white;
  text-align: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #facc15;
`

export const EducationCard = styled.div`
  background: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 800px;
  text-align: left;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
`

export const CourseTitle = styled.h3`
  font-size: 24px;
  color: #facc15;
`

export const Institution = styled.p`
  font-size: 18px;
  color: #ddd;
  font-weight: bold;
`

export const Period = styled.p`
  font-size: 16px;
  color: #aaa;
  margin: 5px 0;
`

export const Description = styled.p`
  font-size: 16px;
  color: #ddd;
  margin: 10px 0;
`
