import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import DetailedInfo from './DetailedInfo'
import NavBar from '../navBar/NavBar'

const Info = () => {
  const navigateTo = useNavigate()
  const { id } = useParams()
  const menu = useSelector(state => state.menu.menu)
  const item = menu.find(curr => curr.id == id)

  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (!auth) navigateTo('/')
  }, [])

  return (
    <Stack direction='row' spacing={0} justifyContent='center'>
      <NavBar />
      <Stack pt='15vh' >
        <DetailedInfo item={item} />
      </Stack>
    </Stack>
  )
}

export default Info