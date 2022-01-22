import { Button, Stack, Text } from '@chakra-ui/react';
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
      position='absolute'
      left='0'
      top='0'
      bottom='0'
      bg='gray'
      h='100%'
      w='20vw'
      textAlign='center' 
    >
      <Stack position='fixed' justifyContent='space-between' h='100%' p='5vw' >
        <Stack>
          <Link to='/home' display='hidden'>
            <Text _hover={{ color: 'primary' }}>Home</Text>
          </Link>
          <Link to='/menu' display='hidden'>
            <Text _hover={{ color: 'primary' }}>Menu</Text>
          </Link>
        </Stack>
        <Button 
          onClick={handleLogout} 
          rightIcon={<ExternalLinkIcon />}
          variant='text'
          _hover={{ color: 'red' }}
        >
          Log out
        </Button>
      </Stack>
    </Stack>
  )
}

export default SideBar
