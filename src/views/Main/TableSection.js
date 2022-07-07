import React, {useContext} from 'react';
import CardContext from '../../store/constants/CardContext';
import imgplaceholder from '../../assets/img/userplaceholder.png';
import {UNRECOGNIZED, OK} from '../../store/constants';
import {Button, Tag} from '@chakra-ui/react';
import WalkInGuest from '../../components/modals/WalkInGuest/WalkInGuest';
import HealthProgram from '../../components/modals/HealthProgram.js/HealthProgram';

export default function TableSection({
  currentTime,
  clickedRows,
  status_table,
  usersDatabase,
  setUsersDatabase,
}) {
  const {
    onBarcodeChange,
    userBarcode,
    submitBarcodeHandler,
    currentUser,
    setCurrentUser,
    todaysList,
    setTodaysList,
  } = useContext(CardContext);

  return (
    <section
      style={{background: '#ebf0f7', padding: '2% 2% 0 2%'}}
      className="second-column">
      <WalkInGuest todaysList={todaysList} setTodaysList={setTodaysList} />
      <HealthProgram
        setCurrentUser={setCurrentUser}
        setUsersDatabase={setUsersDatabase}
        usersDatabase={usersDatabase}
        todaysList={todaysList}
        setTodaysList={setTodaysList}
      />

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
                  <React.Fragment key={i}>
                    <tr
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
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
