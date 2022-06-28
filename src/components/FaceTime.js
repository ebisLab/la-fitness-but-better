import React, {useState,useRef} from "react";
import {
  OK,
  EXPIRED,
  EXPIRING, 
  DECLINED,
  FROZEN,
  UNRECOGNIZED,
  MEMBERSHIP_REVOCKED
} from '../store/constants'
import Webcam from "react-webcam";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Input, IconButton, Button, ButtonGroup, 
    Box, Center, Grid, Table, Thead, Tbody, Tr, Th, Td,
    FormControl } from '@chakra-ui/react';

const videoConstraints = {
    // zIndex: 1,
    width: 200, 
    height: 200,
  facingMode: "user"
};


export default function FaceTime({
    setImgAfterUpdate,
    dontRefresh, changecurrentuser, setDontRefresh, currentImg, setCurrentImg}) {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [click, setClick] = useState(false);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      setDontRefresh(true);
    //   setCurrentImg(true);

      changecurrentuser(imageSrc)
    //    setCurrentImg(imageSrc)
    setImgAfterUpdate(imageSrc)

    },
    [webcamRef,setImgSrc, setImgAfterUpdate, setDontRefresh, changecurrentuser]
  );

  console.log('dontrefres', dontRefresh)
  console.log('current imgag****', currentImg)
  if(click)
    return(
      <div id="container" className="border-8 bg-gray-800 h-full flex space-y-6 flex-col justify-center items-center">
        huihuhu
        {currentImg &&(
          <img className="max-h-60 md:max-h-96" src={currentImg} alt="yourimage"/>
        )}
        <Button 
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
        className={`mx-auto`} onClick={() => { setClick(false); }}><b>Retake</b></Button>
      </div>
    );
  else
    return (
<Box 
className='card-profile-picture'
bg="#9AE6B4" h="40vh" 
>
  <Center>
    <Grid>
      {/* // <div className='card-profile-picture'> */}
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
            <Webcam className="border-8 max-h-60 md:max-h-96"
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              />
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
        onClick={() => { setClick(true); capture();}}>
            <FontAwesomeIcon icon={faCamera} size="2x"/>
        </button>
                </div>
                </Grid>
                </Center>

</Box>
        // </div>
  );
}
