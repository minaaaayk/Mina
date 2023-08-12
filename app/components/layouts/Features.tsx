import { faMeh } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

export const Features:React.FC = () => {
  return (<Wrapper>
      <Icon icon={faMeh}/>
  </Wrapper>)
}

const Wrapper = styled.div`
  width: 100%;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
`;