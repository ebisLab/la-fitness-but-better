import React from 'react'
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer({patronsCount}) {
  return (
    <footer>
    <section> 
    <Container
        as={Stack}
        maxW={'6xl'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
      <Text>
        <b>{patronsCount}</b> guests today </Text>
        </Container>
        </section>
  </footer>
  )
}
