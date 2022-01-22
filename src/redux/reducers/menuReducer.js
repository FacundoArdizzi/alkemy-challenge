import {
  ADD_MENU_ITEM,
  DELETE_FROM_MENU,
  DELETE_FROM_TRASH,
} from '../actions/menuActions'

const menuState = {
  menu: [],
  trash: [],
}

const menuReducer = (state = menuState, action) => {
  switch (action.type) {
    case ADD_MENU_ITEM: return {
      ...state,
      menu: [action.payload, ...state.menu]
    }
    case DELETE_FROM_MENU: return {
      ...state,
      menu: state.menu.filter(c => c.id !== action.payload.id),
      trash: [action.payload ,...state.trash]
    }
    case DELETE_FROM_TRASH: return {
      ...state,
      trash: state.menu.filter(c => c.id !== action.payload),
    }
    default: return state
  }
}

export default menuReducer