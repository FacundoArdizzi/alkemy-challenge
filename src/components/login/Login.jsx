import React, { useEffect, useState } from 'react'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'
import ButtonSend from './ButtonSend'

const Login = () => {
  return (
    <div>
      <InputEmail />
      <InputPassword />
      <ButtonSend />
    </div>
  )
}

export default Login