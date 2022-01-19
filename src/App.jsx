import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Hello World</h1>} />
      </Routes>
    </>
  )
}

export default App
