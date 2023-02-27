import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Acordeon from './components/Acordeon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello vite ;0</h1>
      <Acordeon />
    </div>
  )
}

export default App
