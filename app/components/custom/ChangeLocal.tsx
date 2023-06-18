import React from 'react'
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Color } from '../../constants';

export const ChangeLocal:React.FC = () => {

  const router = useRouter()
  const { pathname, asPath, query, locale } = router;
  const getNextLocal = () => {
    return locale === 'en' ? 'fa' : 'en';
  }
  return (
    <LanguageButton
      onClick={() => {
        router.push({ pathname, query }, asPath, { locale: getNextLocal() })

      }}
    >
      {getNextLocal()}
    </LanguageButton>
  )
}

const LanguageButton  = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  margin: 0 1rem;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms;
  &:hover{
    top: 1rem;
    background-color: #ffffff3d;
    border-radius: .5rem;
  }
`;