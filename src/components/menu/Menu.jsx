import { Box, Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './MenuItem'
import SideBar from '../sideBar/SideBar'
import MenuNavBar from './MenuNavBar'

const Menu = ({ trash }) => {
  const menu = useSelector(state => trash ? state.menu.trash : state.menu.menu)

  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (!auth) navigateTo('/')
  }, [])

  return (
    <Stack direction='row' spacing={0} pt='15vh'>
      <Stack mr='20vw' bg='gray'>
        <SideBar />
      </Stack>
      <Box>
        <MenuNavBar />
      </Box>
      <Stack
        w='100%' 
        mt='15vh'
        justifyContent='space-around' 
        flexWrap='wrap' 
        direction='row' 
        overflowY='scroll'
      >
        {menu.length === 0 ? <Heading>{`Your ${trash ? 'trash' : 'menu'} is empty`}</Heading> 
        : menu.map(c => <MenuItem
          key={c.id}
          id={c.id}
          title={c.title}
          img={c.image}
          trash={trash}
        />)}
      </Stack>
    </Stack>
  )
}
export default Menu