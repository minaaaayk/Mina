import React from "react";
import styled from "styled-components";
import { Color } from "../../constants";
import Logo from '../custom/Logo';
import Link from "next/link";
import { opacityToHex } from "../../functions";

export const Footer:React.FC = () => {

  return (
    <Wrapper>
        <Logo fillColor="#d4d4d4"/>
        <Row>
            <Navigation>
                <Item> Company </Item>
                <Item> Contact Us </Item>
                <Item> Carrier </Item>
                <Item> Terms </Item>
            </Navigation>
            <CopyRight>
                Build ©2023, by <Link href="https://github.com/minaaaayk/" passHref><A>  Mina Yaghoubi </A></Link>
                from Udemy Course <Link href="https://www.udemy.com/course/advanced-css-and-sass/?couponCode=LETSLEARNNOWPP" passHref><A>Advanced Css</A></Link>.
                it build with Next.js and deployed on Vercel.
            </CopyRight>
        </Row>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15rem 0;
  background-color: #476374;
`;

const Row = styled.div`
    width: 100%;
    padding: 10rem 20rem;

    display: flex;
    justify-content: space-between;
    gap: 20rem;


    color: white;
`;

const Col = styled.ul`
    border-top: 2px solid #b3b3b3;
    width: 100%;
    display: flex;
    list-style: none;
    padding-top: 2rem;
`;

const Navigation = styled(Col)`
    gap: 1rem;
`;
const Item = styled.li`
    display: inline-block;
    padding: .5rem 1rem ;
    font-size: 1.6rem;
    max-height: 3.5rem;
    cursor: pointer;
    transition: all .3s;
    &:hover{
        color: ${Color.gradientGreen1};
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, .5);
        transform: rotate(5deg) scale(1.3);
    }
`
const CopyRight = styled(Col)`
  display: inline-block;
  font-size: 1.8rem;
`;

const A = styled.a`

    color: ${Color.gradientPink2};
    text-decoration: none;
    transition: all .3s;
    cursor: pointer;
    :link, :visited{
        color: ${Color.gradientPink2};
        text-decoration: none;
    }
    :hover, :active{
        color: ${Color.mainPink};
        text-decoration: none;
    }
`;