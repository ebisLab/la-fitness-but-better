import React, { useState, useEffect } from 'react'
import Sample2 from './Sample2'

export default function Thing({usrImg, profileImg, setProvileImg, changecurrentuser}) {
    const [switchToCam, setSwitchToCam]=useState()
    const isImgEmpty= Boolean(!usrImg)
    const flip =()=>{
        setSwitchToCam(true)
        console.log('flip')
    }

    const chilling = ()=>{
        changecurrentuser('hey')
        setSwitchToCam(true)
    }

    const renderContent = React.useCallback(() => {
        switch(switchToCam) {
          case false: 
            return <p className="connecting">Connecting...</p>;
          
          case true : 
            return <p className="success">
                <div>Connected Successfully!</div>
                <button onClick={chilling}>snap</button>
                </p>
    
          default: 
            return <p> default pic</p>;
          
        }
      }, [switchToCam]);

    
    console.log('switchto', switchToCam)
    if(isImgEmpty){
        return (
        <div>
            {renderContent()}
            {/* {switchToCam? (
            <Sample2 
            setSwitchToCam={setSwitchToCam}
            changecurrentuser={changecurrentuser}/>):<div>just picture</div>} */}

            <button onClick={() => switchToCam ?null : flip()}>
        {switchToCam ? null : "switch to cam"}
      </button>
        </div>
        )
    }
    else {
        return <div>not empty</div>
    }
}
