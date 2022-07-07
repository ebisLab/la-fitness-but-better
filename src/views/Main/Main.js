import React, {useEffect, useState} from 'react';
import {mock} from '../../api/mock';
import {time} from '../../utils/apputils.js';

import imgplaceholder from '../../assets/img/userplaceholder.png';
import {UNRECOGNIZED} from '../../store/constants';
import ProfileSection from './ProfileSection';
import TableSection from './TableSection';

export default function Main({
  bg = '#e6dfd1',
  color = 'gray.800',
  setPatronsCount,
  setTabIndex,
  setPatronsCount2,
}) {
  const [userBarcode, setUserBarcode] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [todaysList, setTodaysList] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [usersDatabase, setUsersDatabase] = useState([]);
  const [currentTime, setCurrentTime] = useState(time);
  const status_map = {
    UNRECOGNIZED: 'error',
    OK: 'success',
    QUESTION: 'info',
    DECLINED: 'warning',
  };
  const status_table = {UNRECOGNIZED: '', OK: '#0bbd0b', DECLINED: '#ED8936'};
  useEffect(() => {
    setUsersDatabase(mock);
  }, []);

  const addName = name => {
    let findUser = usersDatabase.some(
      item => item.first_name.toLowerCase() === name.toLowerCase(),
    );
    let filterUser = usersDatabase.filter(
      item => item.first_name.toLowerCase() === name.toLowerCase(),
    );
    setCurrentUser(filterUser);
    if (findUser) {
      const user = {...filterUser[0], time, timesheet: [Date.now()]};
      setTodaysList([user, ...todaysList]);

      //find the user from the database list and update their info
      const db = usersDatabase.map(obj => {
        if (obj.barcode_number === filterUser[0].barcode_number) {
          return {...obj, time};
        } else {
          return obj;
        }
      });
      setUsersDatabase(db);
    } else {
      const user = {
        id: todaysList.length + 1,
        first_name: name,
        status: UNRECOGNIZED,
        member_photo: imgplaceholder,
        time,
      };
      setTodaysList([user, ...todaysList]);
      setCurrentUser([user]);
    }
  };
  const changeHandler = e => {
    setUserBarcode(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    setUserInfo(userBarcode);
    addName(userBarcode);
    setCurrentTime(currentTime);
    e.target.reset();
  };
  const kidsModal = () => {
    console.log('heee');
  };

  const changeThisUser = (e, data) => {
    console.log('change this user🌹', data);
    e.preventDefault();
    const db = usersDatabase.map(obj => {
      console.log('🐝', obj.perks?.guest);
      if (obj.barcode_number === currentUser[0].barcode_number) {
        return {
          ...obj,
          test: 'example 🦄',
          perks: {...obj.perks, guest: [data, ...obj.perks.guest]},
        };
      } else {
        return obj;
      }
    });
    setUsersDatabase(db);
    const db2 = todaysList.map(obj => {
      console.log('lets see');
      if (obj.barcode_number === currentUser[0].barcode_number) {
        return {
          ...obj,
          test: 'example 🦄',
          perks: {...obj.perks, guest: [data, ...obj.perks.guest]},
        };
      } else {
        return obj;
      }
    });
    console.log('switched', db2);
    setTodaysList(db2);
    console.log('this curr user', currentUser);
    const db3 = currentUser.map(obj => {
      if (obj.barcode_number) {
        return {
          ...obj,
          test: 'example 🦄',
          perks: {...obj.perks, guest: [data, ...obj.perks.guest]},
        };
      } else {
        return obj;
      }
    });
    setCurrentUser(db3);
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

  const removeduplicates = () => {
    let duplicateRemover = new Set();
    let distinctAarr = todaysList.filter((obj, i) => {
      if (
        !duplicateRemover.has(obj.barcode_number) &&
        obj.status !== 'UNRECOGNIZED'
      ) {
        duplicateRemover.add(obj.barcode_number);
        return obj;
      }
      return false;
    });
    return distinctAarr.length;
  };

  useEffect(() => {
    setPatronsCount2(todaysList);
    setPatronsCount(removeduplicates());
  }, [addName]);

  const clickedRows = e => {
    setCurrentUser([e]);
  };

  console.log('userdata🌿', usersDatabase);

  return (
    <main className="grid-container">
      <ProfileSection
        currentUser={currentUser}
        changecurrentuser={changecurrentuser}
        bg={bg}
        color={color}
        setTabIndex={setTabIndex}
        kidsModal={kidsModal}
        status_map={status_map}
        todaysList={todaysList}
        setTodaysList={setTodaysList}
        submitHandler={submitHandler}
        setCurrentUser={setCurrentUser}
        changeThisUser={changeThisUser}
        checkInMemberGuest={checkInMemberGuest}
        userInfo={userInfo}
      />

      <TableSection
        clickedRows={clickedRows}
        status_table={status_table}
        currentUser={currentUser}
        changecurrentuser={changecurrentuser}
        bg={bg}
        color={color}
        setTabIndex={setTabIndex}
        changeHandler={changeHandler}
        kidsModal={kidsModal}
        status_map={status_map}
        todaysList={todaysList}
        setTodaysList={setTodaysList}
        submitHandler={submitHandler}
        usersDatabase={usersDatabase}
        setCurrentUser={setCurrentUser}
        setUsersDatabase={setUsersDatabase}
        changeThisUser={changeThisUser}
        checkInMemberGuest={checkInMemberGuest}
        userInfo={userInfo}
      />
    </main>
  );
}
