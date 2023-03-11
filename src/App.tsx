import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Acordeon from './components/Acordeon'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import AccordeonBootstrap from './components/AcordeonBootstrap';
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Button variant="primary">Primary</Button>{' '}
        <Accordion></Accordion>
        <Acordeon />
        <AccordeonBootstrap />
      </I18nextProvider>
    </div>
  )
}

export default App
