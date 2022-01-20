import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setEmail } from '../../redux/actions/loginActions'

const InputEmail = () => {
  const dispatch = useDispatch()
  const [email, setEmailValue] = useState()
  const [errorMessage, setError] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setEmailValue(e.target.value)
  }
  const handleBlur = () => {
    !email.length ? setError('This field is required') : null
    dispatch(setEmail(email))
  }

  return (
    <div>
      <input 
        onChange={handleChange}
        onBlur={handleBlur}
        type="email" 
        name="email" 
      />
      {errorMessage && (
        <div>
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default InputEmail