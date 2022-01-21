import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login } from './components/index'

const App = () => {
  const auth = localStorage.getItem('token')

  return (
    <>
        {auth ? 
        <Routes>
          <Route path='/home' element={<Home />} /> 
        </Routes> 
        : 
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        }
    </>
  )
}

export default App
