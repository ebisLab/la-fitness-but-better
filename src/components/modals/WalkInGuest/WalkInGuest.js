import React from 'react';
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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import WalkForm from './WalkForm';

export default function WalkInGuest({todaysList, setTodaysList}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <IconButton onClick={onOpen} colorScheme="cyan" p="5px">
        <FontAwesomeIcon icon={faUserPlus} size="2x" />
      </IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Walk In Guest</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WalkForm todaysList={todaysList} setTodaysList={setTodaysList} />
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
