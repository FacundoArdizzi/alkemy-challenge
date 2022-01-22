import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { 
  Home,
  Login,
  Menu,
  Add,
  Trash,
} from './components/index'
import { useSelector } from 'react-redux'
import theme from './theme'

const App = () => {
  const auth = useSelector(state => state.login.auth)

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        {!auth ? 
          <Route path='/' exact element={<Login />} />
        : 
          <>
            <Route path='/home' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/add' element={<Add />} />
            <Route path='/trash' element={<Trash />} />
          </>
        }
      </Routes>
    </ChakraProvider>
  )
}

export default App
