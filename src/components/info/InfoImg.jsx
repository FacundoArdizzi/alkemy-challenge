import React from 'react'
import { Box, Image } from '@chakra-ui/react'

const InfoImg = ({ src, alt }) => {
  return (
    <Box 
      w={{ base: '60vw', md: '25vw' }}
      mb='3vh'
      mx={{ base: 'auto', md: '0' }} 
      h='fit-content'
      border='2px solid'
      borderColor='gray'
      borderRadius='lg' 
      overflow='hidden' 
    >
      <Image src={src} alt={alt} />
    </Box>
  )
}

export default InfoImg