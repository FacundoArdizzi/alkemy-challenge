import { combineReducers } from "redux"
import loginReducer from "./loginReducer"
import menuReducer from './menuReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  dropdown: searchReducer,
  menu: menuReducer,
})

export default rootReducer