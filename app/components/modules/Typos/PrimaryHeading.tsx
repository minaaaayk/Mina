import styled from "styled-components";
import { Breakpoint } from "../../../constants";

export const PrimaryHeading = styled.h1<{isRtl: boolean}>`
  font-weight: 600;

  letter-spacing: 0;
  word-spacing: 0;
  font-size: 2.5rem;
  @media (min-width: ${Breakpoint.xxs}) {
    font-size: 3.5rem;
  }
  @media (min-width: ${Breakpoint.md}) {
    font-size: 5rem;
    letter-spacing: ${props => props.isRtl ? '0' : '.25rem'};
    word-spacing: ${props => props.isRtl ? '.25rem' : '0'};
  }
  @media (min-width: ${Breakpoint.lg}) {
    font-size: 6rem;
    letter-spacing: ${props => props.isRtl ? '0' : '.5rem'};
    word-spacing: ${props => props.isRtl ? '.5rem' : '0'};
  }
  @media (min-width: ${Breakpoint.xl}) {
    letter-spacing: ${props => props.isRtl ? '0' : '.75rem'};
    word-spacing: ${props => props.isRtl ? '.75rem' : '0'};
  }
  @media (min-width: ${Breakpoint.xxl}) {
    letter-spacing: ${props => props.isRtl ? '0' : '1rem'};
    word-spacing: ${props => props.isRtl ? '1rem' : '0'};
  }
  animation-name: fromLeft;
  animation-duration: 1s;
  @keyframes fromLeft {
    0%{
      opacity: 0;
      transform: translateX(-10rem);
    }

    60%{
      transform: translateX(3rem);
    }
    100%{
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const SubPrimaryHeading = styled.h3<{isRtl: boolean}>`
  font-size: 1.5rem;
  @media (min-width: ${Breakpoint.xxs}) {
    font-size: 2rem;
  }
  font-weight: 600;


  letter-spacing: ${props => props.isRtl ? '0' : '.25rem'};
  word-spacing: ${props => props.isRtl ? '.25rem' : '0'};
  @media (min-width: ${Breakpoint.md}) {
    letter-spacing: ${props => props.isRtl ? '0' : '.5rem'};
    word-spacing: ${props => props.isRtl ? '.5rem' : '0'};
  }
  @media (min-width: ${Breakpoint.lg}) {
    letter-spacing: ${props => props.isRtl ? '0' : '.75rem'};
    word-spacing: ${props => props.isRtl ? '.75rem' : '0'};
  }
  @media (min-width: ${Breakpoint.xl}) {
    letter-spacing: ${props => props.isRtl ? '0' : '1rem'};
    word-spacing: ${props => props.isRtl ? '1rem' : '0'};
  }
  @media (min-width: ${Breakpoint.xxl}) {
    letter-spacing: ${props => props.isRtl ? '0' : '1.6rem'};
    word-spacing: ${props => props.isRtl ? '1.6rem' : '0'};
  }
  animation-name: fromRight;
  animation-duration: 1s;
  @keyframes fromRight {
    0%{
      opacity: 0;
      transform: translateX(10rem);
    }

    60%{
      transform: translateX(-3rem);
    }
    100%{
      opacity: 1;
      transform: translate(0);
    }
  }
`;