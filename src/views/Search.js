import React from 'react';
import {UNRECOGNIZED, OK} from '@store/constants';
import imgplaceholder from '../assets/img/userplaceholder.png';

import {Input, Button, Stack, Select, Tag} from '@chakra-ui/react';
import {mock} from '../api/mock';

export default function Search() {
  const [input, setInput] = React.useState('');
  const [result, setResult] = React.useState([]);
  const [selectedDropDown, setSelectedDropDown] = React.useState('Name');
  const status_table = {UNRECOGNIZED: '', OK: '#0bbd0b', DECLINED: '#ED8936'};

  const changeHandler = e => {
    setInput(e.target.value);
  };

  function handleSelectChange(event) {
    setSelectedDropDown(event.target.value);
  }

  const filterHandler = e => {
    e.preventDefault();
    let newsearch;
    setResult(() => {
      return (newsearch = mock.filter(item => {
        const inputLower = input.toLowerCase();

        switch (selectedDropDown) {
          case 'Name':
            const firstName = item.first_name.toLowerCase();
            const lastName = item.last_name.toLowerCase();
            return [
              firstName,
              lastName,
              `${firstName} ${lastName}`,
              `${firstName},${lastName}`,
              `${lastName},${firstName}`,
              `${firstName}, ${lastName}`,
              `${lastName}, ${firstName}`,
            ].includes(inputLower);
          case 'Barcode':
            return item.barcode_number.toLowerCase() === inputLower;
        }
      }));
    });
    // setInput('');
  };

  return (
    <section>
      <form onSubmit={filterHandler}>
        <Stack direction={['column', 'row']} spacing="24px">
          <Select
            width="30%"
            value={selectedDropDown}
            onChange={handleSelectChange}>
            <option value="Name">Name</option>
            <option value="Email">Email</option>
            <option value="Barcode">Barcode</option>
          </Select>
          <Input
            style={{background: '#FEFCBF'}}
            placeholder={`Search ${selectedDropDown}`}
            value={input}
            onChange={changeHandler}
          />
          <Button type="submit" width={'30%'}>
            Search
          </Button>
        </Stack>
      </form>
      <div style={{paddingTop: '3%'}}>
        <table
          style={{padding: '14px', textAlign: 'center'}}
          // className="fixed_header"
        >
          <thead>
            <tr>
              {[
                'Check In',
                'Service',
                'Barcode',
                'Type',
                'Home Club',
                'Name',
                'State',
                'Address',
                'Status',
                'Contract Exp',
              ].map((tblitem, i) => (
                <th key={i}>{tblitem}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result?.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <tr onClick={() => {}}>
                    <td>
                      <Button>In</Button>
                    </td>
                    <td>
                      <Button>Service</Button>
                    </td>
                    <td>{item.barcode_number}</td>
                    <td>{item.fitness_type}</td>
                    <td>CARMEL</td>
                    <td>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>IN</td>
                    <td>123 Evergreen Terrace</td>
                    <td
                      style={{
                        color: status_table[item.status],
                      }}>
                      {item.status}
                    </td>
                    <td>10/30/2016</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
