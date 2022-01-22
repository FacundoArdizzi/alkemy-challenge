import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './MenuItem'
import SideBar from '../sideBar/SideBar'
import MenuNavBar from './MenuNavBar'

const Menu = ({ trash }) => {
  const menu = useSelector(state => trash ? state.menu.trash : state.menu.menu)
  
  return (
    <Stack direction='row' spacing={0}>
      <Stack mr='20vw'>
        <SideBar />
      </Stack>
      <Box>
        <MenuNavBar />
      </Box>
      <Stack w='100%' p='18vh 1vw' justifyContent='space-around' flexWrap='wrap' direction='row'>
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