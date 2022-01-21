import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail } from '../../redux/actions/loginActions'

const InputEmail = () => {
  const dispatch = useDispatch()
  const emailValue = useSelector(state => state.login.email)

  const handleChange = (e) => {
    dispatch(setEmail(e.target.value))
  }

  return (
    <div>
      <input 
        onChange={handleChange}
        type="email" 
        name="email"
        value={emailValue}
        placeholder='Email'
      />
    </div>
  )
}

export default InputEmail