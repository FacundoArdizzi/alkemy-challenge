import axios from 'axios'

export const SET_EMAIL = 'setEmail'
export const SET_PASSWORD = 'setPassword'
export const LOGIN = 'login'

export const setEmail = (email) => {
  return { type: SET_EMAIL, payload: email }
}


export const setPassword = (password) => {
  return { type: SET_PASSWORD, payload: password }
}


export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://challenge-react.alkemy.org`, { email, password })
      dispatch({ type: LOGIN, payload: response.data.token })
    } catch (error) {
      dispatch({ type: LOGIN, payload: 'Error' })
    }
  }
}