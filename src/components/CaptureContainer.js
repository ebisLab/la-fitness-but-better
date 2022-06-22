import React, {useState} from 'react';
import Webcam from "react-webcam";

export default function CaptureContainer({hasPhoto, setProvileImg, usersDatabase, currentUser, setUsersDatabase}
    // changecurrentuser, profileImg, setProvileImg
) {
    const webcamRef = React.useRef(null);
    // const [currentUserClicked, setCurrentUserClicked] =useState();
    const [image, setImage] = useState(hasPhoto);
    const [switchToCam, setSwitchToCam] = useState(undefined)
    const userHasPic= hasPhoto===''|| hasPhoto===undefined

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log('imgrs', imageSrc)
        setImage(imageSrc);
        changecurrentuser('io')
      
        // setTodaysList([...todaysList, user])
        // console.log(imageSrc);
      }, [webcamRef]);

    const videoConstraints = {
        width: 200,
        height: 200,
        facingMode: "user"
    };

    const updateUserImage=(e, name)=>{
        capture()
        // setSwitchToCam(true)       
      }

      console.log('img--->', image)
      console.log('swtich', switchToCam)

      const changecurrentuser=(img)=>{
        console.log('img===>', img)
        // console.log('current user', currentUser[0].barcode_number)
        const db= usersDatabase.map(obj=> {
          if(obj.barcode_number === currentUser[0].barcode_number)
          {return {...obj, member_photo:'🌹'}}
          else {
            return obj
          }
        })
        // setInterval(() => {
          setUsersDatabase(db)     
        // }, 3300);
        // const db2= todaysList.map(obj=> {
        //   if(obj.barcode_number === currentUser[0].barcode_number)
        //   {return {...obj, member_photo: 'http://google.com'}}
        //   else {
        //     return obj
        //   }
        // })
        // setTodaysList(db2)
      }

  return (
    <div className='card-profile-picture'>
    <div>
      {/* ({userHasPic ? (<div style={{ height: "200px", width:'200px', background: "red"}} />):(
        <div style={{ height: "200px", width:'200px', background: "limegreen"}} />
      )}) */}
      {/* {switchToCam ? (<div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </div>):((
        userHasPic ? (<div style={{ height: "200px", width:'200px', background: "red"}} />):( <img src={image} alt="test-ilustartion" />)
      ))} */}

{/* {!image ? (
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
      )} */}

            {/* {!image ? (
                <div>
                {!switchToCam ? (<div style={{ height: "200px", width:'200px', background: "red"}} />):(
                       <div>
                       <Webcam
                         audio={false}
                         ref={webcamRef}
                         screenshotFormat="image/jpeg"
                         videoConstraints={videoConstraints}
                       />
                </div>
            )}
            </div>
            ) : (
            <img src={image} alt="test-ilustartion" width="200px" height="200px" />
            )} */}

{/* {!image ? (
            <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            {userHasPic ? (<div style={{ height: "200px", width:'200px', background: "red"}} />):(
        <div style={{ height: "200px", width:'200px', background: "limegreen"}} />
      )}
            </div>
            ) : (
            <img src={image} alt="test-ilustartion" />
            )} */}

      <div>
        {switchToCam ? (<button onClick={updateUserImage}>Take Picture</button>):(<button onClick={()=>{setSwitchToCam(true)}}>Camera</button>)}
        {/* <button>Delete</button><button onClick={changecurrentuser}>Photo</button> */}
      </div> 
    </div>
  </div>
  )
}
