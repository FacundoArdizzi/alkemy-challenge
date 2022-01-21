import React from 'react'
import DropdownItem from './DropdownItem'

const Dropdown = ({ data }) => {
  return (
    <div>
      {data ? data.map(c => <DropdownItem key={c.id} id={c.id} title={c.title} />) : <div>Loading</div> }
    </div>
  )
}

export default Dropdown