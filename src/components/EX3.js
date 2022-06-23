import React from 'react'

export default function EX3({item, currentImg}) {
    console.log('profiler', currentImg)
  return (
    <div>
        <img src={item.member_photo} alt="profiler" width="200px" height="200px" />
    {/* <div style={{width: '200px', height: '200px', background: 'tomato'}}>main picture</div> */}
    <button onClick={()=>{}}>switch to cam</button>
</div>
  )
}
