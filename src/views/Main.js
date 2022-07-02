import React, {useEffect, useState} from 'react';
import {mock} from '../api/mock';
import imgplaceholder from '../assets/img/userplaceholder.png';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
// import {solid, regular, brands} from '@fortawesome/fontawesome-svg-core';
import {UNRECOGNIZED, OK} from '../store/constants';
import {
  Alert,
  AlertIcon,
  Input,
  Button,
  ButtonGroup,
  Box,
  Center,
  Grid,
  Tag,
} from '@chakra-ui/react';
import FamilyPlanDrop from '../components/FamilyPlanDrop';
import GuestList from '../components/modals/MemberGuest/GuestList';
import Camera from '../components/Camera';
import WalkInGuest from '../components/modals/WalkInGuest/WalkInGuest';
// import {faTwitter, faFontAwesome} from '@fortawesome/free-brands-svg-icons';

library.add(faCamera);

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
  const [currentImg, setCurrentImg] = useState(null);
  const [usersDatabase, setUsersDatabase] = useState([]);
  const time = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const [currentTime, setCurrentTime] = useState(time);
  const [dontRefresh, setDontRefresh] = useState(false);
  const [imgAfterUpdate, setImgAfterUpdate] = useState('');
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
    setImgAfterUpdate('');
    setUserInfo(userBarcode);
    addName(userBarcode);
    setCurrentTime(currentTime);
    e.target.reset();
  };
  const kidsModal = () => {
    console.log('heee');
  };

  const changeThisUser = (e, data) => {
    console.log('change this user', data);
    e.preventDefault();
    const db = usersDatabase.map(obj => {
      console.log('🐝', obj.perks?.guest);
      if (obj.barcode_number === currentUser[0].barcode_number) {
        return {
          ...obj,
          test: 'example 🦄',
          perks: {...obj.perks, guest: [data, ...obj.perks.guest]},
          //perks: {guest: [...obj.perks?.guest, data], ...obj},
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
          //perks: {guest: [...obj.perks?.guest, data], ...obj},
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
          //perks: {guest: [...obj.perks?.guest, data], ...obj},
        };
      } else {
        return obj;
      }
    });
    setCurrentUser(db3);
  };

  const changecurrentuser = img => {
    setCurrentImg(img);

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

  console.log('userdata💃', usersDatabase);

  return (
    <main className="grid-container">
      <section style={{background: '#ebf0f7'}} className="first-column">
        <Box
          className="sidebar"
          width="100%"
          bg={bg}
          color={color}
          rounded="lg"
          p={5}>
          <form onSubmit={submitHandler}>
            <ButtonGroup>
              <Input
                style={{background: '#FEFCBF'}}
                name="barcode"
                type="text"
                onChange={changeHandler}
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
          {currentUser.length ? (
            currentUser.map((item, i) => (
              <div key={Date.now()}>
                <div className="member-card">
                  <div className="member-info">
                    <Alert status={status_map[item.status]}>
                      <AlertIcon />
                      {item.status}
                    </Alert>
                    <div className="status">
                      <table>
                        <tbody>
                          <tr>
                            <th>Barcode</th>
                            <td>{item.barcode_number}</td>
                          </tr>
                          <tr>
                            <th>Name</th>
                            <td>
                              {item.first_name} {item.last_name}
                            </td>
                          </tr>
                          <tr>
                            <th>Expiration</th>
                            <td>{item.expiration}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="member-service">
                        <Button onClick={() => setTabIndex(2)}>service</Button>
                        {/* {item.perks ? (
                          <Sample
                            usersDatabase={usersDatabase}
                            currentUser={currentUser}
                            setUsersDatabase={setUsersDatabase}
                            changeThisUser={changeThisUser}
                          />
                        ) : (
                          ''
                        )} */}
                        <Button
                          colorScheme="teal"
                          variant="solid"
                          rounded="200"
                          size="sm"
                          fontSize="sm">
                          Get $
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="member-profile-n-fam">
                    <div className="member-privileges">
                      <div>🎾</div>
                      <div>G(1)</div>
                      {item.perks?.guest ? (
                        <GuestList
                          item={item}
                          todaysList={todaysList}
                          usersDatabase={usersDatabase}
                          currentUser={currentUser}
                          setUsersDatabase={setUsersDatabase}
                          changeThisUser={changeThisUser}
                        />
                      ) : (
                        ''
                      )}
                    </div>

                    <Camera
                      imgAfterUpdate={imgAfterUpdate}
                      setImgAfterUpdate={setImgAfterUpdate}
                      currentImg={currentImg}
                      setCurrentImg={setCurrentImg}
                      dontRefresh={dontRefresh}
                      setDontRefresh={setDontRefresh}
                      item={item}
                      currentUser={currentUser}
                      changecurrentuser={changecurrentuser}
                    />

                    <div className="family-plan">
                      <FamilyPlanDrop />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div key={Date.now()}>
              <div className="member-card">
                <div className="member-info">
                  <Alert status="info">
                    <AlertIcon />
                    NO USERS
                  </Alert>
                  <div className="status">
                    <table>
                      <tbody>
                        <tr>
                          <th>{''}</th>
                          <td>{userInfo}</td>
                        </tr>
                        <tr>
                          <th></th>
                          <td></td>
                        </tr>
                        <tr>
                          <th></th>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <button>service</button>
                      <button>Get $</button>
                    </div>
                  </div>
                </div>
                <div className="member-privileges">
                  <div>🎾</div>
                  <div>G(1)</div>
                  <button>Guest Waiver</button>
                </div>
                <div className="member-profile-n-fam">
                  <Box className="card-profile-picture" bg="#BEE3F8" h="32vh">
                    <Center>
                      <Grid>
                        <div>
                          <img
                            src={imgplaceholder}
                            alt="img placeholder"
                            width="200px"
                            height="200px"
                          />
                        </div>
                      </Grid>
                    </Center>
                  </Box>

                  <div>
                    {/* members under plan
        {userInfo} */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Box>
      </section>
      <section
        style={{background: '#ebf0f7', padding: '2% 2% 0 2%'}}
        className="second-column">
        <WalkInGuest todaysList={todaysList} setTodaysList={setTodaysList} />
        <div className="record-container">
          <div>
            Last Refresh: {currentTime}
            <Button colorScheme="green">Refresh</Button>
          </div>
          <div>Check In History</div>
          <table className="fixed_header">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Service</th>
                <th>Barcode</th>
                <th>Type</th>
                <th>Name</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {todaysList &&
                todaysList.map((item, i) => {
                  return (
                    <tr
                      key={i}
                      onClick={() => clickedRows(item)}
                      className={
                        item.status === UNRECOGNIZED
                          ? 'checked-in-user-table-status'
                          : ''
                      }>
                      <td>
                        <div
                          style={{
                            width: '50px',
                            height: '50px',
                            background:
                              item.status === UNRECOGNIZED ? 'red' : 'blue',
                          }}>
                          <img
                            width="50px"
                            height="50px"
                            src={
                              item.status === UNRECOGNIZED ||
                              item.member_photo === ''
                                ? imgplaceholder
                                : item.member_photo
                            }
                            alt={item.barcode_number}
                          />
                        </div>
                      </td>
                      <td>
                        {item.status === UNRECOGNIZED ? (
                          ''
                        ) : (
                          <Button>Service</Button>
                        )}
                      </td>
                      <td>{item.barcode_number}</td>
                      <td>
                        {item.fitness_type === 'guest' ? (
                          <Tag size="sm" variant="solid" colorScheme="green">
                            {item.fitness_type}
                          </Tag>
                        ) : (
                          item.fitness_type
                        )}

                        {/* {item.perks ? item.test : ''} */}
                      </td>
                      <td>
                        {item.first_name} {item.last_name}
                      </td>
                      <td
                        className={item.status === OK ? 'status_cell' : ''}
                        style={{color: status_table[item.status]}}>
                        {item.status}
                      </td>
                      <td>{item.time}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
