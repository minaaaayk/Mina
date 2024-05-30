import styled from "styled-components";
import { Color } from "../../../constants";
 import React, { ReactNode } from 'react';
import { opacityToHex } from "../../../functions";

export const CardTitleWrapper = styled.h4`  
    position: absolute;
    font-size: 3.5rem;
    font-weight: 300;
    color: white;
    text-transform: uppercase;


    
    right: 2rem;
    top: 12rem;
    margin: 2rem 0;
    width: 60%;
    z-index: 2;
    text-align: right;
    
    & > span {
        background-color: ${Color.gradientBlue2}${opacityToHex(.65)};
        box-decoration-break: clone; // to repeat of continue styles in the nex line
        padding: 1rem 1.5rem;
    }
`;

 interface IProps{
    children: ReactNode;
 };
 export const CardTitle:React.FC<IProps> = ({ children }) => {
   return (
     <CardTitleWrapper>
        <span>{children}</span>
     </CardTitleWrapper>
   )
 }
 