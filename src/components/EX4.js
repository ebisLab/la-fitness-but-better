import React from 'react'
import FaceTime from './FaceTime';
import {
  OK,
  EXPIRED,
  EXPIRING, 
  DECLINED,
  FROZEN,
  UNRECOGNIZED,
  MEMBERSHIP_REVOCKED
} from '../store/constants'
import imgplaceholder from '../assets/img/userplaceholder.png';
import { Input, IconButton, Button, ButtonGroup, 
  Box, Table, Thead, Tbody, Tr, Th, Td,
  FormControl, Center, Grid } from '@chakra-ui/react'
  

export default function EX4({
  imgAfterUpdate,
  setImgAfterUpdate,
  item, changecurrentuser, currentImg, setCurrentImg, dontRefresh, setDontRefresh}) {
    const [click, setClick] = React.useState(false)

    if(!click){
      if(imgAfterUpdate){
        console.log('the image is here', imgAfterUpdate)
        return (
          <Box className='card-profile-picture'
          bg={item?.status === UNRECOGNIZED?'#FEB2B2':'#9AE6B4'}
          h="40vh" 
          >
      <div id="container" 
      >
        <div>{item?.member_photo && (
        <img width="200px" height="200px" className="max-h-60 md:max-h-96" src={imgAfterUpdate} alt="yourimage"/>
        )}
        </div>
        <Button 
                // style={{
        //   borderWidth:1,
        //   borderColor:'rgba(0,0,0,0.5)',
        //   alignItems:'center',
        //   justifyContent:'center',
        //   width:75,
        //   height:25,
        //   backgroundColor:'#fff',
        //   borderRadius:50
        // }}
        className={`mx-auto`} onClick={() => { setClick(true); }}><b>Retake</b></Button>
      </div>
      </Box>
        )
      }
    return(
        <Box className='card-profile-picture'
        // bg="#9AE6B4" 
        bg={item?.status === UNRECOGNIZED?'#FEB2B2':'#9AE6B4'}
        h="40vh" 
        >
          <Center>
            <Grid>
      <div id="container" className="border-8 bg-gray-800 h-full flex space-y-6 flex-col justify-center items-center">
        <div>{item?.member_photo? (
        <>
        <img width="200px" height="200px" className="max-h-60 md:max-h-96" src={item.member_photo} alt="yourimage"/>
        <Button 
        className={`mx-auto`} onClick={() => { setClick(true); }}><b>Retake</b></Button>
        </>
        ):(        <img width="200px" height="200px" src={imgplaceholder} alt="placeholder"/>
        )
        }
        </div>
      </div>
      </Grid>
      </Center>
      </Box>
    )}
    else {
        return <FaceTime 
        setImgAfterUpdate={setImgAfterUpdate}
            item={item}
    currentImg={currentImg}
    setCurrentImg={setCurrentImg}
    changecurrentuser={changecurrentuser} dontRefresh={dontRefresh} setDontRefresh={setDontRefresh} 

        />
    };
}
