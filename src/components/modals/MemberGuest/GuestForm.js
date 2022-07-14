import React, {useContext} from 'react';
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
import FooterContext from '../../../store/FooterContext';
import CardContext from '../../../store/CardContext';

export default function GuestForm({
  item,
  addInMemberGuest,
  changeThisUser,
  currentUser,
}) {
  const {patronList, setPatronList} = useContext(FooterContext);
  const {todaysList, setTodaysList} = useContext(CardContext);

  const [guestInfo, setGuestInfo] = React.useState({
    guest_image: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    isChecked: false,
    fitness_type: "member's guest",
  });
  const [guesList, setGuestList] = React.useState([]);
  const [guest, setGuest] = React.useState(item.perks?.guest);
  const [changeData, setChangeData] = React.useState([]);

  React.useEffect(() => {
    setGuestList(item.perks?.guest);
    setTodaysList(todaysList);
  }, []);

  function handleToggleChecked(e, clickedguestinfo) {
    setGuest(it => {
      let todo = it.find(td => td.first_name === clickedguestinfo.first_name);
      todo.isChecked = !todo.isChecked;
      return it;
    });
    return e.target.checked === true
      ? setChangeData([
          ...changeData,
          {...clickedguestinfo, isSelected: e.target.checked},
        ])
      : null;
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
    // setGuest([guestInfo, ...guesList]);
    changeThisUser(e, guestInfo);

    setGuestInfo({
      guest_image: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      isChecked: false,
    });
  };

  function toggleCheck(e, todo) {
    handleToggleChecked(e, todo);
  }

  // const changeCheck = gst => e => {
  //   console.log('gst', gst);
  //   console.log('eee', e.target.checked);

  //   const lastguestindex = guesList.findIndex(
  //     obj => obj.first_name === gst.first_name,
  //   );
  //   console.log('lastgues', lastguestindex);
  //   const newAr = guesList.map((obj, i) => {
  //     return obj[lastguestindex];
  //     // if (gst[lastguestindex] === obj[lastguestindex]) return obj;
  //   });
  //   console.log('neww', newAr);

  //   // console.log(e.target.checked);
  //   // setChecked(e.target.checked);

  //   // const lastguestindex = guesList.findIndex(
  //   //   obj => obj.first_name === gst.first_name,
  //   // );
  //   // setIndex(lastguestindex);

  //   // guesList.map(obj => {
  //   //   if (obj[lastguestindex] === gst[lastguestindex]) {
  //   //     return (guesList[lastguestindex] = {
  //   //       ...gst,
  //   //       isChecked: e.target.checked,
  //   //     });
  //   //   }
  //   // });

  //   // guesList[lastguestindex] = {
  //   //   ...gst,
  //   //   isChecked: e.target.checked,
  //   // };

  //   // setIsChecked(e.target.checked);
  // };

  const addToTodaysList = e => {
    e.preventDefault();

    setChangeData(changeData);
    addInMemberGuest(changeData);
    guesList.filter((stuff, m) => {
      console.log('filtering stuff', stuff);
      if (stuff.isChecked === true) {
        setTodaysList(prevState => [stuff, ...prevState]);
        setPatronList(prevState => [...prevState]);

        //change position
        //if main user is in the table ✅
        //get main user current position ✅
        //get guest users current positions ✅
        // place them after main user's position
        let mainmember = patronList.findIndex(
          e => e.first_name === item.first_name,
        );
        patronList.splice(mainmember + 1, 0, stuff);
      }
    });
  };

  console.log('today patron checking', patronList);

  return (
    <div>
      <div>
        <Table size="sm">
          <Tbody>
            {guesList?.map(gst => (
              <Tr key={gst.id}>
                <Td>
                  <Checkbox
                    defaultChecked={gst.isChecked ? true : null}
                    value={gst.isChecked}
                    onChange={e => toggleCheck(e, gst)}
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
      <button
        type="submit"
        onClick={e => {
          addToTodaysList(e);
          console.log('checking', todaysList);
        }}>
        submit to table
      </button>
    </div>
  );
}
