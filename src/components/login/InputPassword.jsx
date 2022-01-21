import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPassword } from '../../redux/actions/loginActions'

const InputPassword = () => {
  const dispatch = useDispatch()
  const passwordValue = useSelector(state => state.login.password)

  const handleChange = (e) => {
    dispatch(setPassword(e.target.value))
  }

  return (
    <div>
      <input 
        onChange={handleChange}
        type="text" 
        name="password" 
        value={passwordValue}
        placeholder='Password'
      />
    </div>
  )
}

export default InputPassword