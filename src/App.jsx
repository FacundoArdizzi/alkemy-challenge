import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { 
  Home,
  Login,
  Menu,
} from './components/index'
import { useSelector } from 'react-redux'

const App = () => {
  const auth = useSelector(state => state.login.auth)

  return (
    <ChakraProvider>
      <Routes>
        {auth ? 
        <>
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
        </>
        : 
          <Route path='/' exact element={<Login />} />
        }
      </Routes>
    </ChakraProvider>
  )
}

export default App
