import React from 'react'
import EX2 from './EX2'
import EX3 from './EX3'

export default function EX1({item, changecurrentuser, setDontRefresh, currentImg, setCurrentImg, dontRefresh}) {
    if(item.member_photo==='')
{  return (
    <EX2 setCurrentImg={setCurrentImg}
    changecurrentuser={changecurrentuser} dontRefresh={dontRefresh} setDontRefresh={setDontRefresh}/>
  )}
  else{
    return <EX3 currentImg={currentImg}/>
  }
}
