import styled from "styled-components";
import { gradientGenerator } from '../../../functions'

export const GradientWrapper = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width:100%;
  background-position: center;
  background-size: cover;
  background-image: ${gradientGenerator({first:"right", second:"top", opacity:.8})};
  
`;