import React from 'react'
import styled from 'styled-components';
import { gradientGenerator } from '../../constants'
import bg from '../../public/bg.jpg';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";


export const HeaderContainer:React.FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("header");

  return (
    <Wrapper>
      {/* <PrimaryHeader>Mina Yagoubi kia</PrimaryHeader> */}
      <PrimaryHeader> {t("name")} {locale}</PrimaryHeader>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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

const PrimaryHeader = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 60px;
`;