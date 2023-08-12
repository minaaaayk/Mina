import { faMeh } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { BackgroundImage, GradientWrapper, ImageWrapper } from '../modules'
import { useIsRtl } from '../../hooks/useIsRtl'

export const Features:React.FC = () => {
  const isRtl = useIsRtl();
  return (
    <FeatureWrapper isRtl={isRtl}>
      <Wrapper>
        <Icon icon={faMeh}/>
      </Wrapper>
      <BackgroundImage/>
    </FeatureWrapper>
  )
}

const FeatureWrapper = styled(ImageWrapper)`
  clip-path: ${props => 
        props.isRtl
        ? `polygon(0 0, 100% 20%, 100% 100%, 0 80%)` 
        : 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)'
    };
`;

const Wrapper = styled(GradientWrapper)`
  padding: 20rem 0;
  overflow-y: hidden;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
`;