import {
  ADD_MENU_ITEM,
  DELETE_FROM_MENU,
  DELETE_FROM_TRASH,
  GET_PRICE_RATIO,
  GET_TIME_OF_PREPARATION_RATIO,
  GET_HEALTH_SCORE_RATIO,
} from '../actions/menuActions'

const menuState = {
  menu: [],
  trash: [],
  priceRatio: 0, 
  timeOfPreparationRatio: 0,
  healthScoreRatio: 0,
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
      trash: [action.payload, ...state.trash]
    }
    case DELETE_FROM_TRASH: return {
      ...state,
      trash: state.trash.filter(c => c.id !== action.payload),
    }
    case GET_PRICE_RATIO: return {
      ...state,
      priceRatio: action.payload / state.menu.length
    }
    case GET_TIME_OF_PREPARATION_RATIO: return {
      ...state,
      timeOfPreparationRatio: action.payload / state.menu.length
    }
    case GET_HEALTH_SCORE_RATIO: return {
      ...state,
      healthScoreRatio: action.payload / state.menu.length
    }
    default: return state
  }
}

export default menuReducer