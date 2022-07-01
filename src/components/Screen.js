import React from 'react';
import PictureScreen from './PictureScreen';
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

export default function Screen({
  imgAfterUpdate,
  setImgAfterUpdate,
  item,
  changecurrentuser,
  setDontRefresh,
  currentImg,
  setCurrentImg,
  dontRefresh,
}) {
  if (item.member_photo === '') {
    return <div>Screen</div>;
  } else {
    return <PictureScreen item={item} />;
  }
}
