import { Button, Stack } from '@chakra-ui/react';
import { ExternalLinkIcon, ChevronDownIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const SideBar = () => {
  const navigateTo = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigateTo('/')
  }

  return (
    <Stack 
      position='fixed'
      left='0'
      top='0'
      bottom='0'
      h='100vh'
      w='20vw'
      p='5vw' 
      textAlign='center' 
      justifyContent='space-between'
    >
      <Stack>
        <Link to='/home'>Home</Link>
        <Link to='/menu'>Menu</Link>
      </Stack>
      <Button 
        onClick={handleLogout} 
        rightIcon={<ExternalLinkIcon />}
        variant='text'
      >
        Log out
      </Button>
    </Stack>
  )
}

export default SideBar
