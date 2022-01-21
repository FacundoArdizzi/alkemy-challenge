import { Stack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import React from 'react'
import MenuNavBar from '../menu/MenuNavBar'
import SideBar from '../sideBar/SideBar'
import InputSearch from './inputSearch/InputSearch'

const Add = () => {
  return (
    <Stack direction='row' h='100vh' spacing={0}>
      <Stack mr='20vw'>
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