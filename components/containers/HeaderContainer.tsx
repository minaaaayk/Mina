import React from 'react'
import styled from 'styled-components';
import { gradientGenerator } from '../../constants'
import bg from '../../public/bg.jpg';




export const HeaderContainer:React.FC = () => {
  // console.log(gradientGenerator({first:"right", opacity:.5}));
  
  return (
    <Wrapper>HeaderContainer</Wrapper>
  )
}

const Wrapper = styled.div`
    background-image: ${gradientGenerator({first:"right", second:"top", opacity:.8})}, url(${bg.src});
    background-position: center;
    background-size: cover;
    height: 50vh;
    
    @media screen and (min-width: 600px) {
        height: 65vh;
    }

    @media screen and (min-width: 1024px) {
        height: 95vh;
    }
`;