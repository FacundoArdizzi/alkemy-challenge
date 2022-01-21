import React from 'react'
import InputEmail from './inputEmail/InputEmail'
import InputPassword from './inputPassword/InputPassword'
import ButtonSend from './ButtonSend'
import { Stack } from '@chakra-ui/react'

const Login = () => {
  return (
    <Stack
      w='fit-content'
      p='5rem'
      m='5rem auto'
      alignItems='center'
      borderRadius='1rem'
    >
      <Stack mb='3rem'>
        <InputEmail />
        <InputPassword />
      </Stack>
      <ButtonSend />
    </Stack>
  )
}

export default Login