import React from 'react'
import {  useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { addMenuItem, cleanDropdown } from '../../redux/actions/homeActions'

const DropdownItem = ({ id, title }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addMenuItem(id))
    swal({
      title: 'Success!',
      text: `You added ${title} to you menu`,
      icon: 'success',
    })
    .then(() => {
      dispatch(cleanDropdown())
    })
  }
  console.log('yo me renderizo')
  return (
    <div onClick={handleClick}>{title}</div>
  )
}

export default DropdownItem