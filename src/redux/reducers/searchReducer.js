import {
  SEARCH_ITEM,
  CLEAN_DROPDOWN,
} from '../actions/searchActions'

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_ITEM: return action.payload
    case CLEAN_DROPDOWN: return []
    default: return state
  }
}

export default searchReducer
