import React from 'react';
import Webcam from 'react-webcam';

import { Title, Text, CameraWrapper } from '../IDCheckerStyled';

interface Props {
  cameraRef: any;
}

const ScanID:React.FC<Props> = ({ cameraRef }: Props) =>
  <>
    <Title>Take Picture</Title>
    <Text>Fit your ID card inside the frame. The picture will be taken automatically.</Text>
    <CameraWrapper 
      isRejected={true}>
        <Webcam
          ref={cameraRef}
          height={220}
          width={300}
          screenshotFormat="image/jpeg"
        />
    </CameraWrapper>
  </>




export default ScanID;