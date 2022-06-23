import React from 'react'

export default function EX3({currentImg}) {
  return (
    <div>
        <img src={currentImg} alt="profiler" width="200px" height="200px" />
    {/* <div style={{width: '200px', height: '200px', background: 'tomato'}}>main picture</div> */}
    <button onClick={()=>{}}>switch to cam</button>
</div>
  )
}
