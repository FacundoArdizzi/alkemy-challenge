import { Box, Button, Heading, Image, Stack } from '@chakra-ui/react'
import { DeleteIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { deleteFromMenu, deleteFromTrash } from '../../redux/actions/menuActions'

const MenuItem = ({ id, title, img, trash }) => {
  const dispatch = useDispatch()
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
      if (response === null) {
        return null 
      } else {
        trash ? dispatch(deleteFromTrash(id)) : dispatch(deleteFromMenu(id, title, img))
      }
    })
  }

  return (
    <Stack 
      maxW='23vw' 
      minW='23vw' 
      minH='43vh'
      maxH='43vh' 
      boxShadow='md'
      borderRadius='md' 
      overflow='hidden'
      mb='3vh'
    >
      <Image src={img} alt={title} />
      <Stack direction='row' justifyContent='space-between'>
        <Heading w='fit-content' ml='1vw'>{title}</Heading>
        <Box>
          <Button onClick={handleDelete} color='red' w='fit-content'>
            <DeleteIcon />
          </Button>
          <Button w='fit-content'>
            <InfoOutlineIcon />
          </Button>
        </Box>
      </Stack>
    </Stack>
  )
}

export default MenuItem