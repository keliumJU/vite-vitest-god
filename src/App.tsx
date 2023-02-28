import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Acordeon from './components/Acordeon'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello vite ;0</h1>
      <I18nextProvider i18n={i18n}>
        <Acordeon />
      </I18nextProvider>
    </div>
  )
}

export default App
