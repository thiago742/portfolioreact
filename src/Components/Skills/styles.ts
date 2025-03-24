import styled from 'styled-components'

export const SkillsSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #1e1e1e, #121212);
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
  color: #ffce2e;
`

export const SkillCategory = styled.div`
  margin: 20px 0;
`

export const CategoryTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #ffce2e;
`

export const SkillList = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`

export const SkillItem = styled.span`
  background: #333;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
`
