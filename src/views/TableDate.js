import React from 'react';
import data from '../api/account_fields';
import {Button, Table, Thead, Tbody, Tr, Th, Td} from '@chakra-ui/react';
import './tabledatestyle.css';

export default function TableDate({cellRef, divSize}) {
  return (
    <div className="acc_table_container">
      <section style={{width: 'fit-content'}}>
        <Table className="acc_table">
          <Tbody>
            {data.user_item.map((item, index) => {
              return (
                <>
                  <Tr key={index}>
                    {data.user_field
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
        <Table className="acc_table">
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
            <Td>
              <Button>Demographics</Button>
            </Td>
            <Td>
              <Button>Freeze</Button>
            </Td>
            <Td>
              <Button>Cancel</Button>
            </Td>
          </Tr>
        </Table>
        <Table className="amn_table">
          <Thead style={{display: 'grid', gridTemplateColumns: '1fr 1fr .8fr'}}>
            <Th>Amenities</Th>
            <Th>Last Billing</Th>
            <Th>Current/Last Billing</Th>
          </Thead>
          <Tbody>
            <Tr
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                // gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                // width: '300px',
              }}>
              <Td
                data-td={cellRef.current?.clientHeight}
                style={{
                  display: 'block',
                  height: ' 100%',
                  overflowY: 'scroll',
                  width: 'fit-content',
                  maxHeight: divSize,
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
                      ref={cellRef}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '10px',
                        // display: 'grid',
                        // gridTemplateColumns:
                        //   'repeat(auto-fit, minmax(150px, 1fr))',
                      }}>
                      {data.billing_items.map((item, index) => {
                        return data.billing_fields
                          .filter(field => field.show)
                          .map(field => (
                            <Td key={index} data-th={field.description}>
                              {item[field.id]}
                            </Td>
                          ));
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
            </Tr>
          </Tbody>
        </Table>
        <Table>
          <Tr>
            <Td>
              <Button>Upgrade</Button>
            </Td>
            <Td>
              <Button>Buydown</Button>
            </Td>
            <Td>
              <Button>Get $</Button>
            </Td>
            <Td>
              <Button>EFT</Button>
            </Td>
          </Tr>
        </Table>
      </section>
      <aside
        style={{
          position: 'relative',
          padding: '2%',
          left: '16px',
          width: '30%',
          backgroundColor: '#8BC6EC',
          backgroundImage: 'linear-gradient(180deg, #8BC6EC 0%, #9599E2 100%)',
        }}>
        <ul>
          <li>Profile</li>
          <li>Account</li>
          <li>Commissions</li>
          <li>Notes</li>
          <li>Billing Research</li>
          <li>Check-In History</li>
          <li>Receipts</li>
          <li>Attachments</li>
          <li>Send Email</li>
        </ul>
      </aside>
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
