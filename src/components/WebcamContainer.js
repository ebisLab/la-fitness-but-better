import React, {useState, useEffect} from 'react';
import Webcam from "react-webcam";
import {mock} from '../api/mock';

export default function WebcamContainer({image,setImage, currentUser,  setTodaysList, todaysList, time}) {
const webcamRef = React.useRef(null);
const [currentUserClicked, setCurrentUserClicked] =useState()
// const [image, setImage] = useState(undefined);
useEffect(()=>{
  setCurrentUserClicked(currentUser)

},[currentUser])

const capture = React.useCallback(() => {
  const imageSrc = webcamRef.current.getScreenshot();
  const user={...currentUserClicked[0], member_photo: imageSrc }
  setImage(imageSrc);
  setTodaysList([...todaysList, user])
  console.log(imageSrc);
}, [webcamRef, setImage, todaysList, currentUserClicked, setTodaysList]);



const videoConstraints = {
  width: 200,
  height: 200,
  facingMode: "user"
};
console.log('timer', time)

console.log('uppr', currentUser)
const updateUserImage=(e, name)=>{
  console.log('currrent', currentUserClicked)
  // let filterUser = mock.filter(item=>item.first_name.toLowerCase() === name.toLowerCase())
  const user={...currentUserClicked[0], member_photo: image, time:'haha' }
  setTodaysList([...todaysList, user])

}
  return (
    <div className='card-profile-picture'>
        <div>
        {!image ? (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </div>
      ) : (
        <img src={image} alt="test-ilustartion" />
      )}
            {/* <div style={{ height: "200px", width:'200px', background: "red"}} /> */}
            <div>
            <button onClick={() => (!image ? capture() : setImage(undefined))}>
        {!image ? "Capture photo" : "Retake photo"}
      </button>
      <button onClick={updateUserImage}>sample</button>
                {/* <button>Delete</button><button>Photo</button> */}
            </div> 
        </div>
    </div>
  )
}
