import {createContext, useState, useEffect} from 'react';
import {UNRECOGNIZED} from './constants';
import imgplaceholder from '../assets/img/userplaceholder.png';

import {mock} from '../api/mock.js';
import {time} from '../utils/apputils.js';

const CardContext = createContext();

export function CardProvider({children}) {
  const [usersDatabase, setUsersDatabase] = useState([]);
  const [userBarcode, setUserBarcode] = useState('');
  const [userInfo, setUserInfo] = useState(''); //is this needed
  const [currentUser, setCurrentUser] = useState([]);
  const [todaysList, setTodaysList] = useState([]);
  const [currentTime, setCurrentTime] = useState(time);
  const [timeArr, setTimeArr] = useState([]);
  const [dataToAdd, setDataToAdd] = useState(null);
  const [patronList, setPatronList] = useState([]);

  const color = bg => `color: white; background-color: ${bg}`;
  const Style = {
    normal: color('gray'),
    warning: color('red'),
    success: color('green'),
  };

  useEffect(() => {
    setUsersDatabase(mock);
  }, []);

  useEffect(() => {
    setTimeArr(data => [time, ...data]);
  }, []);

  //user inputs value
  const onBarcodeChange = e => {
    setUserBarcode(e.target.value);
  };

  const addName = data => {
    let isUserFound = usersDatabase.some(
      item => item.first_name.toLowerCase() === data.toLowerCase(), //change item.first_name once barcodes are established
    );
    let searchForUser = usersDatabase.filter(
      item => item.first_name.toLowerCase() === data.toLowerCase(), //change item.first_name once barcodes are established
    );

    setCurrentUser(searchForUser); //might move this to the isuserfound condition
    if (isUserFound) {
      const user = {
        ...searchForUser[0],
        time,
        success: '✅',
        timesheet: timeArr,
      };
      //add to totoday's list
      setTodaysList(prevstate => [user, ...prevstate]);
      setPatronList(prevstate => [user, ...prevstate]);
      setTimeArr(prevstate => [time, ...prevstate]);

      //we want to update the database with the time the member checked in
      setUsersDatabase(datalist =>
        datalist.map(obj => {
          if (obj.barcode_number === searchForUser[0].barcode_number) {
            return {...obj, time, success: '✅', timesheet: timeArr};
          } else {
            return obj;
          }
        }),
      );
    } else {
      const user = {
        id: todaysList.length + 1,
        first_name: data,
        status: UNRECOGNIZED,
        member_photo: imgplaceholder,
        time,
      };
      setTodaysList(prevstate => [user, ...prevstate]);
      setCurrentUser([user]);
    }
  };

  //on submit value is searched in the database
  const submitBarcodeHandler = e => {
    e.preventDefault();
    setUserInfo(userBarcode);
    addName(userBarcode);
    setCurrentTime(currentTime);
    e.target.reset();
  };

  const changecurrentuser = img => {
    const db = usersDatabase.map(obj => {
      if (obj.barcode_number === currentUser[0].barcode_number) {
        return {...obj, member_photo: img};
      } else {
        return obj;
      }
    });

    console.log('changing user database ', db);

    setUsersDatabase(db);
    const db2 = todaysList.map(obj => {
      if (obj.barcode_number === currentUser[0].barcode_number) {
        return {...obj, member_photo: img};
      } else {
        return obj;
      }
    });
    console.log('changing todays list', db2);
    setTodaysList(db2);

    const db3 = currentUser.map(obj => {
      if (obj.barcode_number) {
        return {...obj, member_photo: img};
      } else {
        return obj;
      }
    });
    console.log('setting current uuser');
    setCurrentUser(db3);
  };

  const addInMemberGuest = data => {
    console.log('data im supposed to add to table', data);
    // const db = usersDatabase.map(obj => {
    //   if (obj.barcode_number === currentUser[0].barcode_number) {
    //     return {
    //       ...obj,
    //       test: 'example 🌸',
    //     };
    //   } else {
    //     return obj;
    //   }
    // });
    // console.log('database changed', db);
    // setUsersDatabase(db);

    // //highly considering creating a 4th state independent of this todayslist state to count for checked in people and guests

    // const db2 = todaysList.map(obj => {
    //   if (obj.barcode_number === currentUser[0].barcode_number) {
    //     return {
    //       ...obj,
    //       test: 'example 🌸',
    //     };
    //   } else {
    //     return obj;
    //   }
    // });
    // console.log('seeing if this is outputting', db2);
    // // setTodaysList(db2);
  };
  const log = (str, style = Style.success) =>
    console.log(`%c${str}`, style, usersDatabase);

  console.log('toays tab', todaysList);
  console.log('patronlist 🌸', patronList);
  log('normal logs');

  return (
    <CardContext.Provider
      value={{
        usersDatabase,
        userBarcode,
        onBarcodeChange,
        submitBarcodeHandler,
        userInfo,
        currentUser,
        setCurrentUser,
        todaysList,
        setTodaysList,
        currentTime,
        changecurrentuser,
        addInMemberGuest,
        dataToAdd,
        setDataToAdd,
        patronList,
        setPatronList,
      }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
