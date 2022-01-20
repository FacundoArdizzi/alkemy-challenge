import { ADD_MENU_ITEM, SEARCH_ITEM, DELETE_ITEM } from '../actions/homeActions'
const token = localStorage.getItem('token')

const homeState = {
  menu: [],
  serchDropDrown: [],
  auth: token.length > 1 ? true : false
}

const homeReducer = (state = homeState, action) => {
  switch (action.type) {
    case ADD_MENU_ITEM: return {
      ...state,
      menu: [action.payload, ...state.menu]
    }
    case DELETE_ITEM: return {
      ...state,
      menu: state.menu.reduce(c => c.id !== action.payload)
    }
    case SEARCH_ITEM: return {
      ...state, 
      searchDropDown: [action.payload]
    }
    default: return state
  }
}

export default homeReducer