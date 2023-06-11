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
`;

const PrimaryTitle = styled.h1`
  font-size: 60px;
  font-weight: 600;
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
