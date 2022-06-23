import React from 'react'
import FaceTime from './FaceTime';

export default function EX4({item, changecurrentuser, currentImg, setCurrentImg, dontRefresh, setDontRefresh}) {
    const [click, setClick] = React.useState(false)
    console.log(item)

    if(!click){
    return(
        <div className='card-profile-picture'>
      <div id="container" className="border-8 bg-gray-800 h-full flex space-y-6 flex-col justify-center items-center">
        <div>{item?.member_photo && (
        <img width="200px" height="200px" className="max-h-60 md:max-h-96" src={item.member_photo} alt="yourimage"/>
        )}
        </div>
        <button 
        style={{
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.5)',
          alignItems:'center',
          justifyContent:'center',
          width:75,
          height:25,
          backgroundColor:'#fff',
          borderRadius:50
        }}
        className={`mx-auto`} onClick={() => { setClick(true); }}><b>Retake</b></button>
      </div>
      </div>
    )}
    else {
        // return "hold up"
        return <FaceTime 
            item={item}
    currentImg={currentImg}
    setCurrentImg={setCurrentImg}
    changecurrentuser={changecurrentuser} dontRefresh={dontRefresh} setDontRefresh={setDontRefresh} 

        />
    };
}
