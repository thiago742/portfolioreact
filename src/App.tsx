import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import { Rotas } from './routes'
import Navigation from './Components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App
