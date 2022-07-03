import React from 'react';
import {Input, Button, InputGroup, Stack, SimpleGrid} from '@chakra-ui/react';
import {health_program} from '../../../api/mock';

export default function HealthProgramForm({
  setCurrentUser,
  usersDatabase,
  setUsersDatabase,
  todaysList,
  setTodaysList,
}) {
  const [healthData, setHealthData] = React.useState(health_program);
  const time = (world, conversion) => {
    return new Date().toLocaleString(world, conversion);
  };
  const initialData = {
    id: usersDatabase.length + 1,
    member_photo: `https://picsum.photos/id/${usersDatabase.length + 1}${
      usersDatabase.length + 1
    }${usersDatabase.length + 1}/200`,
    first_name: '',
    last_name: '',
    phone_number: '',
    expiration: time('en-US', {year: 'numeric', month: 'long', day: 'numeric'}),
    status: 'OK',
    fitness_type: 'fitness',
  };
  const [userInfo, setUserInfo] = React.useState(initialData);
  const [input, setInput] = React.useState(initialData);
  const [error, setError] = React.useState(false);

  const addName = name => {
    const user = {
      ...userInfo,
      time: time('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }),
      timesheet: [Date.now()],
    };
    setCurrentUser([user]);
    setTodaysList([user, ...todaysList]);
    setUsersDatabase([user, ...usersDatabase]);
  };

  const changeHandler = e => {
    let value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value,
    });
  };

  const changeDataHandler = e => {
    let value = e.target.value;
    setUserInfo({
      ...input,
      ...userInfo,
      [e.target.name]: value,
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    let findUser = healthData.some(
      item =>
        item.first_name.toLowerCase() === input.first_name.toLowerCase() &&
        item.last_name.toLowerCase() === input.last_name.toLowerCase(),
    );

    let filterUser = healthData.filter(
      item =>
        item.first_name.toLowerCase() === input.first_name.toLowerCase() &&
        item.last_name.toLowerCase() === input.last_name.toLowerCase(),
    );

    if (findUser) {
      setError(false);
      return setUserInfo({...filterUser[0], ...input});
    } else setError(true);
  };

  console.log('submit', userInfo);
  console.log('userdatabase', usersDatabase);
  return (
    <>
      <form onSubmit={submitHandler}>
        <SimpleGrid columns={2} spacing={2} padding="2% 0">
          <Input
            isInvalid={error}
            errorBorderColor={'red.500'}
            placeholder="first name"
            name="first_name"
            value={input.first_name}
            type="search"
            onChange={changeHandler}
          />
          <Input
            isInvalid={error}
            errorBorderColor={'red.500'}
            placeholder="last name"
            name="last_name"
            value={input.last_name}
            type="search"
            onChange={changeHandler}
          />
          <Input
            placeholder="date of birth"
            name="dob"
            value={input.dob}
            type="date"
            onChange={changeHandler}
          />
          <Button type="submit">Search</Button>
        </SimpleGrid>
      </form>

      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addName(input);
          }}>
          <Stack spacing={3} padding="2% 0">
            <Input
              disabled={!userInfo?.first_name ? true : false}
              variant={!userInfo?.first_name ? 'filled' : 'outline'}
              placeholder="first name"
              name="first_name"
              value={userInfo?.first_name}
              type="text"
              onChange={changeDataHandler}
            />
            <Input
              disabled={!userInfo?.last_name ? true : false}
              variant={!userInfo?.last_name ? 'filled' : 'outline'}
              placeholder="last name"
              name="last_name"
              value={userInfo?.last_name}
              type="text"
              onChange={changeDataHandler}
            />
            <Input
              disabled={!userInfo?.phone_number ? true : false}
              variant={!userInfo?.phone_number ? 'filled' : 'outline'}
              placeholder="phone number"
              name="phone_number"
              value={userInfo?.phone_number}
              type="number"
              onChange={changeDataHandler}
            />
            <Button
              disabled={!userInfo?.first_name ? true : false}
              type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
}

// var options = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   };
//   console.log('heeeeeey', new Date().toLocaleString('en-US', options));
