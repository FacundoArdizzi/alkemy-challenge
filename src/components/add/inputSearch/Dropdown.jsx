import { Stack } from '@chakra-ui/react'
import React from 'react'
import DropdownItem from './DropdownItem'

const Dropdown = ({ data }) => {
  return (
    <Stack
      boxShadow='lg'
      borderRadius='1rem'
      w={{ base: '55vw', md: '35vw'}}
      m='auto'
    >
      {data ?
        data.map(c => <DropdownItem id={c.id} title={c.title} key={c.id} />)
        : <Heading>Loading</Heading>
      }
    </Stack>
  )
}

export default Dropdown