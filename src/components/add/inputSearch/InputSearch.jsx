import { Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { cleanDropdown, searchItem } from '../../../redux/actions/searchActions'
import Dropdown from './Dropdown'

const InputSearch = () => {
  const dispatch = useDispatch()
  const dropdown = useSelector(state => state.dropdown)
  const [loading, setLoading] = useState(false)
  const [searchWord, setSearchWord] = useState('')

  const handleChange = async ({ target }) => {
    setSearchWord(target.value)
    try {
      if (searchWord.length > 1) {
        setLoading(true)
        dispatch(searchItem(searchWord))
      }
    } catch (e) {
      setLoading(false)
      swal('Ups!', 'Please try again', 'error')
      dispatch(cleanDropdown())
    }
  }

  return (
    <Stack justifyContent='center' spacing={0}>
      <InputGroup
        w='35vw'
        m='auto'
        border='1px solid'
        borderColor='gray'
        borderRadius='md'
        /* boxShadow='0 -3px 50px 1px rgba(0,0,0,.1)' */
      >
        <Input 
          type='text' 
          name='search' 
          autoComplete='off'
          onChange={handleChange} 
          onBlur={() => setSearchWord('')}
          value={searchWord} 
          border='none' 
          _focus={{ outline: 'none' }}
        />
        <InputRightElement><Search2Icon /></InputRightElement>
      </InputGroup>
      <Stack w='fit-content' m='auto'>
      {loading && <Dropdown data={dropdown} />}
      </Stack>
    </Stack>
  )
}

export default InputSearch