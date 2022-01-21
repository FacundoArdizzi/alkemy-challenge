import React, { useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { cleanEmail, cleanPassword } from '../../redux/actions/loginActions'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { Button, Stack } from '@chakra-ui/react'

const ButtonSend = () => {
  const navigateTo = useNavigate()
  const email = useSelector(state => state.login.email)
  const password = useSelector(state => state.login.password)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const response = await axios.post(`http://challenge-react.alkemy.org`, { email, password })
      setLoading(false)
      localStorage.setItem('token', response.data.token)
      navigateTo('/home')
    } catch (e) {
      swal('Ups!', 'Please provide a valid email and password', 'error')
      setLoading(false)
      dispatch(cleanEmail())
      dispatch(cleanPassword())
    }
  }

  return(
    <Stack>
      <Button
        disabled={email && password ? false : true} 
        onClick={handleClick}
        isLoading={loading}
        
      >Log In</Button>
    </Stack>
  )
}

export default ButtonSend