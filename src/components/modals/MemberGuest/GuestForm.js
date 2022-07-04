import React from 'react';
import {
  chakra,
  Text,
  useCheckbox,
  Alert,
  AlertIcon,
  Input,
  Image,
  IconButton,
  Button,
  ButtonGroup,
  Box,
  Center,
  Grid,
  Tabs,
  Table,
  Checkbox,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  FormControl,
  InputGroup,
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';
import GuestList from './GuestList';

export default function GuestForm({
  item,
  checkInMemberGuest,
  currentUser,
  todaysList,
  setUsersDatabase,
  changeThisUser,
}) {
  const [guestInfo, setGuestInfo] = React.useState({
    guest_image: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    isChecked: false,
    membership: 'guest',
  });
  const [guesList, setGuestList] = React.useState([]);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setGuestList(item.perks?.guest);
  }, []);

  const handleChange = async e => {
    const value = e.target.value;

    await setGuestInfo({
      ...guestInfo,
      id: guesList ? guesList.length + 1 : 0,
      isChecked: e.target.checked,
      guest_image: `https://picsum.photos/id/11${
        guesList ? guesList.length + 1 : 0
      }/200/200`,
      [e.target.name]: value,
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    setGuestList([guestInfo, ...guesList]);
    changeThisUser(e, guestInfo);
    setGuestInfo({
      guest_image: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      isChecked: false,
    });
  };

  const changeCheck = (e, gst) => {
    // console.log(e.target.checked);
    setChecked(e.target.checked);
    const lastguestindex = guesList.findIndex(
      obj => obj.first_name === gst.first_name,
    );
    guesList[lastguestindex] = {
      ...gst,
      isChecked: e.target.checked,
    };

    // setIsChecked(e.target.checked);
  };

  const addToTodaysList = e => {
    e.preventDefault();
    console.log('checing to see somefin', guesList);
    // setGuestList([guestInfo, ...guesList]);
    checkInMemberGuest(guesList);
  };
  console.log('guest info', guestInfo);
  console.log('guest list🌈', guesList);
  console.log('checked', checked);

  return (
    <div>
      <div>
        <Table size="sm">
          <Tbody>
            {guesList?.map((gst, i) => (
              <Tr key={i}>
                <Td>
                  <Checkbox
                    value={gst.first_name}
                    onChange={e => changeCheck(e, gst)}
                  />
                </Td>
                <Td>
                  <Image
                    boxSize="45px"
                    borderRadius="10px"
                    src={gst.guest_image}
                    alt={gst.first_name}
                  />
                </Td>
                <Td>
                  {gst.first_name} {gst.last_name}
                </Td>
                <Td>{gst.phone_number}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
      <form onSubmit={submitHandler}>
        <InputGroup>
          <Input
            placeholder="first name"
            name="first_name"
            value={guestInfo.first_name}
            type="text"
            onChange={handleChange}
          />
          <Input
            placeholder="last name"
            name="last_name"
            value={guestInfo.last_name}
            type="text"
            onChange={handleChange}
          />
          <Input
            placeholder="phone number"
            name="phone_number"
            value={guestInfo.phone_number}
            type="number"
            onChange={handleChange}
          />
        </InputGroup>

        <Button type="submit">Submit</Button>
      </form>
      <button type="submit" onClick={addToTodaysList}>
        submit to table
      </button>
    </div>
  );
}
