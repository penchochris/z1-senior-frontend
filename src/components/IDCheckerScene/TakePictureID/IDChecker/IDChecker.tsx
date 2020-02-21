import React from 'react';
import styled from 'styled-components';

import RoundedButton from '../../../common/buttons/RoundedButton/RoundedButton';
import IDBackground from '../../../common/icons/IDBackground.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
	height: 160px;
	width: 260px;
	border-radius: 12px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
`;

const IDContainer = styled.div`
  height: 124px;
  width: 217px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${IDBackground});
  background-size: 100% auto;
`;

interface Props {
  handleOnClick: () => void;
}

const IDChecker = ({ handleOnClick }: Props) => {
  return (
    <Wrapper>
      <IDContainer>
        <RoundedButton handleOnClick={handleOnClick}>TAKE PICTURE</RoundedButton>
      </IDContainer>
    </Wrapper>
  )
}


export default IDChecker;
