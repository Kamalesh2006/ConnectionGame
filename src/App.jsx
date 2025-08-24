import './App.css'
import { Flex } from "@chakra-ui/react"
import { Login } from './components/login'
import TeamJoin from './components/TeamJoin'
import HomePage from './components/HomePage'
import { useState } from 'react'
import { generateRandomUsername } from './utils/randomName'

function App() {
  const [username, setUsername] = useState(null);

  const handleGuest = () => setUsername(generateRandomUsername());
  const handleEmail = () => setUsername('User'); // placeholder until auth

  if (username) {
    return <HomePage username={username} onLogout={() => setUsername(null)} />;
  }

  return (
    <>
      <h1>Connection Game</h1>
      <div className="card">
        <Flex justify="center" gap="4">
          <Login onGuest={handleGuest} onEmail={handleEmail} />
          <TeamJoin />
        </Flex>
      </div>
    </>
  );
}

export default App
