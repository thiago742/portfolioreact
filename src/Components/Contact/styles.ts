import styled from 'styled-components'

export const ContactSection = styled.section`
  padding: 80px 20px;
  background: #121212;
  color: white;
  text-align: center;
  height: 100vh;
`

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #ffce2e;
`

export const ContactText = styled.p`
  font-size: 18px;
  color: #ddd;
  margin-bottom: 20px;
`

export const ContactList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

export const ContactItem = styled.a`
  background: #1e1e1e;
  padding: 15px 20px;
  border-radius: 8px;
  color: #ffce2e;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #ffce2e;
    color: #121212;
  }
`
