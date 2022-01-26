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
  sumPrices: 0,
  sumTimeOfPreparation: 0,
  sumHealthScore: 0,
  priceRatio: 0,
  timeOfPreparationRatio: 0,
  healthScoreRatio: 0,
}

const menuReducer = (state = menuState, action) => {
  switch (action.type) {
    case ADD_MENU_ITEM: return {
      ...state,
      menu: [action.payload, ...state.menu],
      sumPrices: state.sumPrices + action.payload.pricePerServing,
      sumTimeOfPreparation: action.payload.preparationMinutes 
        ? state.sumTimeOfPreparation + action.payload.preparationMinutes
        : state.sumTimeOfPreparation + action.payload.readyInMinutes,
      sumHealthScore: state.sumHealthScore + action.payload.healthScore,
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
    case GET_PRICE_RATIO: 
    let pricesAvg = state.sumPrices / state.menu.length
    return {
      ...state,
      priceRatio: pricesAvg.toFixed(2)
    }
    case GET_TIME_OF_PREPARATION_RATIO: 
    let timeAvg = state.sumTimeOfPreparation / state.menu.length
    return {
      ...state,
      timeOfPreparationRatio: timeAvg.toFixed(2)
    }
    case GET_HEALTH_SCORE_RATIO: 
    let healthAvg = state.sumHealthScore / state.menu.length
    return {
      ...state,
      healthScoreRatio: healthAvg.toFixed(2)
    }
    default: return state
  }
}

export default menuReducer