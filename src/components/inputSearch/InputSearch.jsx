import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { cleanDropdown, searchItem } from '../../redux/actions/homeActions'
import Dropdown from './Dropdown'

const InputSearch = () => {
  const dispatch = useDispatch()
  const dropdown = useSelector(state => state.home.dropdown)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = async (e) => {
    setSearch(e.target.value)
    try {
      if (search.length < 2) dispatch(cleanDropdown())
      else {
        setLoading(true)
        dispatch(searchItem(search))
      }
    } catch (error) {
      setLoading(false)
      swal('Ups!', 'Please try again', 'error')
      dispatch(cleanDropdown())
      setSearch('')
    }
  }

  return (
    <div>
      <input type='search' onChange={handleChange} />
      {dropdown.length > 1 && <Dropdown loading={loading} data={dropdown} />}
    </div>
  )
}

export default InputSearch