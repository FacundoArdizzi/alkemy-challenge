import { 
  Heading, 
  Stack, 
  Table, 
  Tbody, 
  Text, 
  Td,
  Th,
  Thead, 
  Tr, 
  Button, 
  useDisclosure, 
  Collapse, 
  ButtonGroup,
  IconButton,
  SlideFade
} from '@chakra-ui/react'
import { AddIcon, MinusIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import InfoImg from './InfoImg'
import Stat from './Stat'

const DetailedInfo = ({ item }) => {
  const { isOpen, onToggle } = useDisclosure()
  const [show, setShow] = useState(false)
  const summary = item.summary.replace(/<[^>]*>?/g, '')

  const handleText = () => setShow(!show)

  return (
    <Stack w='70vw' justifyContent='space-between' direction='row'>
      <Stack w='25vw' >
        <InfoImg src={item.image} alt={item.title} />
        <Stack>
          <Stack direction='row' alignItems='center' w='100%' justifyContent='space-between'>
            <Stat title='Health Score' children={item.healthScore} />
            <Stat title='Cooking Minutes' children={item.cookingMinutes} />
          </Stack>
          <Stack direction='row' alignItems='center' w='100%' justifyContent='space-between'>
            <Stat title='Vegan' children={item.vegan} />
            <Stat title='Vegetarian' children={item.vegetarian} />
          </Stack>
        </Stack>
      </Stack>
      <Stack w='38vw'>
          <Heading textAlign='center' textTransform='capitalize' mb='3vh'>{item.title}</Heading>
          <Collapse
            in={show}
            startingHeight='20vh'
          >
            <Text textAlign='justify' lineHeight='1.7rem' >{summary}</Text>
          </Collapse>
          <Button 
            onClick={handleText} 
            border='1px solid'
            borderColor='primary'
            bg='transparent'
            color='primary'
            _hover={{ bg: 'primary', color: 'white' }}
            _focus={{ outline: 'none' }}
          >
            {show ? <MinusIcon /> : <AddIcon />}
          </Button>
          <ButtonGroup 
            border='1px solid' 
            borderColor='primary' 
            borderRadius='md' 
            display='flex'
            alignItems='center'
            w='fit-content'
            textAlign='center'
            transition='all .3s ease'
          >
            <Button 
              onClick={onToggle} 
              color='primary'
              _focus={{ outline: 'none' }}
            >Ingredientes</Button>
            <IconButton 
              onClick={onToggle} 
              color='primary'
              size='md'
              _focus={{ outline: 'none' }}
            >
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </IconButton>
          </ButtonGroup>
          <SlideFade in={isOpen}  transition='all 2s ease' >
            <Table variant='flushed' colorScheme='primaryWithTransparence' >
              <Thead>
                <Tr>
                  <Th>Ingredient</Th>
                  <Th>Amount</Th>
                  <Th>Unit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {item.extendedIngredients.map((c) => <Tr key={Math.random()}>
                  <Td>{c.name}</Td>
                  <Td>{c.amount}</Td>
                  <Td>{c.unit}</Td>
                </Tr>)}
              </Tbody>
            </Table>
          </SlideFade>
        </Stack>
    </Stack>
  )
}

export default DetailedInfo