import {createContext, useState, useEffect} from 'react';
import {mock} from '../../api/mock.js';
import {time} from '../../utils/apputils.js';

const CardContext = createContext();

export function CardProvider({children}) {
  const [usersDatabase, setUsersDatabase] = useState([]);
  const [userBarcode, setUserBarcode] = useState('');
  const [userInfo, setUserInfo] = useState(''); //is this needed
  const [currentUser, setCurrentUser] = useState([]);
  const [todaysList, setTodaysList] = useState([]);

  useEffect(() => {
    setUsersDatabase(mock);
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
      console.log('we found user', ...searchForUser);

      //timesheet ==> time array
      const user = {...searchForUser[0], time, timesheet: 'to be determined'};
      console.log('user thrown in the table', user);
      setTodaysList(prevstate => [...prevstate, user]);
      //   setTodaysList([user, ...todaysList]);

      //   //find the user from the database list and update their info
      //   const db = usersDatabase.map(obj => {
      //     if (obj.barcode_number === searchForUser[0].barcode_number) {
      //       return {...obj, time};
      //     } else {
      //       return obj;
      //     }
      //   });
      //   setUsersDatabase(db);
    } else {
      console.log('user isnt found');
      //   const user = {
      //     id: todaysList.length + 1,
      //     first_name: name,
      //     status: UNRECOGNIZED,
      //     member_photo: imgplaceholder,
      //     time,
      //   };
      //   setTodaysList([user, ...todaysList]);
      //   setCurrentUser([user]);
    }
  };

  //on submit value is searched in the database
  const submitBarcodeHandler = e => {
    e.preventDefault();
    setUserInfo(userBarcode);
    addName(userBarcode);
    setUserBarcode('');

    // setCurrentTime(currentTime);
    // e.target.reset();
  };

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
      }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
