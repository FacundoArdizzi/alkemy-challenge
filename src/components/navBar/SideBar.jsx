import { Button, Drawer, DrawerOverlay, DrawerBody, DrawerContent, Stack, useDisclosure, Text } from '@chakra-ui/react'
import { HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigateTo('/')
  }

  return (
    <Stack>
      <Button onClick={onOpen}><HamburgerIcon /></Button>
      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Stack textAlign='center' p='5rem' justifyContent='space-between' h='100%'>
              <Stack>
                <Link to='/home' display='hidden'>
                  <Text _hover={{ color: 'primary' }}>Home</Text>
                </Link>
                <Link to='/menu' display='hidden'>
                  <Text _hover={{ color: 'primary' }}>Menu</Text>
                </Link>
              </Stack>
              <Button 
                onClick={handleLogout} 
                rightIcon={<ExternalLinkIcon />}
                variant='text'
                _hover={{ color: 'red' }}
              >
                Log out
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  )
}

export default SideBar