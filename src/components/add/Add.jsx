import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import NavBar from '../navBar/NavBar'
import InputSearch from './inputSearch/InputSearch'

const Add = () => {
  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (!auth) navigateTo('/')
  }, [])

  return (
    <Stack justifyContent='center'>
      <NavBar />
      <Stack pt='15vh'>
        <InputSearch />
      </Stack>
    </Stack>
  )
}

export default Add