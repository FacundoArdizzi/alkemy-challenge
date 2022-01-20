import React from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './MenuItem'

const Menu = () => {
  const menu = useSelector(state => state.home.menu)
  
  return (
    <div>
      {menu.length === 0 ? <div>Your menu it's empty</div> 
      : menu.map(c => <MenuItem
        key={c.id}
        id={c.id}
        title={c.title}
        img={c.image}
      />)}
    </div>
  )
}
export default Menu