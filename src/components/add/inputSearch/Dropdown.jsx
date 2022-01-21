import { Stack } from '@chakra-ui/react'
import React from 'react'
import DropdownItem from './DropdownItem'

const Dropdown = ({ data }) => {
  return (
    <Stack
      boxShadow='lg'
      borderRadius='0 0 1rem 1rem'
      w='35vw'
      position='relative'
      top='0'
    >
      {data ? data.map(c => <DropdownItem key={c.id} id={c.id} title={c.title} />) : <div>Loading</div> }
    </Stack>
  )
}

export default Dropdown