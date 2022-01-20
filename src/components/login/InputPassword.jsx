import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPassword } from '../../redux/actions/loginActions'

const InputPassword = () => {
  const dispatch = useDispatch()
  const [password, setPasswordValue] = useState('')
  const [errorMessage, setError] = useState('')

  const handleChange = (e) => {
    setPasswordValue(e.target.value)
  }
  const handleBlur = () => {
    !password.length ? setError('This field is required') : null
    dispatch(setPassword(password))
  }
  
  return (
    <div>
      <input 
        onChange={handleChange}
        onBlur={handleBlur}
        type="text" 
        name="password" 
        id="password" 
      />
      {errorMessage && (
        <div>
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default InputPassword