import React from 'react'
import styled from 'styled-components';
import bg from '../../public/bg.png'


export const HeaderContainer:React.FC = () => {
  return (
    <Wrapper>HeaderContainer</Wrapper>
  )
}

const Wrapper = styled.div`

    background-image: url(${bg.src});
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