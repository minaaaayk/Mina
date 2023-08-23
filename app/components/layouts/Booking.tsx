import React from 'react'
import styled from 'styled-components';
import { SecondaryHeading } from '../modules';
import { Breakpoint } from '../../constants';
import { BooingCard } from '../custom';

export const Booking:React.FC = () => {
  return (
    <Wrapper>
      <SecondaryHeading>Booking</SecondaryHeading>
      <Grid>
          <BooingCard/>
          <BooingCard/>
          <BooingCard/>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25rem 0 50rem 0;
  margin-top: -25rem;
  @media (min-width: ${Breakpoint.lg}) {
      margin-top: -30vh;
  }
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  padding: 5rem 5rem 0;
  gap: 2rem;
  @media (min-width: ${Breakpoint.lg}) {
      padding: 5rem 20rem 0;
      gap: 10rem;
  }
  grid-template-columns: 1fr 1fr 1fr;
`;
