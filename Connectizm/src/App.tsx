// import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import './global.css'
import SignIn from './_auth/handles/SignIn'
import { Home } from './_root/pages'
import SignUp from './_auth/handles/SignUp'
import AuthLayout from './_auth/handles/AuthLayout'
import RootLayout from './_root/RootLayout'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className='flex h-screen '>
      <Routes>
        <Route element= {<AuthLayout/>}>
          {  /* Public routes*/}
          <Route path="/sign-in" element = {<SignIn/>}/>
          <Route path="/sign-up" element = {<SignUp/>}/>
        </Route>

        <Route element= {<RootLayout/>}>
          {/*Private routes*/}
          <Route index element = {<Home/>} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
