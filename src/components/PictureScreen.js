import React from 'react';
import {
  OK,
  EXPIRED,
  EXPIRING,
  DECLINED,
  FROZEN,
  UNRECOGNIZED,
  MEMBERSHIP_REVOCKED,
} from '../store/constants';
import {
  Input,
  IconButton,
  Button,
  ButtonGroup,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  FormControl,
  Center,
  Grid,
} from '@chakra-ui/react';

export default function PictureScreen({item, imgAfterUpdate}) {
  console.log('item inside pict', item);
  return (
    <Box
      className="card-profile-picture"
      bg={item?.status === UNRECOGNIZED ? '#FEB2B2' : '#9AE6B4'}
      h="40vh">
      <div id="container">
        <div>
          {/* {item?.member_photo && (
            <img
              width="200px"
              height="200px"
              src={'https://picsum.photos/id/1000/200/200'} //
              alt="yourimage"
            />
          )} */}
          {item ? (
            <img
              width="200px"
              height="200px"
              alt={item.first_name}
              src="https://picsum.photos/id/1000/200/200"
            />
          ) : (
            ''
          )}
        </div>
        <Button
          className={`mx-auto`}
          //   onClick={() => {
          //     setClick(true);
          //   }}
        >
          <b>Retake</b>
        </Button>
      </div>
    </Box>
  );
}
