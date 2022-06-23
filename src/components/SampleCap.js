import React from 'react'
import Sample from './Sample'

export default function SampleCap() {
    const webcamRef = React.useRef(null)
    const [camOpen, setCamOpen] = React.useState(false)
    const [imgSrc, setImgSrc] = React.useState(null)
  
    const capture = React.useCallback(() => {
        if (webcamRef){
          const imageSrc = webcamRef.current.getScreenshot()
          setImgSrc(imageSrc)
        }
      }, [webcamRef, setImgSrc, webcamRef])
    
    return (
      <div>
        {camOpen && 

        <Sample 
        capture={capture}
        webcamRef={webcamRef}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
        camOpen={camOpen}
        setCamOpen={setCamOpen}
        />

        }
  
        <button onClick={capture}>Open the camera</button>
  
        {imgSrc && <img src={imgSrc} />}
  
      </div>
    )
}
