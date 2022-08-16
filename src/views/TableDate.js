import React from 'react';
import data from '../api/account_fields';
import {
  Alert,
  AlertIcon,
  Input,
  IconButton,
  Button,
  ButtonGroup,
  Box,
  Center,
  Grid,
  Tabs,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import './tabledatestyle.css';

export default function TableDate() {
  return (
    <div className="acc_table_container">
      <Table className="acc_table">
        <Thead>
          <Tr>
            <Th>burh</Th>
          </Tr>
          {/* <Tr>
            {data.fields
              .filter(item => item.show)
              .map(item => (
                <Th>{item.description}</Th>
              ))}
          </Tr> */}
        </Thead>
        <Tbody>
          {data.items.map((item, index) => {
            return (
              <>
                <Tr key={index}>
                  {data.fields
                    .filter(field => field.show)
                    .map(field => (
                      <Td data-th={field.description}>{item[field.id]}</Td>
                    ))}
                </Tr>
              </>
            );
          })}
        </Tbody>
      </Table>

      <Table>
        <Tr>
          <Td>fooo</Td>
          <Td>fooo</Td>
          <Td>fooo</Td>
        </Tr>
      </Table>

      <Table className="amn_table">
        {/* <Thead>
          <Th>jesus</Th>
          <Th>take</Th>
          <Th>the</Th>
        </Thead> */}
        <Tbody
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            // gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            // width: '300px',
          }}>
          <Td
            style={{
              display: 'block',
              height: ' 100%',
              overflowY: 'scroll',
              width: 'fit-content',
              maxHeight: '50vh',
              margin: '16px 0',
            }}>
            <Table size="sm">
              <Tbody>
                <Tr>
                  <Th>Service</Th>
                  <Th>Dues</Th>
                  <Th>Freeze</Th>
                </Tr>
                <Tr>
                  <Td>Fitness (0.00%)</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>2 Guest Priviledges</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>MultiState</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>Group Fitness</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>Pool Whirlpool Spa</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>Cycle Class</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>LA Fitness Access</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>Esporta Access</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>Esporta Access</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>Esporta Access</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>Esporta Access</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>Esporta Access</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
                <Tr>
                  <Td>Esporta Access</Td>
                  <Td>0.00</Td>
                  <Td>0.00</Td>
                </Tr>
              </Tbody>
            </Table>
          </Td>
          <Td className="grid-container grid-container--fit">
            <Table size="sm" className="amn_table_billing">
              <Tbody>
                <Tr
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                  }}>
                  {data.items.map((item, index) => {
                    return (
                      //   <React>
                      //     <Tr key={index}>
                      data.fields
                        .filter(field => field.show)
                        .map(field => (
                          <Td
                            // style={{whiteSpace: 'nowrap'}}
                            key={index}
                            data-th={field.description}>
                            {item[field.id]}
                          </Td>
                        ))
                      //     </Tr>
                      //   </React>
                    );
                  })}
                </Tr>
              </Tbody>
              {/* <Tbody>
                <Tr> */}
              {/* <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>

              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td>
              <Td className="grid-element">wheel</Td> */}
              {/* {data.items.map((item, index) => {
            return (
              <>
                <Tr key={index}>
                  {data.fields
                    .filter(field => field.show)
                    .map(field => (
                      <Td data-th={field.description}>{item[field.id]}</Td>
                    ))}
                </Tr>
              </>
            );
          })} */}
              {/* </Tr>
              </Tbody> */}
            </Table>
          </Td>
        </Tbody>
      </Table>
    </div>
  );
}

{
  /* <Td
                    className="grid-container grid-container--fit"
                    style={{width: '120%'}}>
                    <Table>
                      <Tbody>
                        <Tr>
                          {data.fields
                            .filter(field => field.show)
                            .map(field => (
                              <Td
                                className="grid-element"
                                data-th={field.description}
                                style={{
                                  paddingBottom: 'unset',
                                  borderBottom: 'none',
                                  lineHeight: 'unset',
                                }}>
                                {item[field.id]}
                              </Td>
                            ))}
                        </Tr>
                      </Tbody>
                    </Table>
                  </Td> */
}

{
  /* <Table size={'sm'} className="amn_table">
<Thead>
  <Tr>
    {data.service_fields
      .filter(item => item.show)
      .map(item => (
        <Th>{item.description}</Th>
      ))}
  </Tr>
</Thead>
<Tbody>
  <Tr>
    <Td>food t</Td>
  </Tr>
</Tbody>
</Table> */
}
