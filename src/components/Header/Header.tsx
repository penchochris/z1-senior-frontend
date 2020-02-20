import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  box-sizing: border-box;	
  border-bottom: 1px solid rgba(47,0,121,0.1);
  padding: 18px 0 18px 20px;
`;

const BankName = styled.h1`
  height: 24px;
  width: 101px;
  color: #2F0079;
  font-family: Roboto;
  font-size: 21px;
  font-style: italic;
  font-weight: bold;
  line-height: 24px;
`

const Header: React.FC = () => {
  return (
    <Wrapper>
      <BankName>BankClient</BankName>
    </Wrapper>
  );
}

export default Header;