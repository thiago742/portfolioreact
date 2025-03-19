import styled from 'styled-components'

export const ProjectsSection = styled.section`
  padding: 80px 20px;
  background: #121212;
  color: white;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #facc15;
`

export const ProjectCard = styled.div`
  background: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 800px;
  text-align: left;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
`

export const ProjectTitle = styled.h3`
  font-size: 24px;
  color: #facc15;
`

export const ProjectDescription = styled.p`
  font-size: 16px;
  color: #ddd;
  margin: 10px 0;
`

export const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const TechItem = styled.li`
  background: #333;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
`

export const RepoLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #facc15;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
  }
`
