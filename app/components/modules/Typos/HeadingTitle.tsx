import styled from "styled-components";
import { gradientGenerator } from "../../../functions";

export const HeadingTitle = styled.h2`
  font-size: 3.5rem;
  font-family: 600;
  text-transform: uppercase;
  letter-spacing: .2rem;
  display: inline-block;
  background-image: ${gradientGenerator({first:"left", opacity:1})};
  -moz-background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: all 400ms;
  cursor: default;
  &:hover{
    transform: scale(1.2);
    text-shadow: .5rem 1rem 2rem rgba(0, 0, 0, 20%);
  }
`;