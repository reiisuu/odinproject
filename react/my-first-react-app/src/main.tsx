import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Greeting from './Greeting.tsx';
import Intro from './Intro.tsx';
import Button from './Button.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Greeting />
    <Intro />
    <Button text="Hello" color="blue" fontSize={12} />
    <Button />
  </StrictMode>,
)




