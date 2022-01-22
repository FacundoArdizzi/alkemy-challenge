import { Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../sideBar/SideBar'
import {
  getPriceRatio,
  getTimeOfPreparationRatio,
  getHealthScoreRatio,
} from '../../redux/actions/menuActions'
import Stat from '../info/Stat'

const Home = () => {
  const dispatch = useDispatch()
  const menu = useSelector(state => state.menu.menu)
  const priceRatio = useSelector(state => state.menu.priceRatio)
  const timeOfPreparationRatio = useSelector(state => state.menu.timeOfPreparationRatio)
  const healthScoreRatio = useSelector(state => state.menu.healthScoreRatio)
  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (!auth) navigateTo('/')
    if (menu.length > 1) {
      dispatch(getPriceRatio())
      dispatch(getTimeOfPreparationRatio())
      dispatch(getHealthScoreRatio())
    }
  }, [])


  return (
    <Stack direction='row' >
      <Stack mr='20vw' minH='100vh' h='100%' >
        <SideBar />
      </Stack>
      <Stack p='5rem' w='100%' spacing='5vh' alignItems='center'>
        <Heading w='fit-content' m='0 auto' >Menu Ratios</Heading>
        {menu.length > 1 && (
          <Stack spacing='5rem' mt='3vh' direction='row' flexWrap='wrap'>
            <Stat title='Price' children={priceRatio} />
            <Stat title='Time of Preparation' children={timeOfPreparationRatio} />
            <Stat title='Health Score' children={healthScoreRatio} />
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export default Home