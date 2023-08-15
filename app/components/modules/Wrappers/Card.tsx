import React from 'react'
import styled from 'styled-components';
import { GradientIcon, Paragraph, TertiaryHeading } from '../';
import { Breakpoint, Color } from '../../../constants';
import { IconProp } from '../../../types';


interface IProps {
    title: string;
    desc: string;
    icon?: IconProp;
};


export const Card:React.FC<IProps> = ({
    title,
    desc,
    icon,
}) => {
  return (
    <Wrapper>
        {icon && (<Icon className={icon}/>)}
        <TertiaryHeading>{title}</TertiaryHeading>
        <P>{desc}</P>

    </Wrapper>
  )
}

const Wrapper = styled.div`

    height: 150px;
    @media (min-width: ${Breakpoint.md}) {
        height: 200px;
    }
    @media (min-width: ${Breakpoint.lg}) {
        height: 250px;
    }
    background-color: rgba(255, 255, 255, .8);
    padding: 2.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5 4rem rgba(0, 0, 0, .15);
`;


const P = styled(Paragraph)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4;
    -webkit-box-orient: vertical;
`;

const Icon = styled(GradientIcon)`
    font-size: 4rem;
    margin-bottom: 1rem;
`;