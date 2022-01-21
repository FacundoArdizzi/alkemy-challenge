import React, { useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { cleanEmail, cleanPassword } from '../../redux/actions/loginActions'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

const ButtonSend = () => {
  const navigateTo = useNavigate()
  const email = useSelector(state => state.login.email)
  const password = useSelector(state => state.login.password)
  const dispatch = useDispatch()
  const [status, setStatus] = useState('')
  
  const handleClick = async () => {
    setStatus('sending')
    try {
      const response = await axios.post(`http://challenge-react.alkemy.org`, { email, password })
      setStatus('')
      localStorage.setItem('token', response.data.token)
      navigateTo('/home')
    } catch (e) {
      swal('Ups!', 'Please provide a valid email and password', 'error')
      setStatus('')
      dispatch(cleanEmail())
      dispatch(cleanPassword())
    }
  }

  return(
    <div>
      {status === 'sending' ? (
        <button disabled={true}>Sending</button>
      ) : (
        <button
          disabled={email && password ? false : true} 
          onClick={handleClick}
        >Send</button>
      )}
    </div>
  )
}

export default ButtonSend