import React from 'react'
import styled from 'styled-components';
import { gradientGenerator } from '../../functions'
import bg from '../../../public/bg.jpg';
import { useTranslation } from "next-i18next";
import { ChangeLocal } from '../custom/ChangeLocal';
import { useIsRtl } from '../../hooks/useIsRtl';
import { Breakpoint, Color } from '../../constants';


export const Header:React.FC = () => {
  const { t } = useTranslation("header");
  const isRtl = useIsRtl();
  
  return (
    <Wrapper>
      <ChangeLocal/>
      <MainHeader>
        <PrimaryTitle isRtl={isRtl}> {t("primaryTitle")}</PrimaryTitle>
        <SubTitle isRtl={isRtl}>{t("subTitle")}</SubTitle>
        <WhiteButton href="#">{t("mainButton")}</WhiteButton>
      </MainHeader>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    background-image: ${gradientGenerator({first:"right", second:"top", opacity:.8})}, url(${bg.src});
    background-position: center;
    background-size: cover;
    height: 50vh;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    position: relative;

    
    @media screen and (min-width: 600px) {
        height: 65vh;
    }

    @media screen and (min-width: 1024px) {
        height: 95vh;
    }
`;

const MainHeader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-transform: uppercase;
  color: white;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  backface-visibility: hidden;
`;

const PrimaryTitle = styled.h1<{isRtl: boolean}>`
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

const SubTitle = styled.h3<{isRtl: boolean}>`
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

const WhiteButton = styled.a`

  text-decoration: none;
  background-color: white;
  color: ${Color.mainText};
  padding: 1rem 2rem;
  font-size: 1.8rem;
  border: none;
  border-radius: 4rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: all .3s;
  position: relative;

  animation: fromBottom .5s ease-in-out 1s;
  animation-fill-mode: backwards;
  /*  backwards: start with first start (use for delay) */
  /*  forwards:  stay in last state */
  /*  both: use forward and backward together */


  &::after{
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    background-color: white;
    border-radius: 4rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;  
    transition : all .5s;
    opacity: 1;
  }

  &:hover{
    transform: translateY(-.4rem);
    box-shadow: -.1rem 1rem 2rem rgba(0, 0, 0, .2);
    &::after{
      transform: scaleX(1.3) scaleY(1.2);
      opacity: 0;
    }
    
  }
  &:active{
    transform: translateY(0);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
  }

  @keyframes fromBottom {
    0%{
      opacity: 0;
      transform: translateY(10rem);
      padding: 1rem 2rem;
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }

`;