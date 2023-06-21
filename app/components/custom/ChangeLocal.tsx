import React from 'react'
import { useRouter } from 'next/router';
import { HeaderButton } from '../modules';

export const ChangeLocal:React.FC = () => {

  const router = useRouter()
  const { pathname, asPath, query, locale } = router;
  const getNextLocal = () => {
    return locale === 'en' ? 'fa' : 'en';
  }
  return (
    <HeaderButton
      onClick={() => {
        router.push({ pathname, query }, asPath, { locale: getNextLocal() })

      }}
    >
      {getNextLocal()}
    </HeaderButton>
  )
}

