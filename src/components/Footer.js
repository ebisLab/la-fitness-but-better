import React from 'react'
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import PatronList2 from './modals/PatronList';

export default function Footer({
  isOpen, onOpen, onClose,
  patronsCount, patronsCount2, removeduplicates2}) {
  console.log('remove from footer', removeduplicates2())
  return (
    <footer>
    <section> 
    <Container
        as={Stack}
        maxW={'6xl'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center',  }}
        align={{ base: 'center', md: 'center' }}>

        <PatronList2 removeduplicates2={removeduplicates2} />


        </Container>
        </section>
  </footer>
  )
}
