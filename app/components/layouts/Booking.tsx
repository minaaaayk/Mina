import React from 'react'
import styled from 'styled-components';
import { AnimatedButton, SecondaryHeading } from '../modules';
import { Breakpoint, Color } from '../../constants';
import { BookingCard } from '../custom';

export const Booking:React.FC = () => {
  return (
    <Wrapper>
      <SecondaryHeading>Booking</SecondaryHeading>
      <Grid>
          <BookingCard/>
          <BookingCard/>
          <BookingCard/>
      </Grid>
      <Btn color={Color.gradientBlue1}> Booking Now</Btn>
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

const Btn = styled(AnimatedButton)`
    margin-top: 8rem;
    color: white;
`;