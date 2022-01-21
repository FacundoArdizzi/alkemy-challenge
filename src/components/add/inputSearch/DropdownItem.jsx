import { Stack, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React from 'react'
import {  useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { addMenuItem, cleanDropdown } from '../../../redux/actions/homeActions'

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
  
  return (
    <Stack 
      direction='row'
      padding='.5rem'
      justifyContent='space-between'
    >
      <Text>{title}</Text> <AddIcon onClick={handleClick} cursor='pointer'/>
    </Stack>
  )
}

export default DropdownItem