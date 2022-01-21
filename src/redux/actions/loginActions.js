import axios from 'axios'

export const SET_EMAIL = 'setEmail'
export const CLEAN_EMAIL = 'cleanEmail'
export const SET_PASSWORD = 'setPassword'
export const CLEAN_PASSWORD = 'cleanPassword'
export const LOGIN = 'login'

export const setEmail = (email) => {
  return { type: SET_EMAIL, payload: email }
}

export const cleanEmail = () => {
  return { type: CLEAN_EMAIL }
}

export const setPassword = (password) => {
  return { type: SET_PASSWORD, payload: password }
}

export const cleanPassword = () => {
  return { type: CLEAN_PASSWORD }
}
