import axios from 'axios'
export const ADD_MENU_ITEM = 'addMenuItem'
export const SEARCH_ITEM = 'searchItem'
export const DELETE_ITEM = 'deleteItem'
export const CLEAN_DROPDOWN = 'cleanDropdown'

const API_KEY = '708a5f64433344e6b4c1b20bef6d12ec'
const URL = 'https://api.spoonacular.com/recipes/'

export const addMenuItem = (id) => {
  return async (dispatch) => {
    const item = await axios.get(`${URL}${id}/information?apiKey=${API_KEY}`)
    dispatch({ type: ADD_MENU_ITEM, payload: item.data })
  }
}

export const searchItem = (payload) => {
  return async (dispatch) => {
    const response = await axios.get(`${URL}autocomplete?apiKey=${API_KEY}&query=${payload}&number=15`)
    dispatch({ type: SEARCH_ITEM, payload: response.data })
  }
}

export const deleteItem = (id) => {
  return { type: DELETE_ITEM, payload: id }
}

export const cleanDropdown = () => {
  return { type: CLEAN_DROPDOWN }
}