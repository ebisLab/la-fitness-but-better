import React from 'react';
import {
  Alert,
  AlertIcon,
  Input,
  Button,
  ButtonGroup,
  Box,
} from '@chakra-ui/react';
import FamilyPlanDrop from '../../components/FamilyPlanDrop';
import GuestList from '../../components/modals/MemberGuest/GuestList';
import Camera from '../../components/Camera';
import DefaultCard from './DefaultCard';

export default function ProfileSection({
  bg,
  color,
  setTabIndex,
  changeHandler,
  kidsModal,
  currentImg,
  currentUser,
  setCurrentImg,
  status_map,
  todaysList,
  setTodaysList,
  submitHandler,
  usersDatabase,
  setCurrentUser,
  setUsersDatabase,
  changeThisUser,
  checkInMemberGuest,
  setDontRefresh, //
  changecurrentuser,
  userInfo,
  imgAfterUpdate, //
  setImgAfterUpdate,
  dontRefresh, //
}) {
  return (
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
              autoFocus
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
            <div key={i}>
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
                        setTodaysList={setTodaysList}
                        usersDatabase={usersDatabase}
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        setUsersDatabase={setUsersDatabase}
                        changeThisUser={changeThisUser}
                        checkInMemberGuest={checkInMemberGuest}
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
          <DefaultCard userInfo={userInfo} />
        )}
      </Box>
    </section>
  );
}
