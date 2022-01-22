import { Stack } from '@chakra-ui/layout'
import React from 'react'
import Menu from '../menu/Menu'

const Trash = () => {
  return (
    <Stack>
      <Menu trash={true} />
    </Stack>
  )
}

export default Trash