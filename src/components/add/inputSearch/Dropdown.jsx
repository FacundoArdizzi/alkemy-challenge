import { Stack } from '@chakra-ui/react'
import React from 'react'
import DropdownItem from './DropdownItem'

const Dropdown = ({ data }) => {
  console.log('data', data)
  return (
    <Stack
      boxShadow='lg'
      borderRadius='0 0 1rem 1rem'
      w='35vw'
      position='relative'
      top='0'
    >
      {data ?
        data.map(c => <DropdownItem id={c.id} title={c.title} key={c.id} />)
        : <Heading>Loading</Heading>
      }
    </Stack>
  )
}

export default Dropdown