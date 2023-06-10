import ProfileCard from "../components/ProfileCard"
import './App.css'
import { Container } from 'react-bootstrap';

function App() {

  return (
    <Container>
      <h1 className="header">Profile Cards</h1>
      <ProfileCard />
    </Container>
  )
}

export default App
