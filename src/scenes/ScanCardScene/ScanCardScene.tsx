import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import RoundedButton from '../../components/common/buttons/RoundedButton/RoundedButton';
import IDPictureTaker from '../../components/IDPictureTaker/IDPictureTaker';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const WrapperMain = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 32px;
`;

const Title = styled.h2`
  height: 24px;
  width: 282px;
  color: #000000;
  font-family: Roboto;
  font-size: 21px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
  left: 50%;
`;

const Text = styled.p`
  height: 48px;
  width: 314px;
  color: #000000;
  font-family: Roboto;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const ScanCardScene: React.FC = () => {
  return (
    <Wrapper>
      <Header/>
      <WrapperMain>
        <Title>Scan your ID</Title>
        <Text>Take a picture. It may take time to validate your personal information</Text>
        <IDPictureTaker/>
      </WrapperMain>
    </Wrapper>
  );
}

export default ScanCardScene;