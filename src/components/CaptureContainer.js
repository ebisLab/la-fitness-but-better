import React, {useState} from 'react';
import Webcam from "react-webcam";

export default function CaptureContainer({changecurrentuser}) {
    const webcamRef = React.useRef(null);
 const [currentUserClicked, setCurrentUserClicked] =useState()

  return (
    <div className='card-profile-picture'>
    <div>
      <div style={{ height: "200px", width:'200px', background: "red"}} />
      <div>
        <button>Delete</button><button onClick={changecurrentuser}>Photo</button>
      </div> 
    </div>
  </div>
  )
}
