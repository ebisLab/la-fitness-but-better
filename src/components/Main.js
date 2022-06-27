import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {mock} from '../api/mock';
import EX1 from './EX1';
import { Input, IconButton, Button, ButtonGroup, 
  Box, Tabs, Table, Thead, Tbody, Tr, Th, Td,
  FormControl } from '@chakra-ui/react'


export default function Main({bg = "#e6dfd1", color = "gray.800",setPatronsCount, patronsCount}) {
    const [userBarcode, setUserBarcode]=useState('')
    const [userInfo, setUserInfo]=useState('')
    const [todaysList, setTodaysList]=useState([])
    const [currentUser, setCurrentUser]=useState([])
    const [currentImg, setCurrentImg] = useState(null);
    const [usersDatabase, setUsersDatabase]= useState([])
    const time= new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
    const [currentTime,setCurrentTime]=useState(time)
    const [dontRefresh, setDontRefresh]=useState(false)
    const [imgAfterUpdate, setImgAfterUpdate]=useState('')
    // const [finishTingPic, setFinishTakingPic]=useState(false)
    useEffect(()=>{
      setUsersDatabase(mock)

    },[])

    

    const addName =(name)=> {
      // setPatronsCount(removeduplicates())

      let findUser= usersDatabase.some(item=>item.first_name.toLowerCase() === name.toLowerCase())
      let filterUser = usersDatabase.filter(item=>item.first_name.toLowerCase() === name.toLowerCase())
      setCurrentUser(filterUser)
      if (findUser){
        const user={...filterUser[0], time, timesheet:[Date.now()]}
      setTodaysList([user,...todaysList]);


      //find the user from the database list and update their info
      const db= usersDatabase.map(obj=> {
        if(obj.barcode_number ===filterUser[0].barcode_number)
        {return {...obj, time}}
        else {
          return obj
        }
      })
      setUsersDatabase(db)
      }else{
      const user = { id: todaysList.length+1, first_name: name , status: 'UNRECOGNIZED', time};
      setTodaysList([ user,...todaysList]); 
      }

    }
    const changeHandler=(e)=>{
        setUserBarcode(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        setImgAfterUpdate('')
        setUserInfo(userBarcode)
        addName(userBarcode)
        setCurrentTime(currentTime)
        e.target.reset();
    }
    const kidsModal=()=>{
        console.log('heee')
    }

    const changecurrentuser =(img)=>{
      
      setCurrentImg(img)

      const db= usersDatabase.map(obj=> {
        if(obj.barcode_number === currentUser[0].barcode_number)
        {return {...obj, member_photo: img}}
        else {
          return obj
        }
      })

      setUsersDatabase(db)
      const db2= todaysList.map(obj=> {
        if(obj.barcode_number === currentUser[0].barcode_number)
        {return {...obj, member_photo: img }}
        else {
          return obj
        }
      })
      console.log('switched', db2)
     setTodaysList(db2)
    }

    const removeduplicates=()=>{
      let duplicateRemover = new Set();
      let distinctAarr = todaysList.filter((obj,i)=>{
        if( !duplicateRemover.has(obj.barcode_number) && obj.status !== 'UNRECOGNIZED'){
          duplicateRemover.add(obj.barcode_number)
          return obj
         }
      })
      // console.log('dist', distinctAarr)
      return distinctAarr.length
    }
useEffect(() => {
  setPatronsCount(removeduplicates())

}, [addName])


console.log('patroncount', patronsCount)
console.log('patroncount+++', removeduplicates())

// setPatronsCount(removeduplicates())
  return (
  <main className='grid-container'>
    <section 
    style={{background: '#ebf0f7'}}
     className='first-column'>
      {/* <div style={{background:'red'}}> */}
      <Box
       className='sidebar'
        width="100%"
        bg={bg} 
        color={color} 
        rounded="lg" 
        p={5}
      >
        <form onSubmit={submitHandler}>
        <ButtonGroup>
   
        <Input 
        style={{background:'beige'}}
        name="barcode" type="text" onChange={changeHandler}  />
        <Button type="submit">✔</Button>
        <Button type="submit"
        onClick={(e)=>{e.preventDefault(); kidsModal()}}
        >🧸</Button>
        </ButtonGroup>
        </form>
      {/* </Box>
      <Box 
          width="100%"
          bg={bg} 
          color={color} 
          rounded="lg" 
          p={5}

      > */}
      {currentUser.length? (currentUser.map((item,i)=>(
        <div key={Date.now()}>
        <div className='member-card'>
          <div className='member-info'>
            <div style={{background: 'green'}}>{item.status}</div>
            <div className='status'>
              <table>
                <tbody>
                <tr>
                  <th>Barcode</th>
                  <td>{item.barcode_number}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{item.first_name} {item.last_name}</td>
                </tr>
                <tr>
                  <th>Expiration</th>
                  <td>none</td>
                </tr>
                </tbody>
              </table>
              <div className='member-service'>
                <Button>service</Button>
                <Button
                colorScheme="teal"
                variant="solid"
                rounded="200"
                size="sm"
                fontSize="sm"
                >Get $</Button>
              </div>
            </div>
          </div>
          <div className='member-profile-n-fam'>
          <div className='member-privileges'>
            <div>🎾</div>
            <div>G(1)</div>
            <Button>Guest Waiver</Button>
          </div>

          <EX1 
          imgAfterUpdate={imgAfterUpdate}
          setImgAfterUpdate={setImgAfterUpdate}
          currentImg={currentImg}
          setCurrentImg={setCurrentImg}
          dontRefresh={dontRefresh}
          setDontRefresh={setDontRefresh}
          item={item} 
          currentUser={currentUser} 
          changecurrentuser={changecurrentuser} />
          
        <div className='family-plan'>
          members under plan
        </div>
        </div>
        </div>
        </div>
      ))):(
            <div key={Date.now()}>
      <div className='member-card'>
        <div className='member-info'>
          <div style={{background: 'green'}}>INVALID BARCODE</div>
          <div className='status'>
            <table>
              <tbody>
              <tr>
                <th>Barcode</th>
                <td>{userInfo}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>member name</td>
              </tr>
              <tr>
                <th>Expiration</th>
                <td>none</td>
              </tr>
              </tbody>
            </table>
            <div>
              <button>service</button>
              <button>Get $</button>
            </div>
          </div>
        </div>
      <div className='member-privileges'>
        <div>🎾</div>
        <div>G(1)</div>
        <button>Guest Waiver</button>
      </div>
      <div className='member-profile-n-fam'>
      <div className='card-profile-picture'>
        <div>
        <div style={{ height: "200px", width:'200px', background: "lightgrey"}} />

                </div>
      </div>
      <div>
        members under plan
        {userInfo}
      </div>
      </div>
      </div>
      </div>
      )}
      </Box>
    </section>
    <section style={{background: '#ebf0f7'}} className='second-column'>
      <div>check in tools</div>
      {/* <div>{removeduplicates()}</div> */}
      <div className='record-container'>
        <div>Last Refresh: {currentTime}<Button colorScheme='green'>Refresh</Button></div>
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
          {todaysList && todaysList.map(item=>{
                return(
              <tr key={uuidv4()} 
              className={item.status ==='UNRECOGNIZED'?"checked-in-user-table-status":""}
              >
                <td>
                  <div 
                  style={{width:'50px', height:'50px', background: item.status === 'UNRECOGNIZED'?'red':'blue'}}>
                  <img width="50px" height="50px" src={item.member_photo} alt={item.barcode_number}/>
                  </div>
                  </td>
                <td>{item.status==='UNRECOGNIZED'?'':<Button>Service</Button>}</td>
                <td>{item.barcode_number}</td>
                <td>{item.fitness_type}</td>
                <td>{item.first_name} {item.last_name}</td>
                <td style={{color: item.status!=='UNRECOGNIZED' && item.status !== 'CANCELLED'? '#0bbd0b':''}}>{item.status}</td>
                <td>{item.time}</td>
              </tr>
              )})}
          </tbody>
</table>
      </div>
    </section>
  </main>
  )
}
