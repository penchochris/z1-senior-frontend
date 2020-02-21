import React from 'react';
import styled from 'styled-components'

interface Props {
  children?: string;
  test?: string;
}

const Header: React.FC<Props> = ({ children }) => {

  //I'm unable to get props with typescript :(
  const Wrapper = styled.div`
    box-sizing: border-box;
    height: 60px;
    border-bottom: ${children && '1px solid rgba(47,0,121,0.1)'};
    padding-left: 20px;
    display: flex;
    align-items: center;
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

  return (
    <Wrapper>
      <BankName>{ children }</BankName>
    </Wrapper>
  );
}

export default Header;