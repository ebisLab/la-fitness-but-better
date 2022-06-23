import React, {useState, useEffect} from 'react'
import Webcam from "react-webcam";

export default function Sample2({profileImg, setProvileImg, changecurrentuser}) {
    const [switchToCam, setSwitchToCam]=useState()

    const videoConstraints = {
        width: 200,
        height: 200,
        facingMode: "user"
      };

    


    return(
        <div>
            <div>camera pending</div>
            <button onClick={()=>{setSwitchToCam(true); changecurrentuser('🌿')}}>😈</button>
            {/* <button onClick={changecurrentuser('🌿')}>take picture</button> */}
        </div>
    )
}
