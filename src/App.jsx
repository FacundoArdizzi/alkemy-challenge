import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { 
  Home,
  Login,
  Menu,
  Add,
  Trash,
  Info,
} from './components/index'
import theme from './theme'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/add' element={<Add />} />
        <Route path='/trash' element={<Trash />} />
        <Route path='/info/:id' element={<Info />} />
      </Routes>
    </ChakraProvider>
  )
}

export default App
