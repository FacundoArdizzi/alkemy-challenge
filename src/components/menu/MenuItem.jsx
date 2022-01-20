import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../redux/actions/homeActions'

const MenuItem = ({ id, title, img }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteItem(id))
  }
  return (
    <div>
      <div>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <button>
        Icono para desplegar
      </button>
      <button onClick={handleDelete}>
        Remove
      </button>
    </div>
  )
}

export default MenuItem