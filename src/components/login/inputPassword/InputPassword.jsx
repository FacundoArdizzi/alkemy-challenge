import { Button, Input, InputGroup, InputRightElement, FormControl, FormLabel } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPassword } from '../../../redux/actions/loginActions'
import styles from './InputPassword.module.css'

const InputPassword = () => {
  const dispatch = useDispatch()
  const passwordValue = useSelector(state => state.login.password)
  const [view, setView] = useState(false)
  const [typing, setTyping] = useState(false)

  const handleChange = (e) => {
    dispatch(setPassword(e.target.value))
    setTyping(true)
  }

  return (
    <FormControl isRequired>
      <FormLabel 
        htmlFor='password'
        position='relative'
        bottom='-6vh'
        className={typing ? styles.label : null}
      >Password</FormLabel>
      <InputGroup>
        <Input 
          onChange={handleChange}
          type={view ? 'text' : 'password'} 
          name="password" 
          value={passwordValue}
          autoComplete='off'
          minW='25vw'
          outline='none'
          variant='flushed'
        />
        <InputRightElement>
          <Button 
            onClick={() => setView(!view)} 
            bg='none' 
            border='none'
            _hover={{ bg: 'none', border: 'none' }}
          >
            {view ? <ViewIcon /> : <ViewOffIcon /> }
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}

export default InputPassword