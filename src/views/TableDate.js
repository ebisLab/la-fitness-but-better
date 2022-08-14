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
            {data.fields
              .filter(item => item.show)
              .map(item => (
                <Th>{item.description}</Th>
              ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.items.map((item, index) => {
            return (
              <Tr key={index}>
                {data.fields
                  .filter(field => field.show)
                  .map(field => (
                    <Td data-th={field.description}>{item[field.id]}</Td>
                  ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}
