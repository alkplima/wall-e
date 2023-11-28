import { ThemeProvider } from './contexts/ThemeContext'
import { Home } from './pages/home'
import { GlobalStyle } from './styles/global'


function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
