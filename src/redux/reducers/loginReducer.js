import { 
  SET_EMAIL,
  CLEAN_EMAIL,
  SET_PASSWORD,
  CLEAN_PASSWORD,
  LOGIN,
} from "../actions/loginActions";

const loginState = {
  email: '', 
  password: '',
  auth: localStorage.getItem('token'),
}

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case SET_EMAIL: return {
      ...state, 
      email: action.payload
    }
    case CLEAN_EMAIL: return {
      ...state, 
      email: ''
    }
    case SET_PASSWORD: return {
      ...state, 
      password: action.payload
    }
    case CLEAN_PASSWORD: return {
      ...state,
      password: '',
    }
    default: return state
  }
}

export default loginReducer