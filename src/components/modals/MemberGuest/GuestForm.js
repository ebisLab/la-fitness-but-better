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
  setCurrentUser,
  currentUser,
  todaysList,
  setUsersDatabase,
  setTodaysList,
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
  const [index, setIndex] = React.useState(0);
  const [todos, setTodos] = React.useState(item.perks?.guest);
  const [selectedTodo, setSelectedTodo] = React.useState();
  const [checkedList, setCheckedList] = React.useState(todos);

  React.useEffect(() => {
    setGuestList(item.perks?.guest);
  }, []);

  function handleToggleChecked(todoid) {
    setTodos(it => {
      console.log('im it', it);
      let todo = it.find(td => td.first_name === todoid.first_name);
      todo.isChecked = !todo.isChecked;
      console.log('finding todo', todo);
      return it;
    });
  }

  function handleselect(todoid) {
    setSelectedTodo(todos.find(todo => todo.id === todoid));
  }

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

  function handleChangeCheck(guestid) {}
  const changeCheck = gst => e => {
    console.log('gst', gst);
    console.log('eee', e.target.checked);

    const lastguestindex = guesList.findIndex(
      obj => obj.first_name === gst.first_name,
    );
    console.log('lastgues', lastguestindex);
    const newAr = guesList.map((obj, i) => {
      return obj[lastguestindex];
      // if (gst[lastguestindex] === obj[lastguestindex]) return obj;
    });
    console.log('neww', newAr);

    // console.log(e.target.checked);
    // setChecked(e.target.checked);

    // const lastguestindex = guesList.findIndex(
    //   obj => obj.first_name === gst.first_name,
    // );
    // setIndex(lastguestindex);

    // guesList.map(obj => {
    //   if (obj[lastguestindex] === gst[lastguestindex]) {
    //     return (guesList[lastguestindex] = {
    //       ...gst,
    //       isChecked: e.target.checked,
    //     });
    //   }
    // });

    // guesList[lastguestindex] = {
    //   ...gst,
    //   isChecked: e.target.checked,
    // };

    // setIsChecked(e.target.checked);
  };

  const addToTodaysList = e => {
    e.preventDefault();
    // console.log('checing to see somefin', guesList);
    let me = todos.filter(stuff => {
      if (stuff.isChecked === true) return stuff;
    });
    console.log('checked me', me);
    setCheckedList(
      todos.filter(stuff => {
        if (stuff.isChecked === true) return stuff;
      }),
    );
    // let addToList = todos.filter(stuff => {
    //   if (stuff.isChecked === true) return stuff;
    // });

    todos.filter(stuff => {
      if (stuff.isChecked === true) {
        return setTodaysList([...todaysList, stuff]);
      }
    });
    // console.log('addToLit', [...todaysList, ...addToList]);

    // setTodaysList([...todaysList, ...addToList]);

    checkInMemberGuest(todos);
  };

  function toggleComplete(todo) {
    handleToggleChecked(todo);
    console.log('todo id', todo.id);
  }
  console.log('guest info', guestInfo);
  console.log('guest list🌈', guesList);
  console.log('checked', checked);

  console.log('todo', todos);
  console.log('checkedList 🔥', checkedList);

  return (
    <div>
      <div>
        <Table size="sm">
          <Tbody>
            {guesList?.map(gst => (
              <Tr key={gst.id}>
                <Td>
                  <Checkbox
                    value={gst.isChecked}
                    onChange={() => toggleComplete(gst)}
                    // onChange={changeCheck(gst)}
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
