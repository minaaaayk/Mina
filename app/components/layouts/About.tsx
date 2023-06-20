import React from 'react'
import styled from 'styled-components';
import { Breakpoint } from '../../constants';
import { gradientGenerator } from '../../functions';

export const About:React.FC = () => {
  return (
    <Wrapper>
        <Title>
          this is about
        </Title>
    </Wrapper>
  )
}

const Wrapper = styled.section`
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

const Title = styled.h2`
  font-size: 3.5rem;
  font-family: 600;
  display: inline-block;
  background-image: ${gradientGenerator({first:"left", opacity:1})};
  -moz-background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;