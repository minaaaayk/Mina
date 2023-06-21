import React from 'react'
import styled from 'styled-components';
import { gradientGenerator } from '../../functions'
import bg from '../../../public/bg.jpg';
import { useTranslation } from "next-i18next";
import { ChangeLocal } from '../custom/ChangeLocal';
import { useIsRtl } from '../../hooks/useIsRtl';
import { Breakpoint } from '../../constants';
import { WhiteAnimatedButton } from '../modules';


export const Header:React.FC = () => {
  const { t } = useTranslation("header");
  const isRtl = useIsRtl();
  
  return (
    <Wrapper isRtl={isRtl}>
      <ChangeLocal/>
      <MainHeader>
        <PrimaryTitle isRtl={isRtl}> {t("primaryTitle")}</PrimaryTitle>
        <SubTitle isRtl={isRtl}>{t("subTitle")}</SubTitle>
        <WhiteAnimatedButton href="#">{t("mainButton")}</WhiteAnimatedButton>
      </MainHeader>
    </Wrapper>
  )
}

const Wrapper = styled.section<{isRtl: boolean}>`
    background-image: ${gradientGenerator({first:"right", second:"top", opacity:.8})}, url(${bg.src});
    background-position: center;
    background-size: cover;
    height: 50vh;
    clip-path: ${props => 
                    props.isRtl
                    ? `polygon(0 0, 100% 0, 100% 100%, 0 80%)` 
                    : 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
                };
    position: relative;

    
    @media (min-width: ${Breakpoint.md}) {
        height: 65vh;
    }

    @media (min-width: ${Breakpoint.lg}) {
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