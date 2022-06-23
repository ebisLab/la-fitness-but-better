import React from 'react'
import Webcam from "react-webcam";

export default function Food() {
    const videoConstraints = {
        width: 200 ,
        height: 200,
        facingMode: "user"
      };

      const webcamRef = React.useRef(null);
      const capture = React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
      );
      return (
        <>
          <Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={200}
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      );

}
