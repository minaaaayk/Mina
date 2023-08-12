import styled from "styled-components";
import { Breakpoint } from "../../../constants";

export const ImageWrapper = styled.section<{isRtl: boolean}>`
  width: 100%;
  position: relative;

  height: 50vh;
  @media (min-width: ${Breakpoint.md}) {
      height: 65vh;
  }
  
  @media (min-width: ${Breakpoint.lg}) {
      height: 95vh !important;
  }

  clip-path: ${props => 
        props.isRtl
        ? `polygon(0 0, 100% 0, 100% 100%, 0 80%)` 
        : 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'
    };
`;