import { Stack } from '@chakra-ui/react'
import React from 'react'
import NavBarButtons from './NavBarButtons'
import SideBar from './SideBar'

const NavBar = () => {
  return (
    <Stack 
      position='absolute'
      top='0'
      w='100%' 
      h='fit-content' 
      p={{ base: '2vh 3vw', md: '1rem 3rem'}} 
      borderBottom='1px solid gray' 
      direction='row'
      justifyContent='space-between'
    >
      <SideBar />
      <NavBarButtons />
    </Stack>
  )
}

export default NavBar