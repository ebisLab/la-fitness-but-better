import React from 'react';
import { useDisclosure, Image, Text, Table, Th, Tr,Td, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
ModalFooter, Button, Thead, Tbody } from '@chakra-ui/react'

export default function PatronList2({removeduplicates2}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} variant='ghost'>
        {removeduplicates2().length} guests today 
        </Button>

  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Today's Attendees</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Table size='sm'>
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>Name</Th>
                    <Th>Membership</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {removeduplicates2().map((item, i)=>(<Tr key={i}>
                    <Td>
                      <Image 
                      boxSize='45px' 
                      borderRadius='10px'
                      src={item.member_photo} alt={item.first_name} /></Td>
                    <Td>{item.first_name} {item.last_name}</Td>
                    <Td>{item.fitness_type}</Td>
                  </Tr>))}
                </Tbody>
                </Table>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )

}
