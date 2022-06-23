import React from 'react'
import EX2 from './EX2'
import EX3 from './EX3'
import FaceTime from './FaceTime'

export default function EX1({item, changecurrentuser, setDontRefresh, currentImg, setCurrentImg, dontRefresh}) {
    if(item.member_photo==='')
{  return (
    <FaceTime 
    currentImg={currentImg}
    setCurrentImg={setCurrentImg}
    changecurrentuser={changecurrentuser} dontRefresh={dontRefresh} setDontRefresh={setDontRefresh} />
    // <EX2 
    // currentImg={currentImg}
    // setCurrentImg={setCurrentImg}
    // changecurrentuser={changecurrentuser} dontRefresh={dontRefresh} setDontRefresh={setDontRefresh
    // }/>
  )}
  else{
    return <EX3 item={item} currentImg={currentImg}/>
  }
}
