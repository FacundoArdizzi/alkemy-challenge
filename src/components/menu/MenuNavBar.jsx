import { Button, Stack } from '@chakra-ui/react'
import { DeleteIcon, AddIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuNavBar = () => {
  return (
    <Stack 
      w='100%' 
      h='fit-content' 
      p='1rem' 
      borderBottom='1px solid gray' 
      direction='row'
      justifyContent='flex-end'
    >
      <Button 
        color='red' 
        bg='none' 
        border='1px solid red' 
        outline='none'
        _focus={{ outline: 'none' }}
        _hover={{}}
      >
        <Link to='/trash'><DeleteIcon /></Link>
      </Button>
      <Button 
        color='green' 
        bg='none' 
        border='1px solid green' 
        outline='none'
        _focus={{ outline: 'none' }}
        _hover={{}}
      >
        <Link to='/add'><AddIcon /></Link>
      </Button>
    </Stack>
  )
}

export default MenuNavBar