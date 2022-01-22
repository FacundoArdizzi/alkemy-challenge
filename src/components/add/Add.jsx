import { Stack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MenuNavBar from '../menu/MenuNavBar'
import SideBar from '../sideBar/SideBar'
import InputSearch from './inputSearch/InputSearch'

const Add = () => {
  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (!auth) navigateTo('/')
  }, [])

  return (
    <Stack direction='row' h='100vh' spacing={0}>
      <Stack mr='20vw' minH='100vh' h='100%'>
        <SideBar />
      </Stack>
      <Box>
        <MenuNavBar />
      </Box>
      <Stack w='100%' pt='18vh' alignItems='center'>
        <InputSearch />
      </Stack>
    </Stack>
  )
}

export default Add