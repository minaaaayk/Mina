import React from 'react'
import styled from 'styled-components';
import { Breakpoint } from '../../constants';

export const About:React.FC = () => {
  return (
    <Wrapper>
        this is about
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: antiquewhite;
  font-size: 3rem;
  padding: 25rem 0;
  margin-top: -10vh;
  @media (min-width: ${Breakpoint.md}) {

    margin-top: -15vh;
  }

  @media (min-width: ${Breakpoint.lg}) {
    margin-top: -20vh;
  }
`;