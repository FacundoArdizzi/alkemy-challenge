import { Input, FormControl, FormLabel, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from './InputEmail.module.css'
import { useFormikContext } from 'formik'

const InputEmail = () => {
  const [animate, setAnimate] = useState(false)
  const {
    values: { email },
    errors,
    handleChange
  } = useFormikContext()

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
        value={email}
        id='email'
        type='email' 
        name='email'
        autoComplete='off'
        minW='25vw'
        outline='none'
        variant='flushed'
        _focus={{ outline: 'none' }}
      />
      {errors.email && email ? (
        <Text color='red' fontSize='1rem'>{errors.email}</Text>
      ) : null}
    </FormControl>
  )
}

export default InputEmail