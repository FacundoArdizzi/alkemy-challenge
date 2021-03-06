import { Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './MenuItem'
import NavBar from '../navBar/NavBar'

const Menu = ({ trash }) => {
  const menu = useSelector(state => trash ? state.menu.trash : state.menu.menu)

  useEffect(() => {
    const auth = localStorage.getItem('token')
    if (!auth) navigateTo('/')
  }, [])

  return (
    <Stack direction='row' spacing={0} pt='15vh' justifyContent='center'>
      <NavBar />
      <Stack 
        mt='15vh'
        p={{ base: '1rem', md: '2rem'}}
        maxW={{base: '', md: '80vw'}}
        w='100%'
        justifyContent='space-around'
        direction='row'
        flexWrap='wrap'
        spacing={0}
      >
        {menu.length === 0 ? <Heading textAlign='center'>{`Your ${trash ? 'trash' : 'menu'} is empty`}</Heading> 
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