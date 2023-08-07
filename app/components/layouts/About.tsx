import React from 'react'
import styled from 'styled-components';
import { Breakpoint } from '../../constants';
import { Paragraph, SecondaryHeading, TertiaryHeading } from '../modules';

export const About:React.FC = () => {
  return (
    <Wrapper>
        <SecondaryHeading> this is about </SecondaryHeading>
        <GridWrapper>
          <DescriptionWrapper>
            <TertiaryHeading> What is Lorem Ipsum? </TertiaryHeading>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>

            <TertiaryHeading> Why do we use it? </TertiaryHeading>
            <Paragraph>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Paragraph>

          </DescriptionWrapper>
          <ImagesWrapper>
            
          </ImagesWrapper>
        </GridWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-size: 3rem;
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