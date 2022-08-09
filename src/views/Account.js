import React from 'react';
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
  FormControl,
} from '@chakra-ui/react';

export default function Account() {
  return (
    <>
      <section>
        <Table size="sm">
          <Tbody>
            <Tr>
              <Th>Country</Th>
              <Td>United States</Td>
              <Th>Joined</Th>
              <Td>11/29/2021</Td>
              <Th>Balance</Th>
              <Td>0.00</Td>
              <Th>Annual Fee</Th>
              <Td>$49.00</Td>
            </Tr>
            <Tr>
              <Th>Address1</Th>
              <Td>123 EverStreet Trace</Td>
              <Th>Start</Th>
              <Td>11/29/2021</Td>
              <Th>Dues</Th>
              <Td>29.99</Td>
              <Th>Annual Billing</Th>
              <Td>12/29/2022</Td>
            </Tr>
            <Tr>
              <Th>Address2</Th>
              <Td>N/A</Td>
              <Th></Th>
              <Td></Td>
              <Th>Renewal</Th>
              <Td>0.00</Td>
              <Th>Term Ends</Th>
              <Td>N/A</Td>
            </Tr>
            <Tr>
              <Th>City, State, Zip</Th>
              <Td>Carmel, IN 46203</Td>
              <Th>Expires</Th>
              <Td>None</Td>
              <Th>Initiation</Th>
              <Td>0.00</Td>
              <Th>Training Total</Th>
              <Td>N/A</Td>
            </Tr>
            <Tr>
              <Th>Country</Th>
              <Td>United States</Td>
              <Th>Joined</Th>
              <Td>11/29/2021</Td>
              <Th>Balance</Th>
              <Td>0.00</Td>
              <Th>Annual Fee</Th>
              <Td>$49.00</Td>
            </Tr>
            <Tr>
              <Th>Home Phone</Th>
              <Td>N/a</Td>
              <Th>Access</Th>
              <Td>Multi Club</Td>
              <Th>First/Last</Th>
              <Td>59.98</Td>
              <Th>Sessions</Th>
              <Td>N/A</Td>
            </Tr>
            <Tr>
              <Th>Cell Phone</Th>
              <Td>3172504880</Td>
              <Th>Home Club</Th>
              <Td>WESTFIELD - 146TH ST</Td>
              <Th>6 MO. VIP</Th>
              <Td>None</Td>
              <Th>Tl Sessions</Th>
              <Td>N/A</Td>
            </Tr>
            <Tr>
              <Th>Emg Phone</Th>
              <Td>N/A</Td>
              <Th>E. Contact</Th>
              <Td></Td>
              <Th>Rate ID:</Th>
              <Td>1142843</Td>
              <Th>Phone BarCode</Th>
              <Td>Yes</Td>
            </Tr>
          </Tbody>
        </Table>
        <Stack direction={['column', 'row']} spacing="24px">
          <Button size="sm">Demographics</Button>
          <Button size="sm">Freeze</Button>
          <Button size="sm">Cancel</Button>
        </Stack>
        <Table size="sm">
          <colgroup span="3"></colgroup>
          <Thead>
            <Tr>
              <Th span="3">Amenities</Th>
              <Th>Last Billing</Th>
              <Th>Current/Next Billing</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                style={{
                  display: 'block',
                  height: '170px',
                  overflowY: 'scroll',
                }}
                rowSpan="6"
                scope="rowgroup">
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
                  </Tbody>
                </Table>
              </Td>
              <Td>
                <Table>
                  <Tbody>
                    <Tr>
                      <Th>Type</Th>
                      <Td>Mastercard</Td>
                    </Tr>
                    <Tr>
                      <Th>Next Biling</Th>
                      <Td>8/15/2022</Td>
                    </Tr>
                    <Tr>
                      <Th>Type</Th>
                      <Td>Mastercard</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Td>
              <Td>
                <Table>
                  <Tbody>
                    <Tr>
                      <Th>Date</Th>
                      <Td>7/14/2022</Td>
                      <Th>C/C#</Th>
                      <Td>XXXXXXXXXXXX9179</Td>
                    </Tr>
                    <Tr>
                      <Th>C/C#</Th>
                      <Td>XXXXXXXXXXXX9179</Td>
                      <Th>C/C Exp</Th>
                      <Td>6/30/2026</Td>
                    </Tr>
                    <Tr>
                      <Th>Billing Cycle</Th>
                      <Td>Monthly 15th</Td>
                      <Th>Billing Name</Th>
                      <Td>Bryce Hockman</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Stack direction={['column', 'row']} spacing="24px">
          <Button size="sm">Upgrade</Button>
          <Button size="sm">Buydown</Button>
          <Button size="sm">Get $</Button>
          <Button size="sm">EFT</Button>
        </Stack>
        <Table
          size={'sm'}
          style={{padding: '14px', textAlign: 'center'}}
          // className="fixed_header"
        >
          <Thead>
            <Tr>
              {[
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
                <Th key={i}>{tblitem}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <React.Fragment>
              <Tr onClick={() => {}}>
                <Td>
                  <Button>Service</Button>
                </Td>
                <Td>BARCODE NUMBER</Td>
                <Td>FITNESS TYPE</Td>
                <Td>CARMEL</Td>
                <Td>FIRST LAST</Td>
                <Td>IN</Td>
                <Td>123 Evergreen Terrace</Td>
                <Td
                // style={{
                //   color: status_table[item.status],
                // }}
                >
                  STATUS
                </Td>
                <td>10/30/2016</td>
              </Tr>
            </React.Fragment>
          </Tbody>
        </Table>
      </section>
      <aside>
        <li>blalha</li>
      </aside>
    </>
  );
}

{
  /* <Table size="sm">
                <Tr>
                  <Th>Service</Th>
                  <Th>Dues</Th>
                  <Th>Freeze</Th>
                </Tr>
                <Tr>
                  <Td>Fitness (0.00%)</Td>
                </Tr>
                <Tr>
                  <Td>2 Guest Priviledges</Td>
                </Tr>
                <Tr>
                  <Td>MultiState</Td>
                </Tr>
                <Tr>
                  <Td>Group Fitness</Td>
                </Tr>
                <Tr>
                  <Td>Pool Whirlpool Spa</Td>
                </Tr>
                <Tr>
                  <Td>Cycle Class</Td>
                </Tr>
                <Tr>
                  <Td>LA Fitness Access</Td>
                </Tr>
                <Tr>
                  <Td>Esporta Access</Td>
                </Tr>
              </Table> */
}
// <Tr>
//   <Th>Service</Th>
//   <Th>Dues</Th>
//   <Th>Freeze</Th>
// </Tr>
// <Tr></Tr>
{
  /* <Tr>
                  <Td>Fitness (0.00%)</Td>
                  <Td>2 Guest Priviledges</Td>
                  <Td>MultiState</Td>
                  <Td>Group Fitness</Td>
                  <Td>Pool Whirlpool Spa</Td>
                  <Td>Cycle Class</Td>
                  <Td>LA Fitness Access</Td>
                  <Td>Esporta Access</Td>
                </Tr> */
}

{
  /* <Tr>
              <Td>One</Td>
              <Td>Two</Td>
              <Td>Three</Td>
              <Th>Type</Th>
              <Td>Mastercard</Td>
              <Th>Date</Th>
              <Td>7/14/2022</Td>
              <Th>C/C#</Th>
              <Td>XXXXXXXXXXXX9179</Td>
              <Th>Active</Th>
              <Td>2</Td>
            </Tr>
            <Tr>
              <Th>Next Biling</Th>
              <Td>8/15/2022</Td>
              <Th>C/C#</Th>
              <Td>XXXXXXXXXXXX9179</Td>
              <Th>C/C Exp</Th>
              <Td>6/30/2026</Td>
            </Tr>
            <Tr>
              <Th>Type</Th>
              <Td>Mastercard</Td>
              <Th>Billing Cycle</Th>
              <Td>Monthly 15th</Td>
              <Th>Billing Name</Th>
              <Td>Bryce Hockman</Td>
            </Tr> */
}
{
  /* <Table size="sm">
          <Thead>
            <Tr>
              <Th span="3">Amenities</Th>
              <Th>Last Billing</Th>
              <Th>Current/Next Billing</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                style={{
                  display: 'block',
                  height: ' 100px',
                  overflowY: 'scroll',
                }}
                // S={2}
              >
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
                  </Tbody>
                </Table>
              </Td>
              <Td>
                <Table size="sm">
                  <Tbody>
                    <Tr>
                      <Th>Type</Th>
                      <Td>Mastercard</Td>
                      <Th>Date</Th>
                      <Td>7/14/2022</Td>
                      <Th>C/C#</Th>
                      <Td>XXXXXXXXXXXX9179</Td>
                      <Th>Active</Th>
                      <Td>2</Td>
                    </Tr>
                    <Tr>
                      <Th>Next Biling</Th>
                      <Td>8/15/2022</Td>
                      <Th>C/C#</Th>
                      <Td>XXXXXXXXXXXX9179</Td>
                      <Th>C/C Exp</Th>
                      <Td>6/30/2026</Td>
                    </Tr>
                    <Tr>
                      <Th>Type</Th>
                      <Td>Mastercard</Td>
                      <Th>Billing Cycle</Th>
                      <Td>Monthly 15th</Td>
                      <Th>Billing Name</Th>
                      <Td>Bryce Hockman</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Td>
            </Tr>

           
          </Tbody>
        </Table> */
}
