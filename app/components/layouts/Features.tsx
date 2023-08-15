import React from 'react'
import styled from 'styled-components'
import { BackgroundImage, GradientWrapper, ImageWrapper } from '../modules'
import { useIsRtl } from '../../hooks/useIsRtl'
import { Card } from '../'
import { useTranslation } from 'next-i18next'
import { Breakpoint } from '../../constants'
export const Features:React.FC = () => {
  const { t } = useTranslation("features");
  const isRtl = useIsRtl();
  return (
    <FeatureWrapper isRtl={isRtl}>
      <Wrapper>
        <Card
          title={t("cards.0.title")}
          desc={t("cards.0.description")}
          icon="fa-regular fa-handshake"
        />
        <Card
          title={t("cards.0.title")}
          desc={t("cards.0.description")}
          icon='fa-regular fa-face-smile'
        />
        <Card
          title={t("cards.0.title")}
          desc={t("cards.0.description")}
          icon='fa-regular fa-heart'
        />
        <Card
          title={t("cards.0.title")}
          desc={t("cards.0.description")}
          icon='fa-regular fa-clock'
        />
      </Wrapper>
      <BackgroundImage/>
    </FeatureWrapper>
  )
}

const FeatureWrapper = styled(ImageWrapper)`
  margin-top: 5rem;
  @media (min-width: ${Breakpoint.md}) {
    margin-top: 20rem;
  }
  @media (min-width: ${Breakpoint.lg}) {
      margin-top: -30vh;
  }
  clip-path: ${props => 
        props.isRtl
        ? `polygon(0 0, 100% 20%, 100% 100%, 0 80%)` 
        : 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)'
    };
`;

const Wrapper = styled(GradientWrapper)`

  padding: 10rem;
  @media (min-width: ${Breakpoint.md}) {
    padding: 20rem 10rem;
  }
 @media (min-width: ${Breakpoint.lg}) {
    padding: 20rem;
  }
  gap: 2rem;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;