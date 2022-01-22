import { combineReducers } from "redux"
import loginReducer from "./loginReducer"
import menuReducer from './menuReducer'
import searchReducer from './searchReducer'
import homeReducer from './homeReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  dropdown: searchReducer,
  menu: menuReducer,
  home: homeReducer,
})

export default rootReducer