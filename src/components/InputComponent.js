import React from 'react';
import {
  Alert,
  AlertIcon,
  Input,
  Button,
  ButtonGroup,
  Box,
} from '@chakra-ui/react';

export default function InputComponent({
  userBarcode,
  submitBarcodeHandler,
  onBarcodeChange,
  kidsModal,
}) {
  return (
    <form onSubmit={submitBarcodeHandler}>
      <ButtonGroup>
        <Input
          id="input-barcode"
          data-testid="input-barcode"
          autoFocus
          style={{background: '#FEFCBF'}}
          name="barcode"
          type="text"
          value={userBarcode}
          onChange={onBarcodeChange}
        />
        <Button type="submit">✔</Button>
        <Button
          type="submit"
          onClick={e => {
            e.preventDefault();
            kidsModal();
          }}>
          🧸
        </Button>
      </ButtonGroup>
    </form>
  );
}
