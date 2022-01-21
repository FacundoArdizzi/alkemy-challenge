import { Input, FormControl, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from '../../../redux/actions/loginActions'
import styles from './InputEmail.module.css'

const InputEmail = () => {
  const dispatch = useDispatch()
  const emailValue = useSelector(state => state.login.email)
  const [typing, setTyping] = useState(false)

  const handleChange = (e) => {
    dispatch(setEmail(e.target.value))
    setTyping(true)
  }

  return (
    <FormControl isRequired>
      <FormLabel 
        htmlFor='email' 
        position='relative'
        bottom='-6vh'
        className={typing ? styles.label : null}
      >Email</FormLabel>
      <Input 
        onChange={handleChange}
        id='email'
        type="email" 
        name="email"
        value={emailValue}
        autoComplete='off'
        minW='25vw'
        outline='none'
        variant='flushed'
      />
    </FormControl>
  )
}

export default InputEmail