import { Button, Stack } from '@chakra-ui/react'
import { DeleteIcon, AddIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuNavBar = () => {
  return (
    <Stack 
      position='absolute'
      top='0'
      w='80vw' 
      h='fit-content' 
      p='1rem 3rem' 
      borderBottom='1px solid gray' 
      direction='row'
      justifyContent='flex-end'
    >
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

export default MenuNavBar