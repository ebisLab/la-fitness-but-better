import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

export default function EX3({item, currentImg}) {
    console.log('profiler', currentImg)
  return (
    <div className='card-profile-picture'>
    <div>
        <div style={{height:'200px', width: '200px', zIndex: 0}}>
            <span style={{
            zIndex:0,
            position: 'absolute', margin: '5.4em -1.7em'}}>loading...</span>
     <div style={{
        position: 'absolute', 
        overflow: 'hidden',
        zIndex:1
    }}>
        
        <img width="200px" height="200px" className="max-h-60 md:max-h-96" src={item.member_photo} alt="yourimage"/>

    </div>
    </div>
    <button 
    style={{
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.5)',
      alignItems:'center',
      justifyContent:'center',
      width:50,
      height:50,
      backgroundColor:'#fff',
      borderRadius:50,
      zIndex:1,
      position: 'absolute',
      margin: '-20px -20px'
    }}
    className={`mx-auto`} 
    onClick={() => {}}>
        <FontAwesomeIcon icon={faCamera} size="2x"/>
    </button>
            </div>
    </div>
//     <div>
//         <img src={item.member_photo} alt="profiler" width="200px" height="200px" />
//     {/* <div style={{width: '200px', height: '200px', background: 'tomato'}}>main picture</div> */}
//     <button onClick={()=>{}}>switch to cam</button>
// </div>
  )
}
