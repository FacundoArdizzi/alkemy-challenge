import { Button, Heading, Image, Stack } from '@chakra-ui/react'
import { DeleteIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { deleteFromMenu, deleteFromTrash } from '../../redux/actions/menuActions'
import { Link } from 'react-router-dom'

const MenuItem = ({ id, title, img, trash }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    if (trash) {
      swal({
        title: 'Are you sure?',
        text: `Are you sure you want to delete ${title} permanently?`,
        icon: 'warning',
        buttons: {
          cancel: 'cancel',
          value: 'yes',
        }
      })
      .then(response => response !== null ? dispatch(deleteFromTrash(id)) : null)
    } else {
      swal({
        title: 'Are you sure?',
        text: `Are you sure you want to delete ${title} from your menu?`,
        icon: 'warning',
        buttons: {
          cancel: 'cancel',
          value: 'yes',
        }
      })
      .then(response => response !== null ? dispatch(deleteFromMenu(id, title, img)) : null)
    }
  }

  return (
    <Stack 
      maxW={{ base: '42vw', md: '23vw'}} 
      minW={{ base: '42vw', md: '23vw'}} 
      h={{ base: 'fit-content', md: '40vh'}}
      boxShadow='lg'
      border='1px solid'
      borderColor='gray'
      borderRadius='md' 
      overflow='hidden'
      mb='3vh'
    >
      <Image src={img} alt={title} />
      <Stack direction='row' justifyContent='space-between' alignItems='center' pb='2vh'>
        <Heading 
          w='fit-content' 
          ml='.5vw' 
          fontSize='1.3rem'
          textTransform='capitalize'
        >{title}</Heading>
        <Stack direction='row' spacing={0} alignItems='center' p={0}>
          <Button onClick={handleDelete} color='red' w='fit-content' _focus={{outline:'none'}}>
            <DeleteIcon w={4} h={4} />
          </Button>
          <Button w='fit-content' _focus={{outline:'none'}} p={0}>
            <Link to={`/info/${id}`}>
              <InfoOutlineIcon w={4} h={4} />
            </Link>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MenuItem