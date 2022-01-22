import { Stack } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import Menu from '../menu/Menu'
import { useNavigate } from 'react-router-dom'

const Trash = () => {
  const navigateTo = useNavigate()
  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (!auth) navigateTo('/')
  }, [])

  return (
    <Stack>
      <Menu trash={true} />
    </Stack>
  )
}

export default Trash