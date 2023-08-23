import { Color } from '../../../constants';
import styled from 'styled-components';

export const GradientIcon = styled.i`
  font-size: 6rem;
  display: inline-block;
  background-image: linear-gradient(90deg, ${Color.gradientBlue1} 0%, ${Color.gradientPurple3} 100%);
  -moz-background-clip: text;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;