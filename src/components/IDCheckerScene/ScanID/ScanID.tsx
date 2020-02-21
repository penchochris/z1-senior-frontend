import React from 'react';
import Webcam from 'react-webcam';

import { Title, Text, CameraWrapper } from '../IDCheckerStyled';

interface Props {
  webcamRef: any;
}

const ScanID:React.FC<Props> = ({ webcamRef }: Props) =>
  <>
    <Title>Take Picture</Title>
    <Text>Fit your ID card inside the frame. The picture will be taken automatically.</Text>
    <CameraWrapper 
      isRejected={true}>
        <Webcam
          ref={webcamRef}
          height={220}
          width={300}
          screenshotFormat="image/jpeg"
        />
    </CameraWrapper>
  </>




export default ScanID;