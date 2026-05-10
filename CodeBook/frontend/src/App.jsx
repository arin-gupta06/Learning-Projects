import { useState } from 'react'
import Home from "./pages/Home"
import Dasboard from './pages/Dasboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <span>
        <Home/>
      </span>
      {/* <span>
        <Dashboard/>
      </span> */}
    </>
  )
}

export default App
