import React from 'react'
import styled from 'styled-components';
import { Breakpoint } from '../../constants';
import { SecondaryHeading } from '../modules';

export const About:React.FC = () => {
  return (
    <Wrapper>
        <SecondaryHeading> this is about </SecondaryHeading>
        <GridWrapper>
          <DescriptionWrapper>

          </DescriptionWrapper>
          <ImagesWrapper>
            
          </ImagesWrapper>
        </GridWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-size: 3rem;
  padding: 25rem 0;
  margin-top: -10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${Breakpoint.md}) {

    margin-top: -15vh;
  }

  @media (min-width: ${Breakpoint.lg}) {
    margin-top: -20vh;
  }
`;


const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
const DescriptionWrapper = styled.div`
`;

const ImagesWrapper = styled.div`
`;