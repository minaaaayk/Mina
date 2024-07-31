import React from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import { Breakpoint } from '../../constants';
import { Paragraph, TertiaryHeading } from '../modules';

interface IProp{
    img: any;
}

export const Story:React.FC<IProp> = ({img}) => {
  return (
    <Wrapper>
        <Figure>
            <Image src={img} alt="" height="180px" width="180px"/>
        </Figure>
        <TextWrapper>
            <TertiaryHeading> Heading </TertiaryHeading>
            <Paragraph> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu congue magna. Quisque ornare dui quis enim laoreet, ut congue nulla faucibus. Ut neque dui, tristique at tempus et, aliquet sed magna. Donec placerat sapien nec cursus vehicula. Mauris consequat massa et felis bibendum, et commodo lorem semper. Nam quis semper leo, nec ultricies diam. Duis malesuada ante et libero suscipit, eu viverra lorem placerat. Ut ac vulputate dolor. Nulla sodales felis ac leo accumsan tincidunt. Sed in fringilla nisl. Suspendisse ac lectus nunc. Morbi sollicitudin massa sit amet fermentum fringilla. Vivamus a nulla consequat, pharetra lorem in, hendrerit purus. Integer molestie justo a velit faucibus tempor.  </Paragraph>
        </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    font-size: 2rem;

    width: 100%;
    padding: 6rem 9rem;
    margin: 4rem 4rem;
    @media (min-width: ${Breakpoint.lg}) {
      max-width: 75%;
      margin: 4rem 0;
    }

    background-color: white;

    box-shadow: 0 3rem 6rem rgba(0, 0, 0, .1);
    border-radius: 3px;
    transform: skewX(12deg);
`;

const Figure = styled.figure`
    width: 15rem;
    height: 15rem;
    background-color: black;
    float: left;
    // used for outside of Figure and position from the center of Figure (need float:left, and width and hight)
    shape-outside: circle(50% at 50% 50%);
    clip-path:  circle(50% at 50% 50%);
    transform: translateX(-3rem) skewX(-12deg);
  
`;

const TextWrapper = styled.div`
    transform: skewX(-12deg);
  
`;