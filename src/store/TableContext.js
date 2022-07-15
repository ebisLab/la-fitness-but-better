import React, {createContext, useState, useEffect, useContext} from 'react';
import CardContext from './CardContext';

const TableContext = createContext();

export function TableProvider({children}) {
  const {
    usersDatabase,
    setUsersDatabase,
    onBarcodeChange,
    userBarcode,
    submitBarcodeHandler,
    currentUser,
    setCurrentUser,
    todaysList,
    setTodaysList,
  } = useContext(CardContext);

  const clickedRows = e => {
    setCurrentUser([e]);
  };

  const checkInMemberGuest = data => {
    console.log('data', data);
    const db = usersDatabase.map(obj => {
      if (obj.barcode_number === currentUser[0].barcode_number) {
        return {
          ...obj,
          test: 'example 🌸',
        };
      } else {
        return obj;
      }
    });
    console.log('database changed', db);
    setUsersDatabase(db);

    //highly considering creating a 4th state independent of this todayslist state to count for checked in people and guests

    const db2 = todaysList.map(obj => {
      if (obj.barcode_number === currentUser[0].barcode_number) {
        return {
          ...obj,
          test: 'example 🌸',
        };
      } else {
        return obj;
      }
    });
    console.log('seeing if this is outputting', db2);
    // setTodaysList(db2);
  };

  return (
    <TableContext.Provider value={{clickedRows, checkInMemberGuest}}>
      {children}
    </TableContext.Provider>
  );
}

export default TableContext;
