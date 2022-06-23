import React from 'react'
import EX2 from './EX2'

export default function EX1({item, changecurrentuser, setDontRefresh={setDontRefresh}, dontRefresh}) {
    if(item.member_photo==='')
{  return (
    <EX2 changecurrentuser={changecurrentuser} dontRefresh={dontRefresh} setDontRefresh={setDontRefresh}/>
  )}
  else{
    return "okay this has a picture already"
  }
}
