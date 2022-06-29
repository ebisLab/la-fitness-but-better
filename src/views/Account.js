import React from 'react';
import { 
  Alert, 
  AlertIcon, 
  Input, 
  IconButton, 
  Button, 
  ButtonGroup, 
  Box, 
  Center, 
  Grid, 
  Tabs, 
  Table, 
  Thead,
  Tbody, 
  Tr, 
  Th, 
  Td,
  FormControl } from '@chakra-ui/react'

export default function Account() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Something1</Th>
          <Th>Something2</Th>
          <Th>Something3</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Hey</Td>
          <Td>Hey</Td>
          <Td>Hey</Td>
        </Tr>
        <Tr>
          <Td>Hey</Td>
          <Td>Hey</Td>
          <Td>Hey</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
