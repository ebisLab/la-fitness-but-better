import React from 'react'
import EX2 from './EX2'
import EX3 from './EX3'
import EX4 from './EX4'
import FaceTime from './FaceTime'

export default function EX1({
    imgAfterUpdate,
    setImgAfterUpdate,
    item, changecurrentuser, setDontRefresh, currentImg, setCurrentImg, dontRefresh}) {
    console.log('item memb', item)
    if(item.member_photo==='')
{  return (
    <FaceTime 
    setImgAfterUpdate={setImgAfterUpdate}
    item={item}
    currentImg={currentImg}
    setCurrentImg={setCurrentImg}
    changecurrentuser={changecurrentuser} dontRefresh={dontRefresh} setDontRefresh={setDontRefresh} 
    />
  )}
  else{
 return <EX4 
 imgAfterUpdate={imgAfterUpdate}
 setImgAfterUpdate={setImgAfterUpdate}
    setCurrentImg={setCurrentImg}
    changecurrentuser={changecurrentuser} dontRefresh={dontRefresh} setDontRefresh={setDontRefresh} 
    item={item} currentImg={currentImg}/>
  }
}
