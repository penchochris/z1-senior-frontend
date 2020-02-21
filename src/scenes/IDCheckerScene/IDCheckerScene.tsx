import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Webcam from 'react-webcam';

import Header from '../../components/common/Header/Header';
import { APPROVED } from '../../consts';
import ScanID from '../../components/IDCheckerScene/ScanID/ScanID';
import TakePictureID from '../../components/IDCheckerScene/TakePictureID/TakePictureID';

//TODO: background to camera.
const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const WrapperMain = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding-top: 32px;
`;

interface Summary {
  outcome: string;
}

interface ImageStatusResponse {
  summary: Summary;
}

const ScanCardScene: React.FC = () => {

  const [ isCameraOn, setIsCameraOn ] = useState<boolean>();
  const [ isRejected, setIsRejected ] = useState<boolean>();
  const [ imageSource, setImageSource ] = useState<string>();
  const webcamRef = React.useRef<any>(null);

  useEffect(() => {
    let timer: any;
    if(isCameraOn) {
      timer = setTimeout( async () => {
        setImageSource(webcamRef.current.getScreenshot());
        const { data } = await axios.post<ImageStatusResponse>('https://front-exercise.z1.digital/evaluations');
        
        data.summary && data.summary.outcome === APPROVED
          ? setIsRejected(false)
          : setIsRejected(true);
        
        setIsCameraOn(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isCameraOn, imageSource, setIsCameraOn, setImageSource, webcamRef]);

  const handleOnClick = () => setIsCameraOn(true);

  return (
    <Wrapper>
      <Header>
        { !isCameraOn && !imageSource ? 'BankClient' : '' }
      </Header>
      <WrapperMain>
      {
        isCameraOn
          ? <ScanID cameraRef={webcamRef}/>
          : <TakePictureID
              imageSource={imageSource}
              handleOnClick={handleOnClick}
              isRejected={isRejected}
            />
            
      }
      </WrapperMain>
    </Wrapper>
  );
}

export default ScanCardScene;