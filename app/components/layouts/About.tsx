import React from 'react'
import styled from 'styled-components';
import { Breakpoint, Color } from '../../constants';
import { Paragraph, SecondaryHeading, TertiaryHeading, TextButton } from '../modules';
import { useTranslation } from 'next-i18next';
import Image from 'next/image'
import About1 from '../../../public/about1.jpg';
import About2 from '../../../public/about2.jpg';
import About3 from '../../../public/about3.jpg';
import { useIsRtl } from '../../hooks/useIsRtl';

export const About:React.FC = () => {
  const { t } = useTranslation("about");
  const isRtl = useIsRtl();

  return (
    <Wrapper>
        <SecondaryHeading>{t("primaryTitle")}</SecondaryHeading>
        <GridWrapper>
          <DescriptionWrapper>
            <TertiaryHeading> {t("firstTitle")} </TertiaryHeading>
            <Paragraph> {t("firstParagraph")} </Paragraph>

            <TertiaryHeading>{t("secondTitle")} </TertiaryHeading>
            <Paragraph> {t("secondParagraph")} </Paragraph>

            <TextButton>{t("more")} {isRtl ? `←` : `→`}</TextButton>

          </DescriptionWrapper>
          <ImagesWrapper>
            <ImageSpan><Image src={About1} alt=""/></ImageSpan>
            <ImageSpan><Image src={About2} alt=""/></ImageSpan>
            <ImageSpan><Image src={About3} alt=""/></ImageSpan>
          </ImagesWrapper>
        </GridWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 25rem 0;
  margin-top: -10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${Breakpoint.md}) {
    margin-top: -15vh;
  }

  @media (min-width: ${Breakpoint.lg}) {
    margin-top: -20vh;
  }
`;


const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${Breakpoint.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  padding: 10rem;
`;
const DescriptionWrapper = styled.div`
`;

const ImageSpan = styled.span`
  position: absolute;
  width: 55%;
  & > span {
      box-shadow: 0 1.5rem 4rem rgba(0, 0,0 , .4);
      border-radius: 2px;
  }
  cursor: pointer;
  transition: transform .5s ease-in-out .1s, outline .4s ease-in-out .2s;
  outline-offset: 1rem;
  &:hover{
    z-index: 10;
    transform: scale(1.2);
    outline: 1rem solid ${Color.gradientBlue2};
    & > span {
      box-shadow: 0 2.5rem 4rem rgba(0, 0,0 , .5);
  }
  }
  &:nth-child(1) {
    left: 0;
    top: -2rem;
  }
  &:nth-child(2) {
    right: 0;
    top: 2rem;
  }
  &:nth-child(3) {
    left: 20%;
    top: 10rem;
  }
`;

const ImagesWrapper = styled.div`
  margin-top: 10rem;
  position: relative;
  &:hover{
    ${ImageSpan} {
      &:not(:hover) {
        transform: scale(.9);
      }
    }
  }
`;