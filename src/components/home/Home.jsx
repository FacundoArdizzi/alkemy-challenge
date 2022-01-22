import { Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import SideBar from '../sideBar/SideBar'

const Home = () => {
  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (!auth) navigateTo('/')
  }, [])


  return (
    <Stack direction='row' >
      <Stack mr='20vw' bg='gray'>
        <SideBar />
      </Stack>
      <Stack>
        <Heading>Soy el home</Heading>
      </Stack>
    </Stack>
  )
}

export default Home