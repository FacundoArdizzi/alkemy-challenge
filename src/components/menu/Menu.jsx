import React from 'react'

const Menu = () => {
  const menu = useSelector(state => state.home.menu)
  return (
    <div>
      {menu.map(c => <MenuItem
        key={c.id}
        id={c.id}
        title={c.title}
        img={c.image}
      />)}
    </div>
  )
}
export default Menu