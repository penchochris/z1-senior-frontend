import React from 'react';
import styled from 'styled-components';

const Rounded = styled.div`
  height: 48px;
  min-width: 181px;
  box-shadow: 0 10px 20px -5px rgba(47,0,121,0.3);
  border-radius: 24px;
  background-color: #2F0079;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonText = styled.p`
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.35px;
`;

interface Props {
  children: string;
  handleOnClick: () => void;
}

const RoundedButton: React.FC<Props> = ({ children, handleOnClick }: Props) => 
  <Rounded onClick={handleOnClick}>
    <ButtonText>{ children }</ButtonText>
  </Rounded>

export default RoundedButton;
