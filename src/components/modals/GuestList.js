import React from 'react';
import { useDisclosure, Image, Text, Table, Th, Tr,Td, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
    ModalFooter, Button, Thead, Tbody } from '@chakra-ui/react'
import GuestForm from './GuestForm';

export default function GuestList({item, currentUser, todaysList, usersDatabase}) {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
            <Button onClick={onOpen}>Guest Waiver</Button>
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Guest List</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <GuestForm usersDatabase={usersDatabase} todaysList={todaysList} item={item} currentUser={currentUser}/>

                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      
}
