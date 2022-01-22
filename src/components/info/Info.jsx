import { Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SideBar from '../sideBar/SideBar'
import { useNavigate } from 'react-router-dom'
import DetailedInfo from './DetailedInfo'

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
    <Stack direction='row'>
      <Stack mr='20vw' bg='gray'>
        <SideBar />
      </Stack>
      <Stack>
        <DetailedInfo item={item} />
      </Stack>
    </Stack>
  )
}

export default Info