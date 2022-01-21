import { Stack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './MenuItem'
import SideBar from '../sideBar/SideBar'
import MenuNavBar from './MenuNavBar'

const Menu = () => {
  const menu = useSelector(state => state.home.menu)
  
  return (
    <Stack direction='row'>
      <Stack mr='20vw'>
        <SideBar />
      </Stack>
      <Stack w='100%'>
        <MenuNavBar />
        {menu.length === 0 ? <div>Your menu is empty</div> 
        : menu.map(c => <MenuItem
          key={c.id}
          id={c.id}
          title={c.title}
          img={c.image}
        />)}
      </Stack>
    </Stack>
  )
}
export default Menu