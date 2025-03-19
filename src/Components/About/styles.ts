import styled from 'styled-components'

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #1e1e1e, #121212);
  color: white;
  height: 100vh;
`

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #facc15;
`

export const Text = styled.p`
  max-width: 800px;
  font-size: 18px;
  line-height: 1.6;
  color: #ddd;
`

export const Highlight = styled.span`
  color: #facc15;
  font-weight: bold;
`
