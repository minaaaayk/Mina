import React from 'react'
import styled from 'styled-components';
import { Breakpoint } from '../../constants';
import { Paragraph, SecondaryHeading, TertiaryHeading, TextButton } from '../modules';
import { useTranslation } from 'next-i18next';
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
  @media (min-width: ${Breakpoint.md}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  padding: 10rem;
`;
const DescriptionWrapper = styled.div`
`;

const ImagesWrapper = styled.div`
`;