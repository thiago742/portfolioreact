import styled, { keyframes } from 'styled-components'

export const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`

export const blink = keyframes`
  50% { border-color: transparent; }
`

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #1e1e1e, #121212);
  color: white;
  position: relative;
  padding: 20px;
  height: 100vh;
  overflow-y: hidden;
`

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`

export const Subtitle = styled.p`
  font-size: 20px;
  color: #facc15;
  margin-bottom: 20px;
`

export const TypingText = styled.p`
  font-size: 22px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid white;
  width: fit-content;
  animation: ${typing} 3s steps(30, end), ${blink} 0.75s step-end infinite;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`

export const TechList = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const TechItem = styled.span`
  background: #333;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
`

export const Button = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  background: #facc15;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: #ffd700;
  }
`
