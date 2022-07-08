import React, {useContext} from 'react';
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import FooterContext from '../store/FooterContext';
import PatronList2 from './modals/PatronList';

export default function Footer({
  isOpen,
  onOpen,
  onClose,
  patronsCount,
  patronsCount2,

  removeduplicates2,
}) {
  const {patronList, setPatronList} = useContext(FooterContext);
  console.log('remove from footer', removeduplicates2());

  // const play = ()=>{
  //   setPatronList(prevstate=>[...prevstate])
  // }

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
          <PatronList2 removeduplicates2={removeduplicates2} />
        </Container>
      </section>
    </footer>
  );
}
