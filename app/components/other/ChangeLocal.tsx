import React from 'react'
import { useRouter } from 'next/router';

export const ChangeLocal:React.FC = () => {

  const router = useRouter()
  const { pathname, asPath, query, locale } = router;
  const getNextLocal = () => {
    return locale === 'en' ? 'fa' : 'en';
  }
  return (
    <div
      onClick={() => {
        router.push({ pathname, query }, asPath, { locale: getNextLocal() })

      }}
    >
      {getNextLocal()}
    </div>
  )
}
