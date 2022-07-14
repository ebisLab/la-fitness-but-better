import React from 'react';
import {Container, Stack} from '@chakra-ui/react';
import PatronList2 from './modals/PatronList';

export default function Footer() {
  return (
    <footer>
      <section>
        <Container
          as={Stack}
          maxW={'6xl'}
          direction={{base: 'column', md: 'row'}}
          spacing={4}
          justify={{base: 'center'}}
          align={{base: 'center', md: 'center'}}>
          <PatronList2 />
        </Container>
      </section>
    </footer>
  );
}
