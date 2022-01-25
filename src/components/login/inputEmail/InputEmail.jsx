import { Input, FormControl, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from '../../../redux/actions/loginActions'
import styles from './InputEmail.module.css'

const InputEmail = () => {
  const dispatch = useDispatch()
  const emailValue = useSelector(state => state.login.email)
  const [animate, setAnimate] = useState(false)

  const handleChange = (e) => {
    dispatch(setEmail(e.target.value))
  }

  return (
    <FormControl isRequired>
      <FormLabel 
        htmlFor='email' 
        position='relative'
        bottom={{ base: '-4.5vh', md: '-6vh'}}
        className={animate ? styles.label : null}
      >Email</FormLabel>
      <Input 
        onClick={() => setAnimate(true)}
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