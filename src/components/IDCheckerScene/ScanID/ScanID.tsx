import React from 'react';
import Webcam from 'react-webcam';

import { Title, Text, CameraWrapper, Cancel } from '../IDCheckerStyled';

interface Props {
  webcamRef: any;
  handleCancel: () => void;
}

const ScanID:React.FC<Props> = ({ webcamRef, handleCancel }: Props) =>
  <>
    <Title>Take Picture</Title>
    <Text>Fit your ID card inside the frame. The picture will be taken automatically.</Text>
    <CameraWrapper 
      isRejected={true}>
        <Webcam
          ref={webcamRef}
          height={220}
          width={300}
          mirrored={true}
          screenshotFormat="image/jpeg"
        />
    </CameraWrapper>
    <Cancel onClick={handleCancel}>CANCEL</Cancel>
  </>

export default ScanID;