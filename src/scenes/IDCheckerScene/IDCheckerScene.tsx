import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from '../../components/common/Header/Header';
import { APPROVED } from '../../consts';
import ScanID from '../../components/IDCheckerScene/ScanID/ScanID';
import TakePictureID from '../../components/IDCheckerScene/TakePictureID/TakePictureID';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  background-color: ${(props:isWebcamOn) => 
    props.isWebcamOn && 'rgba(20,28,38,0.75)'
  };
`;

const WrapperMain = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding-top: 32px;
`;

interface isWebcamOn {
  isWebcamOn: boolean;
}

interface ImageStatusResponse {
  summary: {
    outcome: string;
  };
}

const ScanCardScene: React.FC = () => {

  const [ isWebcamOn, setIsWebcamOn ] = useState<boolean>();
  const [ isRejected, setIsRejected ] = useState<boolean>();
  const [ imageSource, setImageSource ] = useState<string>();
  
  const webcamRef = React.useRef<any>(null);

  useEffect(() => {
    let timer: any;
    if(isWebcamOn) {
      timer = setTimeout( async () => {
        const payload = webcamRef.current.getScreenshot();
        //Here we should be supposed to send a payload :)
        const { data } = await axios.post<ImageStatusResponse>('https://front-exercise.z1.digital/evaluations');
        
        data.summary && data.summary.outcome === APPROVED
          ? setIsRejected(false)
          : setIsRejected(true);
        
        setImageSource(payload)
        setIsWebcamOn(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isWebcamOn, imageSource, setIsWebcamOn, setImageSource, webcamRef]);

  const handleOnClick = () => {
    setImageSource('');
    setIsWebcamOn(true);
  }

  const handleCancel = () => {
    setImageSource('');
    setIsWebcamOn(false);
    setIsRejected(undefined);
  }

  return (
    <Wrapper isWebcamOn={isWebcamOn}>
      <Header label={ !isWebcamOn || imageSource ? 'BankClient' : '' }/>
      <WrapperMain>
      {
        isWebcamOn
          ? <ScanID webcamRef={webcamRef} handleCancel={handleCancel}/>
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