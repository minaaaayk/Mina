import styled from "styled-components";
import { Color } from "../../../constants";

export const WhiteAnimatedButton = styled.a`

  text-decoration: none;
  background-color: white;
  color: ${Color.mainText};
  padding: 1rem 2rem;
  font-size: 1.8rem;
  border: none;
  border-radius: 4rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: all .3s;
  position: relative;

  animation: fromBottom .5s ease-in-out 1s;
  animation-fill-mode: backwards;
  /*  backwards: start with first start (use for delay) */
  /*  forwards:  stay in last state */
  /*  both: use forward and backward together */


  &::after{
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    background-color: white;
    border-radius: 4rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;  
    transition : all .5s;
    opacity: 1;
  }

  &:hover{
    transform: translateY(-.4rem);
    box-shadow: -.1rem 1rem 2rem rgba(0, 0, 0, .2);
    &::after{
      transform: scaleX(1.3) scaleY(1.2);
      opacity: 0;
    }
    
  }
  &:active{
    transform: translateY(0);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
  }

  @keyframes fromBottom {
    0%{
      opacity: 0;
      transform: translateY(10rem);
      padding: 1rem 2rem;
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }

`;