import React,{useState} from 'react'
import Webcam from "react-webcam";

export default function FaceTime(props) {
    const {changecurrentuser,setProvileImg}=props
    console.log('props change usr', props)
    const webcamRef = React.useRef(null);
    const [image, setImage] = useState(undefined);
    const capture = React.useCallback(async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setProvileImg(imageSrc)
       setImage(imageSrc);
      console.log(imageSrc);
    //   changecurrentuser()
    }, [webcamRef, setProvileImg]);
// console.log('iiig', image)
    const videoConstraints = {
        width: 200,
        height: 200,
        facingMode: "user"
      };
    return (
      <div>
        {!image ? (
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
        ) : (
          <img src={image} alt="test-ilustartion" />
        )}
        <br />
        {/* {console.log('load img first ==>', image)} */}
        <button onClick={() => (!image ? ( capture(),   changecurrentuser(image), console.log('thing 1')) : (setImage(undefined), console.log('thing 2')))}>
          {!image ? "Capture photo" : "take photo"}
        </button>
      </div>
    );
}
