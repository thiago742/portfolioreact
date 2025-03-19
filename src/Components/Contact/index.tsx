import {
  ContactSection,
  ContactItem,
  ContactList,
  ContactText,
  Title
} from './styles'

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Entre em Contato</Title>
      <ContactText>
        Se quiser conversar sobre um projeto ou oportunidade, me mande uma
        mensagem!
      </ContactText>

      <ContactList>
        <ContactItem href="mailto:thifelps742@gmail.com">📧 E-mail</ContactItem>
        <ContactItem href="https://github.com/thiago742" target="_blank">
          💻 GitHub
        </ContactItem>
        <ContactItem
          href="https://www.linkedin.com/in/thiagomartins3008"
          target="_blank"
        >
          🔗 LinkedIn
        </ContactItem>
        <ContactItem href="https://wa.me/5511995733677" target="_blank">
          📱 WhatsApp
        </ContactItem>
      </ContactList>
    </ContactSection>
  )
}

export default Contact
