import React, { useEffect, useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/loginActions'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

const ButtonSend = () => {
  const navigateTo = useNavigate()
  const email = useSelector(state => state.login.email)
  const password = useSelector(state => state.login.password)
  const token = useSelector(state => state.login.token)
  const dispatch = useDispatch()
  const [status, setStatus] = useState('')
  
  const handleClick = () => {
    setStatus('sending')
    dispatch(login(email, password))
  }
  
  useEffect(() => {
    if (token === 'Error') {
      swal('Ups!', 'Please provide a valid email and password', 'error')
      setStatus('')
    } else if (token.length > 5) {
      setStatus('')
      localStorage.setItem('token', token)
      navigateTo('/home')
    } 
  })

  return(
    <div>
      {status === 'sending' ? (
        <button disabled={true}>Sending</button>
      ) : (
        <button
          disabled={email.length > 1 && password. length > 1 ? false : true} 
          onClick={handleClick}
        >Send</button>
      )}
    </div>
  )
}

export default ButtonSend