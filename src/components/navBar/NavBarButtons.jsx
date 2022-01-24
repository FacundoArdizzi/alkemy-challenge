import { Button, Stack } from '@chakra-ui/react'
import { DeleteIcon, AddIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBarButtons = () => {
  return (
    <Stack direction='row'>
      <Link to='/trash' display='hidden'>
        <Button 
          color='red' 
          bg='none' 
          border='1px solid red' 
          outline='none'
          _focus={{ outline: 'none' }}
          _hover={{}}
        >
          <DeleteIcon />
        </Button>
      </Link>
      <Link to='/add' display='hidden'>
        <Button 
          color='green' 
          bg='none' 
          border='1px solid green' 
          outline='none'
          _focus={{ outline: 'none' }}
          _hover={{}}
        >
          <AddIcon />
        </Button>
      </Link>
    </Stack>
  )
}

export default NavBarButtons