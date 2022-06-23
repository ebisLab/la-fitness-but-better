import React from 'react'
import FaceTime from './FaceTime'

export default function EX2({changecurrentuser, dontRefresh, setDontRefresh, currentImg, setCurrentImg}) {
    const [click, setClick]=React.useState(false)   
    const [finishImg, setFinishImg]=React.useState(false)
    if(!click & !dontRefresh) {
        return (
        <div>
            <div style={{width: '200px', height: '200px', background: 'tomato'}}>main picture</div>
            <button onClick={()=>setClick(true)}>switch to cam</button>
        </div>
        )
    }
    else{ 
        return (
        <div>
            <FaceTime 
            currentImg={currentImg}
            setCurrentImg={setCurrentImg}
            setDontRefresh={setDontRefresh}
            dontRefresh={dontRefresh}
            changecurrentuser={changecurrentuser}/>
        </div>
        )}
}
