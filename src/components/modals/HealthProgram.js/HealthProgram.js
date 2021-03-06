import React, {useContext} from 'react';
import {
  useDisclosure,
  IconButton,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import CardContext from '../../../store/CardContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeartCirclePlus} from '@fortawesome/free-solid-svg-icons';
import HealthProgramForm from './HealthProgramForm';

export default function HealthProgram() {
  const {
    onBarcodeChange,
    userBarcode,
    submitBarcodeHandler,
    currentUser,
    setUsersDatabase,
    usersDatabase,
    setCurrentUser,
    todaysList,
    setTodaysList,
  } = useContext(CardContext);
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        colorScheme="red"
        p="5px"
        style={{margin: '0 2%'}}>
        <FontAwesomeIcon icon={faHeartCirclePlus} size="2x" />
      </IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Health Program Enrollment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HealthProgramForm
              setCurrentUser={setCurrentUser}
              setUsersDatabase={setUsersDatabase}
              usersDatabase={usersDatabase}
              todaysList={todaysList}
              setTodaysList={setTodaysList}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
