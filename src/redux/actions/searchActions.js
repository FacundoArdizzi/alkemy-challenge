import axios from 'axios'
export const SEARCH_ITEM = 'searchItem'
export const CLEAN_DROPDOWN = 'cleanDropdown'

const API_KEY = '708a5f64433344e6b4c1b20bef6d12ec'
const URL = 'https://api.spoonacular.com/recipes/'

export const searchItem = (payload) => {
  return async (dispatch) => {
    const response = await axios.get(`${URL}autocomplete?apiKey=${API_KEY}&query=${payload}&number=8`)
    dispatch({ type: SEARCH_ITEM, payload: response.data })
  }
}

export const cleanDropdown = () => {
  return { type: CLEAN_DROPDOWN }
}