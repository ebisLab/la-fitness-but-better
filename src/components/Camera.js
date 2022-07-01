import React from 'react';
import Webcam from 'react-webcam';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {Image, Box, Center, Grid} from '@chakra-ui/react';
import {UNRECOGNIZED} from '../store/constants';

const videoConstraints = {
  width: 200,
  height: 200,
  facingMode: 'user',
};

export default function Camera({item, changecurrentuser}) {
  const webcamRef = React.useRef(null);
  const [image, setImage] = React.useState();
  const status = {UNRECOGNIZED: '#FC8181', OK: '#9AE6B4', DECLINED: '#FBD38D'};

  React.useEffect(() => {
    setImage(item.member_photo);
  }, [item.member_photo]);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    changecurrentuser(imageSrc);
  }, [webcamRef, changecurrentuser]);

  return (
    <Box className="card-profile-picture" bg={status[item.status]} h="40vh">
      <Center>
        <Grid>
          <div className="camera_center">
            {!image ? (
              <div>
                <div style={{height: '200px', width: '200px', zIndex: 0}}>
                  <span
                    style={{
                      zIndex: 0,
                      position: 'absolute',
                      margin: '5.4em -1.7em',
                    }}>
                    {/* loading... */}
                  </span>
                  <div
                    style={{
                      position: 'absolute',
                      overflow: 'hidden',
                      zIndex: 1,
                    }}>
                    <Webcam
                      className="border-8 max-h-60 md:max-h-96"
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      videoConstraints={videoConstraints}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <Image
                src={image}
                boxSize="200px"
                alt={`${item.first_name} ${item.last_name}`}
              />
            )}
            {item?.status !== UNRECOGNIZED ? (
              <button
                className="camera_capture"
                onClick={() => (!image ? capture() : setImage(undefined))}>
                {!image ? (
                  <FontAwesomeIcon icon={faCamera} size="2x" />
                ) : (
                  'Retake'
                )}
              </button>
            ) : (
              ''
            )}
          </div>
        </Grid>
      </Center>
    </Box>
  );
}
