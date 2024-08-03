import React from 'react'
import styled from 'styled-components';
import { opacityToHex } from '../../functions';
import { Color } from '../../constants';
import { BookForm } from '../custom';

export const Book:React.FC = () => {
  return (
    <Wrapper>
      <BookForm/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15rem 0;
  background-image: linear-gradient(20deg, ${Color.mainBlue}${opacityToHex(.8)} 0%, ${Color.mainBlue}${opacityToHex(.4)} 60%);
`;
