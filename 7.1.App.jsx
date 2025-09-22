import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter.jsx'
import Timer from './Timer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <p>
         <b>Random ....</b> Trial 
        </p>
        <Counter />
        <Timer />
        
    </>
  )
}

export default App
