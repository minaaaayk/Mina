import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useIsRtl } from '../../hooks/useIsRtl';
import { Color } from '../../constants';

export const Navigation:React.FC = () => {
    const [show, setShow] = useState<boolean>(false)
    const isRtl = useIsRtl();;
  return (
    <div>
        <NavButton isRtl={isRtl} onClick={() => setShow(!show)} >
            <Icon show={show}/>
        </NavButton>
        <NavBackground isRtl={isRtl} show={show} />
        <NavWrapper show={show}>
            <List>
                <Item><A>About Us</A></Item>
                <Item><A>Some Features</A></Item>
                <Item><A>Popular</A></Item>
                <Item><A>Stories...</A></Item>
                <Item><A>Book Now</A></Item>
            </List>
        </NavWrapper>
        
    </div>
  )
}

const NavButton = styled.button<{isRtl: boolean}>`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    position: fixed;
    background-color: white;
    top: 2.5rem;
    left: ${props => props.isRtl ? '2rem' : 'unset'};
    right: ${props => props.isRtl ? 'unset' : '2rem'};
    z-index: 200;
    border: none;
    box-shadow: 0 1rem 3rem rgba(0, 0,0 , .1);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Icon = styled.span<{show: boolean}>`
    position: relative;
    background-color: ${props => props.show ? 'transparent' : '#666666'};
    &, &::after, &::before{
        display: inline-block;
        content: "";
        width: 3rem;
        height: 2px;
    }
    &::after, &::before{
        transition: all .2s;
        position: absolute;
        left: 0;
        background-color: #666666;
    }
    
    &::after{ top: -.8rem; } // transform-origin: right/left;
    &::before{ top: .8rem; }

    ${(props) => {
        if (props.show) {
            return css`
            &::after{
                top: 0;
                transform: rotate(135deg);
            }
            &::before{
                top: 0;
                transform: rotate(-135deg);
            }
        `;
        }
  }}
`;
const NavBackground = styled.div<{isRtl: boolean, show: boolean}>`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    position: fixed;
    background-image: radial-gradient( ${Color.gradientGreen3} ,${Color.mainGreen});
    top: 2.5rem;
    left: ${props => props.isRtl ? '2.5rem' : 'unset'};
    right: ${props => props.isRtl ? 'unset' : '2.5rem'};
    z-index: 100;
    transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1);
    transform: ${props => props.show ? 'scale(80)' : 'scale(1)'};;
`;


const NavWrapper = styled.nav<{show: boolean}>`
    height: 100vh;
    width: 100%;
    /* background-color: ${Color.mainGreen};  */
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 150;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(200rem)'};;

`;

const List = styled.ul`
    z-index: 151;
`;

const Item = styled.li`
    margin: 1rem;
    list-style: none;
`;

const A = styled.a`
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    color: white;
    padding: 1rem 2rem ;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(120deg, transparent 50%, white 50%);
    background-size: 230%;
    transition: all .4s;
    cursor: pointer;
    &:hover, &:active{
        background-position: 100%;
        color: ${Color.mainGreen};
        transform: translateX(1rem);
    }
`;




