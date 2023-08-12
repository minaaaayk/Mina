import React from 'react';
import bg from '../../../../public/bg.jpg';
import Image from 'next/image';
import styled from 'styled-components';

export const BackgroundImage:React.FC = () => {
  return (
    <BgImage
        src={bg}
        alt=""
        objectFit="cover"
        layout='fill'
        objectPosition="center"
        
    />
  )
}

const BgImage = styled(Image)`
  z-index: 0;  
`;
