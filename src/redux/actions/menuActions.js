import axios from 'axios'
export const ADD_MENU_ITEM = 'addMenuItem'
export const DELETE_FROM_MENU = 'deleteFromMenu'
export const DELETE_FROM_TRASH = 'deleteFromTrash'

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
