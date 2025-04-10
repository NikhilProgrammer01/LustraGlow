import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NaturalBeauty from './components/NaturalBeauty/NaturalBeauty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NaturalBeauty />
    </>
  )
}

export default App
