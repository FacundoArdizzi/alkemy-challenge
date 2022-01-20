import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cleanDropdown, searchItem } from '../../redux/actions/homeActions'
import Dropdown from './Dropdown'

const InputSearch = () => {
  const dispatch = useDispatch()
  const dropdown = useSelector(state => state.home.dropdown)
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
    search.length < 2 ? dispatch(cleanDropdown()) : dispatch(searchItem(search))
  }
  
  return (
    <div>
      <input type='search' onChange={handleChange} />
      {dropdown.length > 1 && <Dropdown data={dropdown} />}
    </div>
  )
}

export default InputSearch