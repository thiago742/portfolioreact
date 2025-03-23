import styled from 'styled-components'
import Foto from '../../assets/thiago.jpeg' // Caminho correto

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #1e1e1e, #121212);
  color: white;
  height: 100vh;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #ffce2e;
`

export const Text = styled.p`
  max-width: 600px;
  font-size: 18px;
  line-height: 1.6;
  color: #ddd;
`

export const Highlight = styled.span`
  color: #ffce2e;
  font-weight: bold;
`

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url(${Foto});
  background-size: cover;
  background-position: center;
  margin-left: 100px;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
    margin-top: 24px;
  }
`
