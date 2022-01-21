import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { 
  Home, 
  Login, 
  SideBar 
} from './components/index'

const App = () => {
  const auth = localStorage.getItem('token')
  console.log('auth', auth)

  return (
    <Routes>
      {!auth ? 
        <Route path='/' exact element={<Login />} />
      : 
      <>
        <Route path='/' element={<SideBar />} />
        <Route path='/home' element={<Home />} /> 
      </>
      }
    </Routes>
  )
}

export default App
