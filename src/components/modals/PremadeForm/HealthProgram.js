import React from 'react';
import {
  useDisclosure,
  Image,
  Text,
  Table,
  Th,
  Tr,
  Td,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  Thead,
  Tbody,
} from '@chakra-ui/react';
import HealthProgramForm from './HealthProgramForm';

export default function HealthProgram({
  item,
  currentUser,
  todaysList,
  usersDatabase,
  setUsersDatabase,
  changeThisUser,
}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Guest Waiver</Button>

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Guest List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HealthProgramForm
              setUsersDatabase={setUsersDatabase}
              changeThisUser={changeThisUser}
              usersDatabase={usersDatabase}
              todaysList={todaysList}
              item={item}
              currentUser={currentUser}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
