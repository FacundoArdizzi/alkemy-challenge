import { Stack, Text } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import React from 'react'

const Stat = ({ children, title }) => {
  return (
    <Stack alignItems='center'>
      <Stack
        border='3px solid'
        borderColor='gray'
        borderRadius='full'
        w='7rem'
        h='7rem'
        alignItems='center'
        justifyContent='center'
        justifyItems='center'
        color={children == true ? 'green' : children == false ? 'red' : ''}
      >
        <Text
          fontSize='1.5rem'
          fontWeight='bold'
        >
{children !== true && children !== false ? children : children == true ? <CheckIcon/> : <CloseIcon/>}
        </Text>
      </Stack>
      <Text textAlign='center'>{title}</Text>
    </Stack>
  )
}

export default Stat