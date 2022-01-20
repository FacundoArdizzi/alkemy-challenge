import React from 'react'
import DropdownItem from './DropdownItem'

const Dropdown = ({ data }) => {
  return (
    <div>
      {data.map(c => <DropdownItem key={c.id} id={c.id} title={c.title} />)}
    </div>
  )
}

export default Dropdown