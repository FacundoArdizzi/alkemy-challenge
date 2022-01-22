import {
  ADD_MENU_ITEM,
  DELETE_FROM_MENU,
  DELETE_FROM_TRASH,
  GET_PRICE_RATIO,
  GET_TIME_OF_PREPARATION_RATIO,
  GET_HEALTH_SCORE_RATIO
} from '../actions/menuActions'

const menuState = {
  menu: [],
  trash: [],
  priceRatio: '', 
  timeOfPreparationRatio: '',
  healthScoreRatio: '',
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
   /*  case GET_PRICE_RATIO: return {

    }
    case GET_TIME_OF_PREPARATION_RATIO: return {

    }
    case GET_HEALTH_SCORE_RATIO: return {

    } */
    default: return state
  }
}

export default menuReducer