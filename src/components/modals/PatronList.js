import React, {useContext} from 'react';
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
import FooterContext from '../../store/FooterContext';
import CardContext from '../../store/CardContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTurnUp} from '@fortawesome/free-solid-svg-icons';
import {UNRECOGNIZED} from '../../store/constants';

export default function PatronList2() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {patronList, setPatronList} = useContext(FooterContext);
  const {todaysList, setTodaysList} = useContext(CardContext);

  let removeduplicates = patronList.filter(
    (data, i, arr) =>
      arr.findIndex(v2 => v2.barcode_number === data.barcode_number) === i,
  );

  return (
    <>
      <Button onClick={onOpen} variant="ghost">
        {removeduplicates.length} guests today
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Today's Attendees</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Name</Th>
                  <Th>Membership</Th>
                </Tr>
              </Thead>
              <Tbody>
                {removeduplicates.map((item, i) => (
                  <Tr key={item.id}>
                    {item.fitness_type === "member's guest" && (
                      <Td
                        style={
                          item.fitness_type === "member's guest"
                            ? {
                                textAlignLast: 'center',
                                padding: 0,
                                position: 'relative',
                                left: '2%',
                              }
                            : null
                        }>
                        <FontAwesomeIcon
                          icon={faTurnUp}
                          size="xl"
                          style={{
                            transform: 'rotate(90deg)',
                          }}
                        />
                      </Td>
                    )}
                    <Td
                      style={
                        item?.fitness_type !== "member's guest"
                          ? {
                              width: '100%',
                            }
                          : null
                      }>
                      <Image
                        boxSize="45px"
                        borderRadius="10px"
                        src={item.member_photo}
                        alt={item.first_name}
                      />
                    </Td>
                    <Td>
                      {item.first_name} {item.last_name}
                    </Td>
                    <Td>{item.fitness_type}</Td>
                    {item.fitness_type !== "member's guest" && <Td></Td>}
                  </Tr>
                ))}
              </Tbody>
            </Table>
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
