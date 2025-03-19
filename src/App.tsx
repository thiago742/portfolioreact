import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import { Rotas } from './routes'
import Navigation from './Components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Navigation />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
