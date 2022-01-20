import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login } from './components/index'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
