import axios from 'axios'
export const ADD_MENU_ITEM = 'addMenuItem'
export const DELETE_FROM_MENU = 'deleteFromMenu'
export const DELETE_FROM_TRASH = 'deleteFromTrash'
export const GET_PRICE_RATIO = 'getPriceRatio'
export const GET_TIME_OF_PREPARATION_RATIO = 'getTimeOfPreparationRatio'
export const GET_HEALTH_SCORE_RATIO = 'getHealthScoreRatio'
export const CLEAN_MENU = 'cleanMenu'

const API_KEY = '708a5f64433344e6b4c1b20bef6d12ec'
const URL = 'https://api.spoonacular.com/recipes/'

export const addMenuItem = (id) => {
  return async (dispatch) => {
    const item = await axios.get(`${URL}${id}/information?apiKey=${API_KEY}`)
    dispatch({ type: ADD_MENU_ITEM, payload: item.data })
  }
}

export const deleteFromMenu = (id, title, img) => {
  return { type: DELETE_FROM_MENU, payload: {id, title, img} }
}

export const deleteFromTrash = (id) => {
  return { type: DELETE_FROM_TRASH, payload: id }
}

export const getPriceRatio = (sumPrices) => {
  return { type: GET_PRICE_RATIO, payload: sumPrices }
}

export const getTimeOfPreparationRatio = (sumTime) => {
  return { type: GET_TIME_OF_PREPARATION_RATIO, payload: sumTime }
}

export const getHealthScoreRatio = (sumHealth) => {
  return { type: GET_HEALTH_SCORE_RATIO, payload: sumHealth }
}
