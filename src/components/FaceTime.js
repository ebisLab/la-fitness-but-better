import React, {useState,useRef} from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 200, 
    height: 200,
  facingMode: "user"
};


export default function FaceTime({dontRefresh, changecurrentuser, setDontRefresh, currentImg, setCurrentImg}) {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [click, setClick] = useState(false);
  const capture = React.useCallback(
    async() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      setDontRefresh(true)

      changecurrentuser(imageSrc)
      await setCurrentImg(imageSrc)

    },
    [webcamRef,setImgSrc, setDontRefresh, changecurrentuser, currentImg,setCurrentImg]
  );

  console.log('dontrefres', dontRefresh)
  console.log('current imgag', currentImg)
  if(click && dontRefresh)
    return(
      <div id="container" className="border-8 bg-gray-800 h-full flex space-y-6 flex-col justify-center items-center">
        {currentImg && dontRefresh &&(
          <img className="max-h-60 md:max-h-96" src={imgSrc} alt="yourimage"/>
        )}
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
        className={`mx-auto`} onClick={() => { setClick(false); }}><b>Retake</b></button>
      </div>
    );
  else
    return (
      <div id="container" className="bg-gray-800 h-full flex space-y-6 flex-col justify-center items-center">
        <Webcam className="border-8 max-h-60 md:max-h-96"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <button 
        style={{
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.5)',
          alignItems:'center',
          justifyContent:'center',
          width:50,
          height:50,
          backgroundColor:'#fff',
          borderRadius:50
        }}
        className={`mx-auto`} 
        onClick={() => { setClick(true); capture(); }}></button>
      </div>
  );
}
