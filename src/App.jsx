import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar'
import Mainba from './Mainba'
import Body from './Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <><Mainba></Mainba></>
  <><Body></Body></>
   
   </>
  

  )
}

export default App
