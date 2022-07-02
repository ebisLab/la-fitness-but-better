import React from 'react';
import {
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
} from '@chakra-ui/react';
import GuestList from './GuestList';

export default function GuestForm({
  item,
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
    membership: 'guest',
  });
  const [guesList, setGuestList] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    setGuestList(item.perks?.guest);
  }, []);

  const handleChange = async e => {
    const value = e.target.value;

    await setGuestInfo({
      ...guestInfo,
      id: guesList ? guesList.length + 1 : 0,
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
    });
  };

  const onChange = () => {};

  return (
    <div>
      <div>
        <Table size="sm">
          <Tbody>
            {guesList?.map((item, i) => (
              <Tr key={i}>
                <Td>
                  <Checkbox
                    onChange={onChange}
                    textTransform="capitalize"
                    // ref={ref}
                    isChecked={isChecked}
                  />
                </Td>
                <Td>
                  <Image
                    boxSize="45px"
                    borderRadius="10px"
                    src={item.guest_image}
                    alt={item.first_name}
                  />
                </Td>
                <Td>
                  {item.first_name} {item.last_name}
                </Td>
                <Td>{item.phone_number}</Td>
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
    </div>
  );
}
