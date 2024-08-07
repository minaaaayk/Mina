import React from 'react'
import styled from 'styled-components';
import { CardWrapper, GradientIcon, Paragraph, TertiaryHeading, AnimatedButton } from '../modules';
import { Breakpoint, Color } from '../../constants';
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
    <Card>
        {icon && (<Icon className={icon}/>)}
        <TertiaryHeading>{title}</TertiaryHeading>
        <P>{desc}</P>
        <Btn color="transparent"> Show More </Btn>
    </Card>
  )
}

const Card = styled(CardWrapper)`
    height: 150px;
    @media (min-width: ${Breakpoint.md}) {
        height: 200px;
    }
    @media (min-width: ${Breakpoint.lg}) {
        height: 250px;
    }
    @media (min-width: ${Breakpoint.xxl}) {
        height: 400px;
    }
`

const P = styled(Paragraph)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* number of lines to show */
           line-clamp: 6;
    -webkit-box-orient: vertical;
`;

const Icon = styled(GradientIcon)`
    font-size: 4rem;
    margin-bottom: 1rem;
`;

const Btn = styled(AnimatedButton) `
    font-size: 1.4rem;
    font-weight: 900;
    color: ${Color.mainGreen};
    border: .8px solid ${Color.mainGreen};
`;