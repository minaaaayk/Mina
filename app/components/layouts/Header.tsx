import React from 'react'
import styled from 'styled-components';
import { gradientGenerator } from '../../functions'
import bg from '../../../public/bg.jpg';
import Image from 'next/image';
import { useTranslation } from "next-i18next";
import { ChangeLocal } from '../custom/ChangeLocal';
import { useIsRtl } from '../../hooks/useIsRtl';
import { Breakpoint } from '../../constants';
import { PrimaryHeading, SubPrimaryHeading, WhiteAnimatedButton } from '../modules';


export const Header:React.FC = () => {
  const { t } = useTranslation("header");
  const isRtl = useIsRtl();
  
  return (
    <>
    <Wrapper isRtl={isRtl}>
      <GrWrapper>
        <ChangeLocal/>
        <MainHeader>
          <PrimaryHeading isRtl={isRtl}> {t("primaryTitle")}</PrimaryHeading>
          <SubPrimaryHeading isRtl={isRtl}>{t("subTitle")}</SubPrimaryHeading>
          <WhiteAnimatedButton href="#">{t("mainButton")}</WhiteAnimatedButton>
        </MainHeader>
      </GrWrapper>
      <BgImage
        src={bg}
        alt=""
        objectFit="cover"
        layout='fill'
        objectPosition="center"
          
      />
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div<{isRtl: boolean}>`
  width: 100%;
  position: relative;

  height: 50vh;
  @media (min-width: ${Breakpoint.md}) {
      height: 65vh;
  }
  
  @media (min-width: ${Breakpoint.lg}) {
      height: 95vh !important;
  }

  clip-path: ${props => 
        props.isRtl
        ? `polygon(0 0, 100% 0, 100% 100%, 0 80%)` 
        : 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
    };
`;
const GrWrapper = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width:100%;
  background-position: center;
  background-size: cover;
  background-image: ${gradientGenerator({first:"right", second:"top", opacity:.8})};
  
`;
const BgImage = styled(Image)`
  z-index: 0;  
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