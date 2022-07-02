import { Container } from 'react-bootstrap'
import { AppRouter } from './components/AppRouter'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mb-4">
        <AppRouter />
      </Container>
    </div>
  )
}

export default App
