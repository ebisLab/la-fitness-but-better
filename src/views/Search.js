import React from 'react';
import {UNRECOGNIZED, OK} from '@store/constants';
import imgplaceholder from '../assets/img/userplaceholder.png';

import {Input, Button, Stack, Select, Tag} from '@chakra-ui/react';
import {mock} from '../api/mock';

export default function Search() {
  const [input, setInput] = React.useState('');
  const [result, setResult] = React.useState([]);
  const [selectedDropDown, setSelectedDropDown] = React.useState('Name');

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
    setInput('');
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
            placeholder={`Search ${selectedDropDown}`}
            value={input}
            onChange={changeHandler}
          />
          <Button type="submit">Search</Button>
        </Stack>
      </form>
      <h2>search result</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Service</th>
              <th>Barcode</th>
              <th>Type</th>
              <th>Name</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {result?.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <tr
                    onClick={() => {}}
                    className={
                      item.status === UNRECOGNIZED
                        ? 'checked-in-user-table-status'
                        : ''
                    }>
                    <td style={{width: '80px'}}>
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          background:
                            item.status === UNRECOGNIZED ? 'red' : 'blue',
                        }}>
                        <img
                          width="50px"
                          height="50px"
                          src={
                            item.status === UNRECOGNIZED ||
                            item.member_photo === ''
                              ? imgplaceholder
                              : item.member_photo
                          }
                          alt={item.barcode_number}
                        />
                      </div>
                    </td>
                    <td style={{width: '125px'}}>
                      {item.status === UNRECOGNIZED ? (
                        ''
                      ) : (
                        <Button>Service</Button>
                      )}
                    </td>
                    <td style={{width: '170px'}}>{item.barcode_number}</td>
                    <td style={{width: '150px'}}>
                      {item.fitness_type === 'guest' ? (
                        <Tag size="sm" variant="solid" colorScheme="green">
                          {item.fitness_type}
                        </Tag>
                      ) : (
                        item.fitness_type
                      )}
                    </td>
                    <td style={{width: '140px'}}>
                      {item.first_name} {item.last_name}
                    </td>
                    <td
                      className={item.status === OK ? 'status_cell' : ''}
                      style={{
                        // color: status_table[item.status],
                        width: '220px',
                      }}>
                      {item.status}
                    </td>
                    <td>{item.time}</td>
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
