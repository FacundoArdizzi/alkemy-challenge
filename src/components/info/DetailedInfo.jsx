import { Heading, Image, Stack, Table, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const DetailedInfo = ({ item }) => {
  console.log('item', item)

  return (
    <Stack>
      <Image src={item.img} alt={item.title} />
      <Heading>{item.title}</Heading>
      <Text>{item.summary}</Text>
      <Table>
        <Thead>
          <Tr>
            <Th>Ingredient</Th>
            <Th>Amount</Th>
            <Th>Unit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {item.extendedIngredients.map((c) => <Tr>
            <Th>{c.name}</Th>
            <Th>{c.amount}</Th>
            <Th>{c.unit}</Th>
          </Tr>)}
        </Tbody>
      </Table>
    </Stack>
  )
}

export default DetailedInfo