import React from 'react'
import { BackgroundImage, CardTitle, CardWrapper, AnimatedButton } from '../modules'
import styled from 'styled-components'
import { Color } from '../../constants'
import { opacityToHex } from '../../functions'

export const BookingCard:React.FC = () => {
  return (
    <Transition>
        <Card className={'front'}>
          <Header>
            <BackgroundImage/>
            <BackColor />
            <CardTitle>
                The Header Of Card 
            </CardTitle>
          </Header>
          <List> 
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </List>
        </Card>
        <Card>
           <BackWrapper>
                Link
                <AnimatedButton>
                    Click Here
                </AnimatedButton>
           </BackWrapper>
        </Card>
    </Transition>
  )
}

const Card = styled(CardWrapper)`
  text-align: left;
  transition: all .8s;
  height: 50rem;
  position: absolute;
  top: 0;
  width: 100%;
  backface-visibility: hidden;
  &.front {
    background-color: white;
  }
  &:not(.front) {
    background-image: linear-gradient(45deg, ${Color.mainGreen} 0%, ${Color.mainBlue} 70%);
    transform: rotateY(180deg);
  }
`;
const Transition = styled.div`
    perspective: 150rem;
    -ms-perspective: 150rem;
    height: 50rem; // both wrapper and card must be same size
    width: 100%;
    position: relative;
    &:hover{
      ${Card} {
          &.front {
            transform: rotateY(-180deg);
          }
          &:not(.front) {
            transform: rotateY(0deg);
          }
        }
    }
`
const Header = styled.div`  
  & > span {
      z-index: 0;
      height: 20rem !important;
      clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    }
`;

const BackColor = styled.div`
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 20rem;
        // use background-blend-mode for both image and color in background
        background-blend-mode: screen;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        background-image: linear-gradient(30deg, ${Color.mainGreen}${opacityToHex(.5)} 10%, ${Color.mainGray}${opacityToHex(.5)} 70%);
`;

const List = styled.ul`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    
    text-align: center;
    font-size: 1.8rem;
    list-style-type: none;
    color: #777777;
    
    margin-bottom: 4rem;
    padding: 0 2rem;
    
    & > li {
        font-weight: 200;
        padding: .25rem 0;
        &:not(&:last-child) {
            border-bottom: 1px solid  #afadad;
        }
    }
`;

const BackWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    font-weight: 300;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

`;