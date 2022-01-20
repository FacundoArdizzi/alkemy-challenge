import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Home, Login } from './components/index'

const App = () => {
  const auth = useSelector(state => state.home.auth)
  return (
    <>
        {auth ? 
        <Routes>
          <Route path='/' element={<Home />} /> 
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
