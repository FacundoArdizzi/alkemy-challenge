import { Button, Input, InputGroup, InputRightElement, FormControl, FormLabel, Text } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import styles from './InputPassword.module.css'
import { useFormikContext } from 'formik'

const InputPassword = () => {
  const [view, setView] = useState(false)
  const { 
    values: { password },
    errors,
    handleChange 
  } = useFormikContext()

  return (
    <FormControl isRequired>
      <FormLabel 
        htmlFor='password'
        position='relative'
        bottom={{ base: '-4.5vh', md: '-6vh'}}
        className={password && styles.label}
      >Password</FormLabel>
      <InputGroup>
        <Input
          value={password}
          onChange={handleChange}
          type={view ? 'text' : 'password'} 
          name="password" 
          autoComplete='off'
          minW='25vw'
          outline='none'
          variant='flushed'
          _focus={{ outline: 'none' }}
        />
        <InputRightElement>
          <Button 
            onClick={() => setView(!view)} 
            bg='none' 
            border='none'
            _hover={{ bg: 'none', border: 'none' }}
            _focus={{ outline: 'none' }}
          >
            {view ? <ViewIcon /> : <ViewOffIcon /> }
          </Button>
        </InputRightElement>
      </InputGroup>
      {errors.password && password ? (
        <Text color='red' fontSize='1rem' >{errors.password}</Text>
      ) : null}
    </FormControl>
  )
}

export default InputPassword
