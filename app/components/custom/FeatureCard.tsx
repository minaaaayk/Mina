import React from 'react'
import styled from 'styled-components';
import { CardWrapper, GradientIcon, Paragraph, TertiaryHeading } from '../modules';
import { Breakpoint } from '../../constants';
import { IconProp } from '../../types';


interface IProps {
    title: string;
    desc: string;
    icon?: IconProp;
};


export const FeatureCard:React.FC<IProps> = ({
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

const Wrapper = styled(CardWrapper)`
    height: 150px;
    @media (min-width: ${Breakpoint.md}) {
        height: 200px;
    }
    @media (min-width: ${Breakpoint.lg}) {
        height: 250px;
    }
`

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