import axios from 'axios'
export const ADD_MENU_ITEM = 'addMenuItem'
export const SEARCH_ITEM = 'searchItem'
export const DELETE_ITEM = 'deleteItem'

const API_KEY = '708a5f64433344e6b4c1b20bef6d12ec'
const URL = 'https://api.spoonacular.com/food/menuItems/'

export const addMenuItem = (id) => {
  return async (dispatch) => {
    const item = await axios.get(`${URL}${id}/?apiKey=${API_KEY}`)
    dispatch({ type: LOGIN, payload: item.data })
  }
}

export const searchItem = (payload) => {
  return async (dispatch) => {
    const response = await axios.get(`${URL}search?apiKey=${API_KEY}&query=${payload}`)
    dispatch({ type: SEARCH_ITEM, payload: response.data.menuItems })
  }
}

export const deleteItem = (id) => {
  return { type: DELETE_ITEM, payload: id }
}