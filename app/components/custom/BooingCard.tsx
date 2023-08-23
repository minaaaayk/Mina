import React from 'react'
import { CardWrapper } from '../modules'
import styled from 'styled-components'
import { Color } from '../../constants'

export const BooingCard:React.FC = () => {
  return (
    <Transition>
        <Card className={'front'}>
          hi
        </Card>
        <Card>
          hi
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
    background-image: linear-gradient(45deg, ${Color.gradientBlue1} 0%, ${Color.gradientPurple3} 70%);
    transform: rotateY(180deg);
  }
`;
const Transition = styled.div`
    perspective: 150rem;
    -ms-perspective: 150rem;
    height: 50rem;
    width: 100%;
    position: relative;
    &:hover{
      ${Card} {
        &.front {
            transform: rotateY(180deg);
          }
          &:not(.front) {
            transform: rotateY(0deg);
          }
        }
    }
`
