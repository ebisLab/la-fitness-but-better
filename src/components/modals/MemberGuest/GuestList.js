import React from 'react';
import {
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import GuestForm from './GuestForm';

export default function GuestList({
  item,
  currentUser,
  todaysList,
  setTodaysList,
  usersDatabase,
  setUsersDatabase,
  changeThisUser,
  checkInMemberGuest,
  setCurrentUser,
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
            <GuestForm
              setCurrentUser={setCurrentUser}
              setTodaysList={setTodaysList}
              setUsersDatabase={setUsersDatabase}
              changeThisUser={changeThisUser}
              usersDatabase={usersDatabase}
              todaysList={todaysList}
              item={item}
              currentUser={currentUser}
              checkInMemberGuest={checkInMemberGuest}
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
