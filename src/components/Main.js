import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {mock} from '../api/mock';
import axios from 'axios'

export default function Main() {
    const [userBarcode, setUserBarcode]=useState('')
    const [userInfo, setUserInfo]=useState('')
    const [todaysList, setTodaysList]=useState([])
    const [currentUser, setCurrentUser]=useState([])
    const time= new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
    const [currentTime,setCurrentTime]=useState(time)

    useEffect(()=>{
      axios.get('')

    },[])
    
    const addName =(name)=> {
      let findUser= mock.some(item=>item.first_name.toLowerCase() === name.toLowerCase())
      let filterUser = mock.filter(item=>item.first_name.toLowerCase() === name.toLowerCase())
      setCurrentUser(filterUser)
      if (findUser){
        const user={...filterUser[0], time, timesheet:[Date.now()]}
      setTodaysList([user,...todaysList]);
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
        setUserInfo(userBarcode)
        addName(userBarcode)
        setCurrentTime(currentTime)
    }
    const kidsModal=()=>{
        console.log('heee')
    }
  return (
  <main className='grid-container'>
    <section className='first-column'>
      <div>
        <form onSubmit={submitHandler}>
        <input name="barcode" type="text" onChange={changeHandler}  />
        <button>✔</button>
        <button onClick={(e)=>{e.preventDefault(); kidsModal()}}>🧸</button>
        </form>

      </div>
      {/* <div>
      <div className='member-card'>
        <div className='member-info'>
          <div style={{background: 'green'}}>status</div>
          <div className='status'>
            <table>
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
      <div className='card-profile-picture'>
        
        <div style={{ height: "200px", width:'200px', background: "red"}} />
        <div>
          <button>Delete</button><button>Photo</button>
        </div>
      </div>
      <div>
        members under plan
        <br/>
        {userInfo}
      </div>
      </div>
      </div> */}
      {currentUser.length? (currentUser.map((item)=>(
        <div key={Date.now()}>
        <div className='member-card'>
          <div className='member-info'>
            <div style={{background: 'green'}}>{item.status}</div>
            <div className='status'>
              <table>
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
        <div className='card-profile-picture'>
        <div>
        <div style={{ height: "200px", width:'200px', background: "red"}} />
        <div>
          <button>Delete</button><button>Photo</button>
        </div> 
                </div>
      </div>
        <div>
          members under plan
          <br/>
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
      <div className='card-profile-picture'>
        <div>
        <div style={{ height: "200px", width:'200px', background: "red"}} />
        <div>
          <button>Delete</button><button>Photo</button>
        </div> 
                </div>
      </div>
      <div>
        members under plan
        <br/>
        {userInfo}
      </div>
      </div>
      </div>
      )}
    </section>
    <section className='second-column'>
      <div>check in tools</div>
      <div className='record-container'>
        <div>Last Refresh: {currentTime} AM <button>Refresh</button></div>
        <div>Check In History</div>
        <table>
          <tbody>
            <tr>
              <th>Photo</th>
              <th>Service</th>
              <th>Barcode</th>
              <th>Type</th>
              <th>Name</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
            {todaysList && todaysList.map(item=>(
            <tr key={uuidv4()}>
              <td>{item.member_photo}</td>
              <td><button>Service</button></td>
              <td>{item.barcode_number}</td>
              <td>{item.fitness_type}</td>
              <td>{item.first_name} {item.last_name}</td>
              <td>{item.status}</td>
              <td>{item.time}</td>
            </tr>))}

          </tbody>
        </table>
      </div>
    </section>
  </main>
  )
}
