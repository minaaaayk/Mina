import React from 'react'
import styled from 'styled-components';
import { SecondaryHeading } from '../modules';
import { Breakpoint, Color } from '../../constants';
import { Story } from '../custom';
import { opacityToHex } from '../../functions';
import img1 from '../../../public/1.png';
import img2 from '../../../public/2.png';
import img3 from '../../../public/3.png';
import img4 from '../../../public/4.png';
import img5 from '../../../public/5.png';


export const Stories:React.FC = () => {
  return (
    <Wrapper>
        <SecondaryHeading>This is a Section Stories</SecondaryHeading>
        <Story img={img1} />
        <Story img={img2} />
        <Story img={img3} />
        <Story img={img4} />
        <Story img={img5} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15rem 0;
  background-color: ${Color.gradientGreen1}${opacityToHex(.2)};
`;
