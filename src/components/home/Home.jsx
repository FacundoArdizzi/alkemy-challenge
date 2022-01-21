import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../sideBar/SideBar'

const Home = () => {
  return (
    <Stack direction='row' >
      <Stack mr='20vw'>
        <SideBar />
      </Stack>
      <Stack>
        <Heading>Soy el home</Heading>
      </Stack>
    </Stack>
  )
}

export default Home