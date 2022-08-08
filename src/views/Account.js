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
          <Tbody>
            <tr>
              <td>Amenities</td>
              <td>Last Billing</td>
              <td>Current/Next Billing</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <table>
                  <tbody>
                    <tr>
                      <td>stuff here</td>
                      <td>another stuff</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Paragraph stuff</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Paragrapht hree stuff</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>bro haha</td>
            </tr>

            {/* <Tr>
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
            </Tr> */}
          </Tbody>
        </Table>
        <Stack direction={['column', 'row']} spacing="24px">
          <Button size="sm">Upgrade</Button>
          <Button size="sm">Buydown</Button>
          <Button size="sm">Get $</Button>
          <Button size="sm">EFT</Button>
        </Stack>
        <Table
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
