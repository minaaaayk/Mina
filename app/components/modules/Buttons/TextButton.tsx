import styled from "styled-components";
import { Color } from "../../../constants";

export const TextButton = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
  color: ${Color.mainPink};
  text-decoration: none;
  border-bottom: 1px solid ${Color.mainPink};
  padding: 2px 5px 0;
  transition: all .2s;
  &:hover{
    background-color: ${Color.mainPink} ;
    color: white;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .15) ;
    transform: translateY(-2px);
  }
  &:active{
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) ;
    transform: translateY(0);
  }
`;