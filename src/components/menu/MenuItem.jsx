import React from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { deleteItem } from '../../redux/actions/homeActions'

const MenuItem = ({ id, title, img }) => {
  const dispatch = useDispatch()
  console.log(title, id)
  const handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: `Are you sure you want to delete ${title} from your menu?`,
      icon: 'warning',
      buttons: {
        cancel: 'cancel',
        value: 'yes',
      }
    })
    .then(response => {
      response === null ? null : dispatch(deleteItem(id))
    })
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