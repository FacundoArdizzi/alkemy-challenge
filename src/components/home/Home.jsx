import { Box, Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../navBar/NavBar'
import {
  getPriceRatio,
  getTimeOfPreparationRatio,
  getHealthScoreRatio,
} from '../../redux/actions/menuActions'
import Stat from '../info/Stat'

const Home = () => {
  const dispatch = useDispatch()
  const menu = useSelector(state => state.menu.menu)
  console.log('menu', menu)
  const priceRatio = useSelector(state => state.menu.priceRatio)
  const timeOfPreparationRatio = useSelector(state => state.menu.timeOfPreparationRatio)
  const healthScoreRatio = useSelector(state => state.menu.healthScoreRatio)
  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (!auth) navigateTo('/')
    if (menu.length > 0) {
      dispatch(getPriceRatio())
      dispatch(getTimeOfPreparationRatio())
      dispatch(getHealthScoreRatio())
    }
  }, [])

  return (
    <Stack justifyContent='center'>
      <NavBar />
      <Box pt='15vh'>
        <Heading textAlign='center' >Menu Ratios</Heading>
        <Stack spacing='5vw' justifyContent='center' mt='3vh' direction={{base: 'column', md: 'row'}} >
          <Stat title='Price' children={priceRatio} />
          <Stat title='Time of Preparation' children={timeOfPreparationRatio} />
          <Stat title='Health Score' children={healthScoreRatio} />
        </Stack>
      </Box>
    </Stack>
  )
}

export default Home