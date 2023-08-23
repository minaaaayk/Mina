import React from 'react'
import { CardWrapper } from '../modules'
import styled from 'styled-components'

export const BooingCard:React.FC = () => {
  return (
    <Transition>
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
`;
const Transition = styled.div`
    perspective: 150rem;
    -ms-perspective: 150rem;
    &:hover{
        ${Card} {
          transform: rotateY(180deg);
        }
    }
`
