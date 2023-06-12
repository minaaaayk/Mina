import React from 'react'
import styled from 'styled-components';
import { gradientGenerator } from '../../functions'
import bg from '../../../public/bg.jpg';
import { useTranslation } from "next-i18next";
import { ChangeLocal } from '../custom/ChangeLocal';


export const Header:React.FC = () => {
  const { t } = useTranslation("header");

  return (
    <Wrapper>
      <ChangeLocal/>
      <MainHeader>
        <PrimaryTitle> {t("primaryTitle")}</PrimaryTitle>
        <SubTitle>{t("subTitle")}</SubTitle>
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

const PrimaryTitle = styled.h1`
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 10px;
  animation-name: fromLeft;
  animation-duration: 1s;
  @keyframes fromLeft {
    0%{
      opacity: 0;
      transform: translateX(-100px);
    }

    60%{
      transform: translateX(30px);
    }
    100%{
      opacity: 1;
      transform: translate(0);
    }
  }
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 16px;
  animation-name: fromRight;
  animation-duration: 1s;
  @keyframes fromRight {
    0%{
      opacity: 0;
      transform: translateX(100px);
    }

    60%{
      transform: translateX(-30px);
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
  color: #242424;
  padding: 1rem 2rem;
  font-size: 18px;
  border: none;
  border-radius: 4rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: all .3s;
  position: relative;

  animation: fromBottom .5s ease-in-out 1s;
  animation-fill-mode: backwards;

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
    transform: translateY(-4px);
    box-shadow: -1px 10px 20px rgba(0, 0, 0, .2);
    &::after{
      transform: scaleX(1.3) scaleY(1.2);
      opacity: 0;
    }
    
  }
  &:active{
    transform: translateY(0px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  }

  @keyframes fromBottom {
    0%{
      opacity: 0;
      transform: translateY(100px);
      padding: 1rem 2rem;
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }

`;