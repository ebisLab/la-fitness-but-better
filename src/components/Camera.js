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
  }, []);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    changecurrentuser(imageSrc);
  }, [webcamRef, changecurrentuser, item.member_photo]);

  return (
    <Box className="card-profile-picture" bg={status[item.status]} h="40vh">
      <Center>
        <Grid>
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
              <Image
                src={image}
                boxSize="200px"
                alt={`${item.first_name} ${item.last_name}`}
              />
            )}

            {/* <button onClick={() => (!image ? capture() : setImage(undefined))}>
              {!image ? 'Capture photo' : 'take photo'}
            </button> */}
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
