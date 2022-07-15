import React, {useContext} from 'react';
import {Input, Button, InputGroup} from '@chakra-ui/react';
import CardContext from '../../../store/CardContext';
import FooterContext from '../../../store/FooterContext';

export default function WalkForm() {
  const {setOccupantsList} = useContext(FooterContext);
  const {todaysList, setTodaysList} = useContext(CardContext);
  const [input, setInput] = React.useState({
    first_name: '',
    last_name: '',
    barcode_number: 0,
    phone_number: '',
    time: '',
    status: 'OK',
    fitness_type: 'guest',
  });
  const time = (world, conversion) => {
    return new Date().toLocaleString(world, conversion);
  };
  const changeHandler = e => {
    const value = e.target.value;
    setInput({
      ...input,
      id: todaysList.length + 1,
      member_photo: 'https://picsum.photos/id/222/200',
      barcode_number: `555${todaysList.length + 1}`,
      time: time('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }),
      status: 'OK',
      expiration: time(),
      fitness_type: 'guest',
      [e.target.name]: value,
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    setTodaysList([input, ...todaysList]);
    setOccupantsList(prevstate => [input, ...prevstate]);
  };

  console.log('input', input);

  return (
    <form onSubmit={submitHandler}>
      <InputGroup>
        <Input
          placeholder="first name"
          name="first_name"
          value={input.first_name}
          type="text"
          onChange={changeHandler}
        />
        <Input
          placeholder="last name"
          name="last_name"
          value={input.last_name}
          type="text"
          onChange={changeHandler}
        />
        <Input
          placeholder="phone number"
          name="phone_number"
          value={input.phone_number}
          type="number"
          onChange={changeHandler}
        />
      </InputGroup>
      <Button type="submit">Submit</Button>
    </form>
  );
}
