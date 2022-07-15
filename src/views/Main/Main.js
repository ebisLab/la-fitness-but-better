import React, {useContext, useEffect, useState} from 'react';
import {mock} from '../../api/mock';
import {time} from '../../utils/apputils.js';
import CardContext from '../../store/CardContext';

import imgplaceholder from '../../assets/img/userplaceholder.png';
import {UNRECOGNIZED} from '../../store/constants';
import ProfileSection from './ProfileSection';
import TableSection from './TableSection';

export default function Main({
  bg = '#e6dfd1',
  color = 'gray.800',
  setOccupantsCount,
  setTabIndex,
}) {
  const {
    usersDatabase,
    setUsersDatabase,
    todaysList,
    setTodaysList,
    userInfo,
    addName,
    currentUser,
    setCurrentUser,
  } = useContext(CardContext);
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

  // const addName = name => {
  //   console.log('ADDEEEEEEEDDDDDDD');
  //   let findUser = usersDatabase.some(
  //     item => item.first_name.toLowerCase() === name.toLowerCase(),
  //   );
  //   console.log('does this user exist in the database', findUser);
  //   let filterUser = usersDatabase.filter(
  //     item => item.first_name.toLowerCase() === name.toLowerCase(),
  //   );
  //   console.log('if so find them', findUser);

  //   setCurrentUser(filterUser);
  //   if (findUser) {
  //     const user = {...filterUser[0], time, timesheet: [Date.now()]};
  //     setTodaysList([user, ...todaysList]);

  //     //find the user from the database list and update their info
  //     const db = usersDatabase.map(obj => {
  //       if (obj.barcode_number === filterUser[0].barcode_number) {
  //         return {...obj, time};
  //       } else {
  //         return obj;
  //       }
  //     });
  //     setUsersDatabase(db);
  //   } else {
  //     const user = {
  //       id: todaysList.length + 1,
  //       first_name: name,
  //       status: UNRECOGNIZED,
  //       member_photo: imgplaceholder,
  //       time,
  //     };
  //     setTodaysList([user, ...todaysList]);
  //     setCurrentUser([user]);
  //   }
  // };

  const kidsModal = () => {
    console.log('heee');
  };

  const changeThisUser = (e, data) => {
    console.log('change this user🌹', data);
    e.preventDefault();
    const db = usersDatabase.map(obj => {
      console.log('🐝', obj.perks?.guest);
      console.log('barcode obj', obj.barcode_number);
      console.log('barcode currentuser', currentUser);
      if (obj.barcode_number === currentUser[0]?.barcode_number) {
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
    //now known as addInMemberGuest
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

  // const changecurrentuser = img => {
  //   const db = usersDatabase.map(obj => {
  //     if (obj.barcode_number === currentUser[0].barcode_number) {
  //       return {...obj, member_photo: img};
  //     } else {
  //       return obj;
  //     }
  //   });

  //   console.log('changing user database ', db);

  //   setUsersDatabase(db);
  //   const db2 = todaysList.map(obj => {
  //     if (obj.barcode_number === currentUser[0].barcode_number) {
  //       return {...obj, member_photo: img};
  //     } else {
  //       return obj;
  //     }
  //   });
  //   console.log('changing todays list', db2);
  //   setTodaysList(db2);

  //   const db3 = currentUser.map(obj => {
  //     if (obj.barcode_number) {
  //       return {...obj, member_photo: img};
  //     } else {
  //       return obj;
  //     }
  //   });
  //   console.log('setting current uuser');
  //   setCurrentUser(db3);
  // };

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
    setOccupantsCount(removeduplicates());
  }, [addName]);

  console.log('userdata🌿', usersDatabase);

  return (
    <main className="grid-container">
      <ProfileSection
        bg={bg}
        color={color}
        setTabIndex={setTabIndex}
        kidsModal={kidsModal}
        status_map={status_map}
        changeThisUser={changeThisUser}
        checkInMemberGuest={checkInMemberGuest}
        userInfo={userInfo}
      />

      <TableSection
        status_table={status_table}
        bg={bg}
        color={color}
        setTabIndex={setTabIndex}
        status_map={status_map}
        changeThisUser={changeThisUser}
        checkInMemberGuest={checkInMemberGuest}
        userInfo={userInfo}
      />
    </main>
  );
}
