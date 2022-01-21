import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { cleanDropdown, searchItem } from '../../redux/actions/homeActions'
import Dropdown from './Dropdown'

const InputSearch = () => {
  const dispatch = useDispatch()
  const dropdown = useSelector(state => state.home.dropdown)
  const [loading, setLoading] = useState(false)
  const [searchWord, setSearchWord] = useState('')

  const handleChange = async ({ target }) => {
    setSearchWord(target.value)
    try {
      if (searchWord.length > 2) {
        setLoading(true)
        console.log('ahora hago el dispatch')
        /* dispatch(searchItem(formik.values.search)) */
      }
    } catch (e) {
      setLoading(false)
      swal('Ups!', 'Please try again', 'error')
      dispatch(cleanDropdown())
    }
  }

  return (
    <div>
      <input type='search' name='search' onChange={handleChange} value={searchWord} />
      {loading && <Dropdown data={dropdown} />}
    </div>
  )
}

export default InputSearch