import React, {useContext} from 'react';
// import CardContext from '@app/store/CardContext.js';

import TableContext from '../../store/TableContext.js';
import imgplaceholder from '../../assets/img/userplaceholder.png';
import {UNRECOGNIZED, OK} from '../../store/constants';
import {Button, Tag} from '@chakra-ui/react';
import WalkInGuest from '../../components/modals/WalkInGuest/WalkInGuest';
import HealthProgram from '../../components/modals/HealthProgram.js/HealthProgram';
import CardContext from '../../store/CardContext';

export default function TableSection({currentTime, status_table}) {
  const {clickedRows} = useContext(TableContext);
  const {setCurrentUser, todaysList, setTodaysList} = useContext(CardContext);

  return (
    <section
      style={{background: '#ebf0f7', padding: '2% 2% 0 2%'}}
      className="second-column">
      <WalkInGuest todaysList={todaysList} setTodaysList={setTodaysList} />
      <HealthProgram
        setCurrentUser={setCurrentUser}
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
              <th style={{width: '80px'}}>Photo</th>
              <th style={{width: '150px'}}>Service</th>
              <th style={{width: '180px'}}>Barcode</th>
              <th style={{width: '170px'}}>Type</th>
              <th style={{width: '190px'}}>Name</th>
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
                      <td style={{width: '80px'}}>
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
                      <td style={{width: '125px'}}>
                        {item.status === UNRECOGNIZED ? (
                          ''
                        ) : (
                          <Button>Service</Button>
                        )}
                      </td>
                      <td style={{width: '170px'}}>{item.barcode_number}</td>
                      <td style={{width: '150px'}}>
                        {item.fitness_type === 'guest' ? (
                          <Tag size="sm" variant="solid" colorScheme="green">
                            {item.fitness_type}
                          </Tag>
                        ) : (
                          item.fitness_type
                        )}
                      </td>
                      <td style={{width: '140px'}}>
                        {item.first_name} {item.last_name}
                      </td>
                      <td
                        className={item.status === OK ? 'status_cell' : ''}
                        style={{
                          color: status_table[item.status],
                          width: '220px',
                        }}>
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
