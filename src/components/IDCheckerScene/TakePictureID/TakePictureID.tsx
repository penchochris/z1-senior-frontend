import React from 'react';

import IDChecker from './IDChecker/IDChecker';
import RoundedButton from '../../common/buttons/RoundedButton/RoundedButton';
import { Title, Text, OverlayWrapper, Overlay, OverlayLabel, CameraWrapper } from '../IDCheckerStyled';

interface Props {
  handleOnClick: () => void;
  isRejected: boolean;
  imageSource: string;
}

const TakePictureID:React.FC<Props> = ({ handleOnClick, isRejected, imageSource }: Props) =>
  <>
    <Title>Scan your ID</Title>
    <Text>Take a picture. It may take time to validate your personal information</Text>
    { !imageSource 
      ? <IDChecker handleOnClick={handleOnClick}/>
      : 
      <OverlayWrapper>
        <CameraWrapper isRejected={isRejected} imageSource={imageSource}>
            { 
            isRejected && <RoundedButton handleOnClick={handleOnClick}>RETAKE PICTURE</RoundedButton> 
            }
        </CameraWrapper>
        <Overlay 
            isRejected={isRejected}>
            <OverlayLabel>
            { isRejected 
              ? 'REJECTED'
              : 'ACCEPTED'
            }
          </OverlayLabel>
        </Overlay>
      </OverlayWrapper>
    }
  </>

export default TakePictureID;