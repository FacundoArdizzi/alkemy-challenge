import { LOGIN, SET_EMAIL, SET_PASSWORD } from "../actions/loginActions";

const loginState = {
  email: '', 
  password: '',
  token: '' ,
}

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case SET_EMAIL: return {
      ...state, 
      email: action.payload
    }
    case SET_PASSWORD: return {
      ...state, 
      password: action.payload
    }
    case LOGIN: return {
      ...state, 
      token: action.payload,
    }
    default: return state
  }
}

export default loginReducer