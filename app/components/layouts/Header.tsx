import React from 'react'
import styled from 'styled-components';
import { useTranslation } from "next-i18next";
import { ChangeLocal } from '../';
import { useIsRtl } from '../../hooks/useIsRtl';
import { 
  BackgroundImage, GradientWrapper, ImageWrapper, PrimaryHeading, SubPrimaryHeading, WhiteAnimatedButton,
} from '../modules';


export const Header:React.FC = () => {
  const { t } = useTranslation("header");
  const isRtl = useIsRtl();
  
  return (
    <>
    <ImageWrapper isRtl={isRtl}>
      <GradientWrapper>
        <ChangeLocal/>
        <MainHeader>
          <PrimaryHeading isRtl={isRtl}> {t("primaryTitle")}</PrimaryHeading>
          <SubPrimaryHeading isRtl={isRtl}>{t("subTitle")}</SubPrimaryHeading>
          <WhiteAnimatedButton href="#">{t("mainButton")}</WhiteAnimatedButton>
        </MainHeader>
      </GradientWrapper>
      <BackgroundImage/>
    </ImageWrapper>
    </>
  )
}

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